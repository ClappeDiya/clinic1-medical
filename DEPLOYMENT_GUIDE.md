# DigitalOcean App Platform Deployment Guide

## 🚀 Quick Deployment Steps

### Step 1: Connect GitHub to DigitalOcean
1. Visit: https://cloud.digitalocean.com/apps
2. Click "Create App"
3. Choose "GitHub" as your source
4. Click "Manage Access" and authorize DigitalOcean
5. Grant access to the `ClappeDiya/clinic1-medical` repository

### Step 2: Configure Your App
1. **Repository:** ClappeDiya/clinic1-medical
2. **Branch:** main
3. **Source Directory:** /
4. **Auto-deploy:** Enable (deploys on every push)

### Step 3: Configure Build & Run
- **Build Command:** `npm run build`
- **Run Command:** `npm run start`
- **HTTP Port:** 3000

### Step 4: Set Environment Variables
Add these in the DigitalOcean console:

```bash
EMAIL_HOST=mail.clappe.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=account@clappe.com
EMAIL_HOST_PASSWORD=teams2244  # Mark as encrypted/secret
DEFAULT_FROM_EMAIL=noreply@clapbill.com
CLINIC_EMAIL=cliniconemedical@gmail.com
NODE_ENV=production
```

### Step 5: Select Instance Size
- **Plan:** Basic
- **Instance:** Basic XXS ($5/month)
- **Container Size:** 512 MB RAM, 1 vCPU

### Step 6: Review and Deploy
- Review all settings
- Click "Create Resources"
- Wait 10-15 minutes for initial deployment

## 📱 Post-Deployment

### Your App URLs:
- **Default:** https://clinic1-medical-[random].ondigitalocean.app
- **Custom Domain:** Add clinic1medical.com later

### Monitor Deployment:
```bash
# View app status
doctl apps get [APP-ID]

# View logs
doctl apps logs [APP-ID]

# List deployments
doctl apps list-deployments [APP-ID]
```

### Custom Domain Setup:
1. Go to Settings → Domains
2. Add your domain: clinic1medical.com
3. Update DNS records:
   - Type: CNAME
   - Host: @ or www
   - Points to: [your-app].ondigitalocean.app

## 🔧 Troubleshooting

### If build fails:
- Check Node version compatibility
- Verify all dependencies in package.json
- Check build logs in DigitalOcean console

### If email doesn't work:
- Verify environment variables are set
- Check SMTP credentials are correct
- Review application logs

## 💰 Billing

- **Monthly Cost:** $5.00
- **Billing:** Per second of usage
- **Free:** SSL, CDN, DDoS protection
- **Included:** 100GB bandwidth

## 📞 Support

- **DigitalOcean Support:** https://www.digitalocean.com/support/
- **Community:** https://www.digitalocean.com/community/
- **Docs:** https://docs.digitalocean.com/products/app-platform/

## ✅ Deployment Checklist

- [ ] GitHub connected to DigitalOcean
- [ ] Repository access granted
- [ ] Build commands configured
- [ ] Environment variables set
- [ ] Instance size selected ($5/month)
- [ ] Auto-deploy enabled
- [ ] Initial deployment successful
- [ ] Test contact form
- [ ] Configure custom domain (optional)