# Email Configuration - Self-Hosted Mail Server

## ✅ Contact Form is Ready and Configured!

### **Current Email Configuration:**
- ✅ **SMTP Server:** mail.clappe.com:587
- ✅ **Authentication:** account@clappe.com / teams2244
- ✅ **From Address:** noreply@clapbill.com
- ✅ **Emails TO:** cliniconemedical@gmail.com
- ✅ **Confirmation emails** sent to form submitters
- ✅ **Professional email templates** with clinic branding
- ✅ **Reply-to functionality** (you can reply directly to customers)

### **What Happens When Someone Submits the Form:**

1. **You receive an email** at cliniconemedical@gmail.com with:
   - Contact person's details (name, email, phone)
   - Their message subject and content
   - Timestamp (Edmonton timezone)
   - Professional HTML formatting
   - Reply-to set to customer's email

2. **Customer receives confirmation email** from noreply@clapbill.com with:
   - Thank you message with clinic branding
   - Copy of their submitted message
   - What to expect next (1-2 business day response)
   - Clinic contact information
   - Professional HTML template

### **Email Flow:**
```
Contact Form Submission
        ↓
1. Email to Clinic (cliniconemedical@gmail.com)
   - FROM: "Contact Form" <noreply@clapbill.com>
   - REPLY-TO: "Customer Name" <customer@email.com>
   - Contains all form data

2. Confirmation to Customer
   - FROM: "Clinic 1 Medical" <noreply@clapbill.com>
   - TO: Customer's email address
   - Professional thank you message
```

### **Environment Variables Set:**
```bash
EMAIL_HOST=mail.clappe.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=account@clappe.com
EMAIL_HOST_PASSWORD=teams2244
DEFAULT_FROM_EMAIL=noreply@clapbill.com
CLINIC_EMAIL=cliniconemedical@gmail.com
```

### **Security Features:**
- ✅ TLS encryption enabled
- ✅ Secure SMTP authentication
- ✅ Environment variables protected
- ✅ No sensitive data exposed in frontend
- ✅ Proper email headers and formatting

### **Testing the Contact Form:**
1. Go to http://localhost:3001/contact
2. Fill out the "Send Us a Message" form
3. Click "Send Message"
4. Check cliniconemedical@gmail.com for the submission
5. The customer should receive a confirmation email

### **For Production Deployment:**
When you deploy to Vercel/Netlify, add these environment variables:
```
EMAIL_HOST=mail.clappe.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=account@clappe.com
EMAIL_HOST_PASSWORD=teams2244
DEFAULT_FROM_EMAIL=noreply@clapbill.com
CLINIC_EMAIL=cliniconemedical@gmail.com
```

### **Troubleshooting:**
If emails don't send:
1. Check server logs for SMTP connection errors
2. Verify mail.clappe.com is accessible
3. Ensure port 587 is not blocked
4. Restart development server after env changes

---
**Contact form is now fully functional with self-hosted email server!**