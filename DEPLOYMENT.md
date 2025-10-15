# Deployment Guide for Clinic 1 Medical

## Prerequisites

1. **DigitalOcean Account** with CLI (`doctl`) installed and authenticated
2. **GitHub Repository** connected to DigitalOcean
3. **Email Server Credentials** (mail.clappe.com)
4. **New Password** for EMAIL_HOST_PASSWORD (old password `teams2244` was exposed)

---

## 🚨 CRITICAL: Before Deploying

### 1. Rotate Email Password

The password `teams2244` has been exposed in git history and MUST be changed:

```bash
# 1. Log into your email server
# Server: mail.clappe.com
# Account: account@clappe.com

# 2. Generate a strong new password
# Recommended: Use a password manager to generate 20+ character password

# 3. Update the password on the email server

# 4. Update deploy-final.yaml with the new password (see step below)
```

### 2. Update Deployment Configuration

Edit `deploy-final.yaml` and replace the EMAIL_HOST_PASSWORD:

```yaml
  - key: EMAIL_HOST_PASSWORD
    scope: RUN_AND_BUILD_TIME
    type: SECRET
    value: YOUR_NEW_SECURE_PASSWORD_HERE  # Replace this!
```

⚠️ **IMPORTANT**: NEVER commit the actual password to git. The deployment file should only contain the placeholder.

---

## Deployment Methods

### Method 1: Deploy via doctl CLI (Recommended)

```bash
# 1. Ensure you're in the project directory
cd /Users/md/Documents/Md/Clinic1/clinic1-medical

# 2. Update the password in deploy-final.yaml (see above)

# 3. Deploy the app
doctl apps create --spec deploy-final.yaml

# 4. Get the app ID
doctl apps list

# 5. Monitor deployment
doctl apps get <APP_ID>

# 6. View logs
doctl apps logs <APP_ID> --type run

# 7. Get the app URL
doctl apps get <APP_ID> --format DefaultIngress
```

### Method 2: Deploy via DigitalOcean Web Interface

1. Go to https://cloud.digitalocean.com/apps
2. Click "Create App"
3. Select your GitHub repository: `ClappeDiya/clinic1-medical`
4. Select branch: `main`
5. Configure environment variables:
   - `NODE_ENV`: `production`
   - `EMAIL_HOST`: `mail.clappe.com`
   - `EMAIL_PORT`: `587`
   - `EMAIL_USE_TLS`: `True`
   - `EMAIL_HOST_USER`: `account@clappe.com`
   - `EMAIL_HOST_PASSWORD`: `<YOUR_NEW_PASSWORD>` (mark as SECRET)
   - `DEFAULT_FROM_EMAIL`: `noreply@clapbill.com`
   - `CLINIC_EMAIL`: `cliniconemedical@gmail.com`
6. Set build command: `npm run build`
7. Set run command: `npm run start`
8. Set HTTP port: `3000`
9. Deploy!

---

## Post-Deployment Steps

### 1. Verify Deployment

```bash
# Get app URL
doctl apps list

# Visit the URL in browser
open https://your-app-url.ondigitalocean.app

# Test the contact form
# Try submitting with valid data
```

### 2. Test Security Features

#### A. Test Rate Limiting
```bash
# Send 6 requests quickly (should get rate limited on 6th)
for i in {1..6}; do
  curl -X POST https://your-app-url.ondigitalocean.app/api/contact \
    -H "Content-Type: application/json" \
    -d '{"firstName":"Test","lastName":"User","email":"test@example.com","subject":"Test","message":"Testing rate limit"}' \
    -w "\nStatus: %{http_code}\n\n"
  sleep 1
done
```

Expected: First 5 succeed (200), 6th returns 429 (Too Many Requests)

#### B. Test Security Headers
```bash
# Check security headers
curl -I https://your-app-url.ondigitalocean.app

# Should see:
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# Referrer-Policy: strict-origin-when-cross-origin
# Content-Security-Policy: ...
```

#### C. Test Bot Protection
The honeypot field will silently reject bots that fill all fields.

#### D. Test CSRF Protection
Only requests from your domain will be accepted.

### 3. Set Up Custom Domain (Optional)

```bash
# Add domain to app
doctl apps update <APP_ID> --spec deploy-final.yaml

# Update DNS records
# Add CNAME record: www -> <your-app>.ondigitalocean.app
# Add A record: @ -> DigitalOcean IP
```

### 4. Enable HTTPS (Automatic)

DigitalOcean automatically provisions SSL certificates. Verify:
```bash
curl -I https://your-domain.com | grep -i "strict-transport"
```

Once confirmed, uncomment HSTS header in `src/lib/security.ts:194`

---

## Monitoring & Maintenance

### View Application Logs

