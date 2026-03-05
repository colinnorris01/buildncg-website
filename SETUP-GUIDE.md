# Norris Construction Group — Complete Setup Guide
## From Zero to Live Website (100% Free)

---

## OVERVIEW: What We're Doing

You're going to:
1. Create a free GitHub account (stores your website files in the cloud)
2. Upload your website files to GitHub
3. Create a free Netlify account (hosts your website for the world to see)
4. Connect Netlify to GitHub (so changes auto-publish)
5. Connect your domain buildncg.com
6. Set up norrisconstructiongroup.com to redirect to buildncg.com

**Total cost: $0/year** (you only pay for the domains you already own)

**Total time: About 30–45 minutes**

---

## PART 1: CREATE A GITHUB ACCOUNT

GitHub is where your website files will live. Think of it like Google Drive but for code.

### Steps:

1. Open your web browser (Chrome, Safari, Edge — any works)

2. Go to **https://github.com**

3. Click the green **"Sign up"** button (top right)

4. Enter your email address → click **Continue**

5. Create a password → click **Continue**

6. Choose a username (suggestion: `norrisbuilders` or `buildncg`) → click **Continue**

7. Complete the verification puzzle if one appears

8. Check your email for a verification code → enter it

9. You now have a GitHub account. You're on the dashboard.

---

## PART 2: CREATE A REPOSITORY (YOUR WEBSITE'S HOME)

A "repository" (or "repo") is just a folder on GitHub that holds your files.

### Steps:

1. On GitHub, click the green **"New"** button (or the **"+"** icon in the top right → **"New repository"**)

2. Fill in:
   - **Repository name:** `buildncg-website`
   - **Description:** `Norris Construction Group website`
   - **Select:** "Public" (this is required for free hosting)
   - **Check the box:** "Add a README file"

3. Click the green **"Create repository"** button

4. You now have an empty repository. You should see a page with your README file.

---

## PART 3: UPLOAD YOUR WEBSITE FILES

### Steps:

1. First, **download the `ncg-site.zip`** file I gave you (from this conversation)

2. **Unzip the file** on your computer:
   - **Windows:** Right-click the zip → "Extract All" → click "Extract"
   - **Mac:** Double-click the zip file — it auto-extracts

3. You should now have a folder called `ncg-site` containing these files:
   ```
   index.html
   services.html
   about.html
   contact.html
   showcase.html
   styles.css
   main.js
   netlify.toml
   README.md
   ```

4. Go back to your GitHub repository page in the browser

5. Click **"Add file"** button (near the top) → click **"Upload files"**

6. **Drag ALL the files from inside the `ncg-site` folder** onto the upload area
   - IMPORTANT: Drag the FILES, not the folder itself
   - You should see all 9 files listed

7. At the bottom, in the "Commit changes" box, type: `Initial website upload`

8. Click the green **"Commit changes"** button

9. Wait for the upload to finish. You should now see all your files listed in the repository.

---

## PART 4: CREATE A NETLIFY ACCOUNT

Netlify is the service that actually shows your website to the world. Free. No ads.

### Steps:

1. Open a new browser tab

2. Go to **https://www.netlify.com**

3. Click **"Sign up"** (top right)

4. Click **"Sign up with GitHub"** — this is the easiest option since you just made a GitHub account

5. It will ask you to authorize Netlify to access your GitHub → click **"Authorize netlify"**

6. Complete any additional setup steps (team name, etc.) — you can skip optional questions

7. You're now on the Netlify dashboard.

---

## PART 5: CONNECT NETLIFY TO YOUR GITHUB REPO

This is the magic step. Once connected, any change you make on GitHub automatically updates your live website.

### Steps:

1. On the Netlify dashboard, click **"Add new site"** → **"Import an existing project"**

2. Click **"GitHub"**

3. If prompted, authorize Netlify to access your repositories

4. You should see a list of your GitHub repos — click **"buildncg-website"**

