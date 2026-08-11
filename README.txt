====================================================================
  ST. LUKE HOSPITAL CALABAR — WEBSITE v4.0
  DEPLOYMENT GUIDE — UPPERLINK SHARED HOSTING
  Written for non-technical users. Follow every step in order.
====================================================================


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  WHAT IS IN THIS FOLDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  index.html              Homepage
  404.html                Custom error page (page not found)
  sitemap.xml             Helps Google find all your pages
  robots.txt              Instructions for search engine crawlers
  nginx.conf              IGNORE THIS FILE (not needed)
  README.txt              This guide
  css/
    style.css             All website styling
  js/
    main.js               All website functionality
  pages/
    about.html            About Us page
    services.html         Our Services page
    doctors.html          Our Team page
    gallery.html          Gallery page
    insurance.html        Insurance & HMO page
    careers.html          Careers page
    contact.html          Contact Us page
    privacy.html          Privacy Policy
    terms.html            Terms of Use
  assets/
    images/               Put all your photos and videos here


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BEFORE YOU START
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Have these ready before you begin:

  1. Your Upperlink cPanel login details
     (in the welcome email Upperlink sent you)

  2. Your domain pointed to Upperlink
     (Upperlink support can help if not done yet)

  3. Your hospital photos ready on your computer
     (see Part 1 below for exact filenames)

  4. About 30 to 60 minutes of uninterrupted time


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 1 — ADD YOUR PHOTOS FIRST (DO THIS ON YOUR COMPUTER)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Before uploading anything, add your photos to the
  assets/images/ folder on your computer.

  NAME YOUR FILES EXACTLY AS SHOWN. The website looks for
  these exact filenames. Wrong names means no photo shows.

  MAIN PHOTOS:
  hero-bg.jpg          Wide homepage banner (1920x1080px recommended)
  dr-asor.jpg          Dr. Patience T. Asor photo (600x800px)
  matron-ogar.jpg      Matron Lily Ogar photo (600x800px)
  hospital-about.jpg   Photo for the About Us page

  GALLERY PHOTOS:
  gallery-exterior.jpg
  gallery-reception.jpg
  gallery-consultation.jpg
  gallery-ward.jpg
  gallery-lab.jpg
  gallery-theatre.jpg
  gallery-pharmacy.jpg
  gallery-maternity.jpg
  gallery-nursing.jpg
  gallery-waiting.jpg
  gallery-team.jpg
  gallery-equipment.jpg

  PHOTO TIPS:
  - Keep each photo under 400KB for fast loading
  - Compress photos free at: squoosh.app
  - All photos go inside the assets/images/ folder


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 2 — CREATE THE .htaccess FILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  This file forces HTTPS and sets up the 404 error page.
  You must create it manually on your computer.

  STEP 1:
  Open Notepad (Windows) or TextEdit (Mac)

  STEP 2:
  Copy and paste this text exactly:

  ──────────────────────────────────────────────
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  ErrorDocument 404 /404.html
  ──────────────────────────────────────────────

  STEP 3:
  Save the file with the name:   .htaccess
  (It starts with a dot. That is correct and intentional.)

  On Windows:
    File > Save As > change "Save as type" to "All Files"
    Type .htaccess as the filename > Save

  On Mac:
    File > Save > name it .htaccess
    If Mac warns you about starting with a dot, click "Use ."

  STEP 4:
  Place this .htaccess file in the same folder as index.html
  (the root of your website folder, not inside any subfolder)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 3 — LOG INTO UPPERLINK cPANEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEP 1:
  Open Chrome or any browser

  STEP 2:
  Go to your cPanel login page. Try one of these:
    https://stlukehospitalcalabar.com:2083
    https://cpanel.upperlink.ng
  Or check your Upperlink welcome email for the exact link.

  STEP 3:
  Enter your cPanel username and password
  (Both are in your Upperlink welcome email)

  STEP 4:
  You are now in cPanel. Look for the FILES section.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 4 — UPLOAD YOUR WEBSITE FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEP 1:
  In cPanel, click "File Manager"

  STEP 2:
  On the left panel, click "public_html"
  This is your website root folder. Everything goes here.

  STEP 3:
  Upload the ZIP file:
    a) Click "Upload" at the top toolbar
    b) Click "Select File"
    c) Choose: StLukeHospital_v4_COMPLETE.zip
    d) Wait for the green progress bar to reach 100%
    e) Click "Go Back to /public_html" link

  STEP 4:
  Extract the ZIP:
    a) Find the ZIP file in the file list
    b) Right-click it > click "Extract"
    c) A dialog box appears
    d) Make sure the path says: /public_html
    e) Click "Extract Files"
    f) Wait for extraction to complete
    g) Click "Close"

  STEP 5:
  After extraction you will see a folder called "stlukenew"
  inside public_html. You need to move everything out of
  that folder and into public_html directly.

    a) Double-click the "stlukenew" folder to open it
    b) You will see all the website files inside
    c) Click the checkbox at the very top to select all files
    d) Click "Move" in the top toolbar
    e) A dialog box appears with a path field
    f) Change the path to: /public_html
    g) Click "Move Files"
    h) Go back to public_html

  STEP 6:
  Upload the .htaccess file you created in Part 2:
    a) Make sure you are in public_html
    b) Click "Upload"
    c) Select your .htaccess file
    d) Wait for upload to complete

  STEP 7:
  Confirm your public_html looks like this:
    public_html/
    ├── .htaccess
    ├── index.html
    ├── 404.html
    ├── sitemap.xml
    ├── robots.txt
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── pages/
    │   ├── about.html
    │   ├── services.html
    │   ├── doctors.html
    │   ├── gallery.html
    │   ├── insurance.html
    │   ├── careers.html
    │   ├── contact.html
    │   ├── privacy.html
    │   └── terms.html
    └── assets/
        └── images/
            ├── dr-asor.jpg
            ├── matron-ogar.jpg
            └── (all your photos)

  IMPORTANT: index.html must be directly inside public_html,
  NOT inside a subfolder like public_html/stlukenew/index.html.
  If it is inside a subfolder, move it up using the steps above.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 5 — ENABLE SSL (THE HTTPS PADLOCK)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SSL makes your site secure and shows the padlock in browsers.
  It is free on Upperlink shared hosting.

  STEP 1:
  Go back to cPanel main page

  STEP 2:
  Scroll down to the Security section

  STEP 3:
  Click "SSL/TLS" or "Let's Encrypt SSL" or "AutoSSL"

  STEP 4:
  Find your domain: stlukehospitalcalabar.com
  Click "Issue" or "Install" or "Run AutoSSL"

  STEP 5:
  Wait 2 to 5 minutes

  STEP 6:
  Visit https://stlukehospitalcalabar.com
  You should see the padlock in the browser address bar

  If you cannot find SSL in cPanel, contact Upperlink support
  and say: "Please install a free Let's Encrypt SSL certificate
  for stlukehospitalcalabar.com"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 6 — TEST YOUR WEBSITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Test every item below before sharing the website publicly.

  [ ] Homepage loads at https://stlukehospitalcalabar.com
  [ ] Padlock icon shows in the browser address bar
  [ ] http:// automatically redirects to https://
  [ ] Homepage photos are showing correctly
  [ ] All navigation menu links work
  [ ] Book an Appointment button opens the booking modal
  [ ] Step 1 of booking works (service, doctor, date, time)
  [ ] Step 2 of booking works (name, phone, email, notes)
  [ ] Step 3 shows the correct review details
  [ ] Send via WhatsApp opens WhatsApp with details filled in
  [ ] Send via Email opens email app with details filled in
  [ ] Contact form on Contact page works (opens email app)
  [ ] Google Map shows the correct hospital location
  [ ] Gallery photos are showing (no broken image icons)
  [ ] Emergency phone number is visible on every page
  [ ] Website looks correct on a mobile phone
  [ ] Type a wrong URL and confirm the 404 page appears


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 7 — SUBMIT TO GOOGLE (DO THIS ON LAUNCH DAY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEP 1: Go to https://search.google.com/search-console
  STEP 2: Sign in with a Google account
  STEP 3: Click "Add Property"
  STEP 4: Choose "Domain" and enter: stlukehospitalcalabar.com
  STEP 5: Verify ownership using the HTML file method:
    a) Download the verification file Google provides
    b) Upload it to public_html in cPanel File Manager
    c) Click Verify in Google Search Console
  STEP 6: Once verified, click "Sitemaps" in the left menu
  STEP 7: Enter: sitemap.xml and click "Submit"

  Your site will appear in Google search results within
  1 to 4 weeks.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 8 — CREATE A GOOGLE BUSINESS PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  This puts St. Luke on Google Maps and local search. Free.

  STEP 1: Go to https://business.google.com
  STEP 2: Sign in with your Google account
  STEP 3: Click "Add your business to Google"
  STEP 4: Business name: St. Luke Hospital Calabar
  STEP 5: Category: Hospital
  STEP 6: Address: Plot 97 Ibom Layout, Off Marian Road,
          Calabar, Cross River State, Nigeria
  STEP 7: Phone: 08094441515
  STEP 8: Website: https://stlukehospitalcalabar.com
  STEP 9: Add your opening hours
  STEP 10: Upload at least 5 photos
  STEP 11: Google will verify by postcard or phone call
  STEP 12: Once verified, hospital appears on Google Maps


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 9 — HOW TO UPDATE THE WEBSITE AFTER LAUNCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  All updates are done through cPanel File Manager.

  HOW TO EDIT ANY PAGE:
  1. Log into cPanel > File Manager > public_html
  2. Navigate to the file you want to change
  3. Right-click the file > Edit
  4. Make your changes
  5. Click Save Changes
  6. Refresh the website in your browser to confirm

  COMMON UPDATES:

  Change a phone number:
    Edit the relevant HTML file
    Press Ctrl+F to search for the old number
    Replace it with the new number
    Do this in EVERY HTML file (number appears on all pages)

  Add a new doctor:
    Open pages/doctors.html
    Copy an existing doctor card block (from one div.doctor-card
    to its closing /div)
    Paste it below the last doctor card
    Edit the name, role, bio, photo filename

  Update the HMO list:
    Open pages/insurance.html
    Find the hmo-grid section
    Add or remove hmo-card entries

  Post a job vacancy:
    Open pages/careers.html
    Find the no-vacancies block and replace it with your job info

  Add a gallery photo:
    Upload the photo to assets/images/
    Open pages/gallery.html
    Find an empty slot and update the src attribute


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PART 10 — ADDING A VIDEO TO THE GALLERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEP 1: Name your video to match the slot, e.g. gallery-ward.mp4
  STEP 2: Upload it to assets/images/
  STEP 3: Open pages/gallery.html in File Manager > Edit
  STEP 4: Find the slot you want to change
  STEP 5: Replace the img tag with this:

    <video src="../assets/images/gallery-ward.mp4"
      autoplay muted loop playsinline
      style="width:100%;height:100%;object-fit:cover;display:block">
    </video>

  STEP 6: On the gallery-ph div in that same slot, add
    style="display:none" to hide the placeholder icon:

    <div class="gallery-ph" style="display:none">

  STEP 7: Save and refresh your browser to confirm

  VIDEO TIPS:
  - Keep videos under 10MB for fast loading
  - MP4 format works in all browsers
  - Compress videos free at: handbrake.fr


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  IF SOMETHING GOES WRONG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Website not loading at all:
    Wait 24 to 48 hours if you just bought the hosting plan
    (DNS propagation takes time)
    Contact Upperlink and confirm domain is pointed to hosting

  Photos not showing:
    Check the filename matches exactly (capitals matter)
    Confirm the photo is inside assets/images/ in public_html
    Check the photo file is not too large (keep under 400KB)

  Website has no styling (looks like plain text):
    Check css/style.css was uploaded inside the css/ folder
    Not in the root and not inside any other folder

  Booking modal not working:
    Check js/main.js was uploaded inside the js/ folder

  No padlock / HTTPS not working:
    Install SSL in cPanel (see Part 5)
    Contact Upperlink support if you cannot find the option

  Upperlink Support:
    Website: upperlink.ng
    Find their live chat or support ticket on their website


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  HOSPITAL CONTACT DETAILS (AS SHOWN ON THE WEBSITE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Main line:   080 9444 1515
  Alt line:    081 3293 0683
  WhatsApp:    081 3293 0683
  Email:       md@stlukehospitalcalabar.com
  Address:     Plot 97 Ibom Layout, Off Marian Road,
               Calabar, Cross River State, Nigeria

====================================================================
  END OF GUIDE — St. Luke Hospital Calabar Website v4.0
====================================================================