```bash
# Real-time logs
doctl apps logs <APP_ID> --type run --follow

# Build logs
doctl apps logs <APP_ID> --type build

# Deployment logs
doctl apps logs <APP_ID> --type deploy
```

### Check Application Health

```bash
# Get app details
doctl apps get <APP_ID>

# Check deployment status
doctl apps get <APP_ID> --format ActiveDeployment.Phase
```

### Update Environment Variables

```bash
# Update a secret (e.g., after rotating password)
doctl apps update <APP_ID> --spec deploy-final.yaml

# This will trigger a new deployment
```

### Scale Application

```bash
# Edit deploy-final.yaml
# Change: instance_count: 2  # Scale to 2 instances
# Change: instance_size_slug: basic-xs  # Upgrade to larger instance

# Apply changes
doctl apps update <APP_ID> --spec deploy-final.yaml
```

---

## Troubleshooting

### Build Fails

```bash
# Check build logs
doctl apps logs <APP_ID> --type build

# Common issues:
# - Missing dependencies: Check package.json
# - TypeScript errors: Run `npm run build` locally first
# - Environment variables: Verify all are set
```

### Runtime Errors

```bash
# Check runtime logs
doctl apps logs <APP_ID> --type run

# Common issues:
# - Email sending fails: Verify EMAIL_HOST_PASSWORD is correct
# - Rate limiting not working: Check if Redis is needed for multi-instance
# - CORS errors: Verify allowed origins in src/app/api/contact/route.ts
```

### Contact Form Not Working

```bash
# Test email configuration
curl -X POST https://your-app-url.ondigitalocean.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "1234567890",
    "subject": "Test",
    "message": "This is a test message"
  }'

# Check logs for error details
doctl apps logs <APP_ID> --type run | grep "Contact form error"
```

---

## Security Checklist

Before going live, ensure:

- [ ] Email password has been rotated
- [ ] All environment variables are set
- [ ] Security headers are present (test with curl -I)
- [ ] Rate limiting is working (test with multiple requests)
- [ ] Contact form validates input properly
- [ ] Bot protection (honeypot) is enabled
- [ ] HTTPS is working (automatic with DigitalOcean)
- [ ] HSTS header is enabled (after HTTPS confirmed)
- [ ] security.txt is accessible at /.well-known/security.txt
- [ ] No sensitive data in logs
- [ ] Error messages don't expose internals

---

## Rollback Procedure

If deployment fails or has issues:

```bash
# List deployments
doctl apps deployment list <APP_ID>

# Rollback to previous deployment
doctl apps deployment rollback <APP_ID> <DEPLOYMENT_ID>

# Alternative: Deploy from specific git commit
git checkout <PREVIOUS_COMMIT_HASH>
git push origin main --force
```

---

## Performance Optimization

### Enable Caching

Add to `next.config.js`:
```javascript
module.exports = {
  headers: async () => [
    {
      source: '/assets/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
}
```

### Implement Redis for Multi-Instance

For multi-instance deployments, replace in-memory rate limiting with Redis:

```bash
# Add Redis to DigitalOcean
doctl databases create clinic-redis --engine redis --region sfo3

# Get connection string
doctl databases connection <DATABASE_ID>

# Add to deploy-final.yaml:
  - key: REDIS_URL
    scope: RUN_AND_BUILD_TIME
    type: SECRET
    value: <REDIS_CONNECTION_STRING>
```

Update `src/lib/security.ts` to use Redis instead of Map.

---

## Cost Estimation

**Basic XXS Instance**: $5/month
- 512 MB RAM
- 1 vCPU
- Suitable for small to medium traffic

**Scaling Options**:
- Basic XS ($12/month): 1 GB RAM - Recommended for production
- Basic S ($24/month): 2 GB RAM - For higher traffic
- Professional ($48/month): 4 GB RAM + 2 instances

**Add-ons**:
- Custom domain: Free
- SSL certificate: Free (automatic)
- Redis database: $15/month (optional, for multi-instance)

---

## Support & Resources

- **DigitalOcean Docs**: https://docs.digitalocean.com/products/app-platform/
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Security Best Practices**: See `SECURITY.md`
- **Bug Reports**: See `SECURITY.md` for vulnerability reporting

---

## Deployment Checklist

### Pre-Deployment
- [x] Security enhancements committed
- [ ] Email password rotated
- [ ] deploy-final.yaml updated with new password
- [x] Code tested locally (`npm run build`)
- [x] All tests passing

### Deployment
- [ ] App created on DigitalOcean
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] Application accessible

### Post-Deployment
- [ ] Test contact form
- [ ] Verify security headers
- [ ] Test rate limiting
- [ ] Check logs for errors
- [ ] Set up monitoring (optional)
- [ ] Configure custom domain (optional)
- [ ] Enable HSTS header

---

**Last Updated**: October 15, 2025
**Version**: 1.0
