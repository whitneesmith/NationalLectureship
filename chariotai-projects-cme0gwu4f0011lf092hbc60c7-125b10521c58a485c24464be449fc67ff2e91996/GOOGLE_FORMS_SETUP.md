# Google Forms Integration Setup

## Step 1: Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form titled "National Lectureship Registration"
3. Add the following questions (make sure to match the field types):

### Required Form Fields:
- **First Name** (Short answer, Required)
- **Last Name** (Short answer, Required)  
- **Email Address** (Short answer, Required)
- **Phone Number** (Short answer, Required)
- **Street Address** (Short answer, Required)
- **City** (Short answer, Required)
- **State** (Dropdown with states, Required)
- **ZIP Code** (Short answer, Required)
- **Registration Type** (Multiple choice: Individual, Group 5, Group 10)
- **Georgia Resident** (Multiple choice: Yes, No)
- **Sunday Songfest** (Multiple choice: Yes, No)
- **John Williams Banquet** (Multiple choice: Yes, No)
- **Hotel Needed** (Multiple choice: Yes, No)
- **Payment Method** (Multiple choice: Credit Card, PayPal, Zelle)
- **Total Amount** (Short answer)

## Step 2: Get Form URL and Entry IDs

1. Click "Send" in your Google Form
2. Copy the form URL (it will look like: `https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform`)
3. Change `/viewform` to `/formResponse` for the submission URL

### To get Entry IDs:
1. Open your form in edit mode
2. Right-click on each field and "Inspect Element"
3. Look for `name="entry.XXXXXXXXX"` - copy these numbers
4. Or use the pre-fill URL method:
   - Click "Send" → "Link" → "Shorten URL" (uncheck) → Copy link
   - Add `?usp=pp_url` to the end and open it
   - Fill out the form and submit
   - Check the URL - you'll see all the entry IDs

## Step 3: Update the Code

Replace the placeholders in `/src/pages/Register.tsx`:

```javascript
// Replace this URL with your actual Google Form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse';

// Replace XXXXXXXX with your actual entry IDs from step 2
formDataToSubmit.append('entry.XXXXXXXX', formData.firstName);
formDataToSubmit.append('entry.XXXXXXXX', formData.lastName);
// ... etc for all fields
```

## Step 4: Set Up Response Collection

1. In your Google Form, click "Responses"
2. Click the Google Sheets icon to create a spreadsheet
3. This will automatically collect all form submissions
4. You can set up email notifications for new responses

## Step 5: Test the Integration

1. Submit a test registration through your website
2. Check your Google Sheets to see if the data appears
3. Verify all fields are mapping correctly

## Optional: Email Notifications

1. In Google Sheets, go to Tools → Notification Rules
2. Set up email alerts when new responses are submitted
3. You can also use Google Apps Script for more advanced email automation

## Security Note

Google Forms submissions use 'no-cors' mode, which means you won't get confirmation of successful submission in the browser. The form will submit successfully, but you can't detect errors client-side. This is normal and expected behavior.