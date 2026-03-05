# Norris Construction Group — Website

## Quick Start: Deploy to Netlify (Free)

### Step 1: Create a Netlify Account
1. Go to **https://www.netlify.com** and sign up (free)
2. You can sign up with email or GitHub

### Step 2: Deploy Your Site
1. Log into Netlify
2. On the dashboard, look for **"Deploy manually"** or drag-and-drop
3. **Drag the entire `ncg-site` folder** onto the drop zone
4. Netlify will deploy it instantly and give you a temporary URL like `random-name.netlify.app`
5. Verify everything looks good

### Step 3: Connect Your Domain (buildncg.com)
1. In Netlify, go to **Site settings → Domain management → Add custom domain**
2. Type `buildncg.com` and click **Verify**
3. Netlify will show you DNS records to set up

### Step 4: Update GoDaddy DNS
1. Log into **GoDaddy** → go to your domain `buildncg.com`
2. Click **DNS** or **Manage DNS**
3. **Delete any existing A records and CNAME records** for your domain
4. Add these DNS records:
   - **A Record**: Host = `@`, Points to = `75.2.60.5`
   - **CNAME Record**: Host = `www`, Points to = `YOUR-SITE-NAME.netlify.app`
   (Netlify will show you the exact values)
5. Save changes

### Step 5: Enable HTTPS (Free SSL)
1. Back in Netlify → **Site settings → Domain management → HTTPS**
2. Click **Verify DNS configuration**
3. Once verified, click **Provision certificate**
4. Your site will now show the secure padlock at https://buildncg.com

> **Note:** DNS changes can take up to 24-48 hours to propagate, though it's usually much faster.

---

## How to Customize This Site

### Adding Your Photos
Replace the placeholder `<div class="img-placeholder">` elements with real `<img>` tags:

```html
<!-- Before (placeholder) -->
<div class="img-placeholder"><span>Kitchen Renovation</span></div>

<!-- After (real image) -->
<img src="images/kitchen-project.jpg" alt="Kitchen Renovation by NCG" style="width:100%;height:100%;object-fit:cover;">
```

Create an `images/` folder in the site directory and add your photos there.

### Adding Your Phone & Email
Search for `YOURPHONE` and `YOUREMAIL` across all HTML files and replace with your actual info:
- `tel:YOURPHONE` → `tel:+17045551234`
- `YOUREMAIL` → `info@buildncg.com`
- `YOUR PHONE NUMBER` → `(704) 555-1234`
- `YOUR EMAIL ADDRESS` → `info@buildncg.com`

### Updating Text
Open any HTML file and edit the text directly. The structure is:
- `index.html` — Homepage
- `services.html` — Services page
- `about.html` — About page
- `contact.html` — Contact page (form powered by Netlify)
- `showcase.html` — Project map showcase

### Adding/Editing Showcase Projects
Open `showcase.html` and find the `projects` array in the `<script>` section. Edit, add, or remove entries:

```javascript
{
    title: "Your Project Name",
    location: "City, NC",
    lat: 35.xxxx,       // Latitude (get from Google Maps)
    lng: -80.xxxx,      // Longitude
    date: "Mar 2026",
    description: "Brief description of the project.",
    image: "images/project-photo.jpg"  // or null for placeholder
}
```

### Contact Form
The contact form is powered by **Netlify Forms** (free, up to 100 submissions/month). Form submissions will appear in your Netlify dashboard under **Forms**. You can also set up email notifications there.

---

## Re-deploying After Changes
After making changes to your files:
1. Log into Netlify
2. Go to **Deploys** tab
3. Drag and drop your updated `ncg-site` folder again
4. Changes go live instantly!

**Tip:** For easier updates, you can connect a GitHub repository instead of manual drag-and-drop. This way, any changes you push to GitHub automatically deploy.

---

## File Structure
```
ncg-site/
├── index.html          ← Homepage
├── services.html       ← Services page
├── about.html          ← About page
├── contact.html        ← Contact page with form
├── showcase.html       ← Interactive project map
├── styles.css          ← All styling
├── main.js             ← Navigation & interactions
├── netlify.toml        ← Netlify config
├── images/             ← Add your photos here (create this folder)
└── README.md           ← This file
```

## Cost: $0/year
- **Netlify hosting**: Free (100GB bandwidth/month, more than enough)
- **Netlify Forms**: Free (100 submissions/month)
- **SSL certificate**: Free (automatic via Netlify)
- **Map tiles**: Free (OpenStreetMap + CARTO)
- **Fonts**: Free (Google Fonts)
- **Domain**: You already own `buildncg.com` via GoDaddy