5. On the configuration screen:
   - **Branch to deploy:** `main` (should be pre-selected)
   - **Build command:** Leave BLANK (empty)
   - **Publish directory:** Leave as `.` or leave BLANK

6. Click **"Deploy site"**

7. Wait 30–60 seconds. Netlify will give you a temporary URL like:
   `https://random-funny-name-abc123.netlify.app`

8. **Click that URL** — you should see your website live! Take a moment to browse through all the pages and make sure everything looks right.

---

## PART 6: CONNECT YOUR DOMAIN — buildncg.com

### Step 6A: Tell Netlify about your domain

1. In Netlify, go to **"Site configuration"** (left sidebar) → **"Domain management"**

2. Click **"Add a domain"**

3. Type: `buildncg.com` → click **"Verify"**

4. If it asks "this domain is already registered" — click **"Add domain"** (you own it, that's fine)

5. Netlify will show you DNS settings. **Keep this page open** — you'll need it for the next step.

### Step 6B: Update DNS in GoDaddy

1. Open a new tab → go to **https://www.godaddy.com** → log in

2. Go to **"My Products"** or **"Domains"** → find **buildncg.com**

3. Click **"DNS"** or **"Manage DNS"**

4. You'll see a table of DNS records. Now:

   **Delete these (if they exist):**
   - Any A record pointing to an old IP address
   - Any CNAME record for `www` pointing to something old

   **Add these new records:**

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | **A** | **@** | **75.2.60.5** | 600 |
   | **CNAME** | **www** | **your-site-name.netlify.app** | 600 |

   (Replace `your-site-name.netlify.app` with the actual Netlify URL from Step 5, like `random-funny-name-abc123.netlify.app`)

5. Click **"Save"** on each record

### Step 6C: Enable free HTTPS (SSL)

1. Go back to Netlify → **"Site configuration"** → **"Domain management"**

2. Scroll down to the **"HTTPS"** section

3. Click **"Verify DNS configuration"**
   - If it says "DNS verification was successful" → click **"Provision certificate"**
   - If it says "waiting" → wait 10–30 minutes and try again (DNS takes time to update)

4. Once done, your site is live and secure at **https://buildncg.com**

---

## PART 7: CONNECT YOUR OLD DOMAIN — norrisconstructiongroup.com

This makes your old domain automatically forward to buildncg.com.

### Step 7A: Add the domain in Netlify

1. In Netlify → **"Site configuration"** → **"Domain management"**

2. Click **"Add a domain"**

3. Type: `norrisconstructiongroup.com` → click **"Verify"** → **"Add domain"**

### Step 7B: Update DNS for norrisconstructiongroup.com

1. Go to wherever `norrisconstructiongroup.com` is registered (likely GoDaddy)

2. Open the DNS settings for that domain

3. Update the records the same way:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | **A** | **@** | **75.2.60.5** | 600 |
   | **CNAME** | **www** | **your-site-name.netlify.app** | 600 |

4. Save

5. The redirect rule in your `netlify.toml` file (already included) will automatically send anyone who visits `norrisconstructiongroup.com` to `buildncg.com`

---

## PART 8: HOW TO MAKE EDITS (ONGOING)

This is how you'll update text, swap photos, and make changes going forward.

### Editing Text

1. Go to **https://github.com** → log in → click your **buildncg-website** repository

2. Click the file you want to edit (e.g., `index.html`)

3. Click the **pencil icon** (top right of the file view) to edit

4. Make your changes directly in the browser:
   - To change text, just find the text and type the new text
   - Use **Ctrl+F** (or Cmd+F on Mac) to search for specific words

5. When done, scroll down and click **"Commit changes"** → **"Commit changes"**

6. **That's it.** Netlify will automatically detect the change and republish your site within 60 seconds.

### Adding Photos

1. First, prepare your images:
   - Resize large photos to a maximum of 1920px wide (keeps the site fast)
   - Use `.jpg` for photos, `.png` for logos/graphics
   - Use descriptive names: `kitchen-remodel-ballantyne.jpg` not `IMG_4392.jpg`

2. On GitHub, in your repository, click **"Add file"** → **"Create new file"**

3. In the filename box, type: `images/.gitkeep`
   (This creates the images folder)

4. Click **"Commit changes"**

5. Now click into the **images** folder → **"Add file"** → **"Upload files"**

6. Drag your photos in → **"Commit changes"**

7. Now edit the HTML file to use your photo. Find the placeholder:
   ```html
   <div class="img-placeholder"><span>Kitchen Renovation</span></div>
   ```

8. Replace it with:
   ```html
   <img src="images/kitchen-remodel-ballantyne.jpg" 
        alt="Kitchen remodel in Ballantyne, Charlotte NC" 
        style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
   ```

9. Commit the change. Your photo will appear on the live site within 60 seconds.

### Updating Your Phone Number & Email

1. On GitHub, click `contact.html`

2. Click the pencil icon to edit

3. Press **Ctrl+F** and search for `YOURPHONE`

4. Replace ALL instances of `YOURPHONE` with your actual phone number in this format: `+17045551234` (no dashes, with country code)

5. Replace `YOUR PHONE NUMBER` with the display version: `(704) 555-1234`

6. Search for `YOUREMAIL` and replace with your email

7. Commit the change

8. **Repeat this for ALL HTML files:** `index.html`, `services.html`, `about.html`, `showcase.html`
   (Each file has the phone number in the nav bar and footer)

### Adding Projects to the Showcase Map

1. On GitHub, click `showcase.html` → pencil icon

2. Find the `const projects = [` section (around line 130)

3. To add a new project, copy one of the existing entries and change the details:
   ```javascript
   {
       title: "Your Project Name",
       location: "Neighborhood, Charlotte NC",
       lat: 35.2271,
       lng: -80.8431,
       date: "Mar 2026",
       description: "Brief description of what you did.",
       image: "images/your-project-photo.jpg"
   },
   ```

4. **To find latitude/longitude:**
   - Go to Google Maps
   - Right-click the project location
   - The first number is latitude, second is longitude
   - Example: clicking on Charlotte shows `35.2271, -80.8431`

5. Commit the change

---

## PART 9: TROUBLESHOOTING

**"My site doesn't show up at buildncg.com"**
- DNS changes can take up to 24–48 hours (usually much faster, like 15–30 min)
- Double-check your GoDaddy DNS records match exactly what's listed above
- In Netlify, check that the domain shows a green checkmark

**"My changes aren't showing up"**
- Make sure you clicked "Commit changes" on GitHub
- Check Netlify dashboard → "Deploys" tab to see if the latest deploy succeeded
- Try clearing your browser cache: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

**"The contact form doesn't work"**
- Netlify Forms are automatically detected when you deploy
- Check Netlify dashboard → "Forms" tab to see if submissions appear
- Make sure you didn't remove `data-netlify="true"` from the form tag

**"Images look stretched or blurry"**
- Make sure your images are at least 1200px wide for best quality
- The `object-fit: cover` style will crop to fit — use well-composed, centered photos

**"I broke something and need to go back"**
- GitHub saves every version of your files
- Go to your repository → click the file → click "History" → click any previous version → click the "..." button → "Revert changes"

---

## PART 10: QUICK REFERENCE CARD

| What you want to do | Where to go |
|---------------------|-------------|
| Edit your website | github.com → your repo → click file → pencil icon |
| Check if site is live | Visit https://buildncg.com |
| See form submissions | netlify.com → your site → Forms tab |
| Check deploy status | netlify.com → your site → Deploys tab |
| Update DNS settings | godaddy.com → your domain → DNS |
| Add images | github.com → your repo → images folder → Upload files |

---

## NEED HELP?

If you get stuck at any point, come back to this conversation and tell me:
1. What step you're on
2. What you see on your screen
3. What error or issue you're hitting

I can walk you through it!
