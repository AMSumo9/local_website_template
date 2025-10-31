# local_website_template# local_website_template



Deployment Checklist: Lead Magnet Setup
Here is the note for your future README.md or setup guide. This is the official process for deploying the lead magnet on a new site.

To set up the lead magnet, you only need to edit src/data/project.json. The template will handle the rest.

1. To Turn the Lead Magnet ON:
You must provide valid values for these three properties in project.json:

technical.lead_form_url: Set this to your FormSubmit.co URL (e.g., "https://formsubmit.co/your-email@example.com").

lead_magnet.title: Set this to the public-facing title (e.g., "Free PDF: 5 Mistakes First-Home Buyers Make").

lead_magnet.download_file: Set this to the public URL path of your PDF (e.g., "/pdfs/your-guide.pdf"). This must match the file you placed in public/pdfs/.

If all three are set, the lead magnet form will automatically appear on post and service pages.

2. To Turn the Lead Magnet OFF:
If a specific microsite does not have a lead magnet, simply set the title to an empty string:

JSON

"lead_magnet": {
  "title": "",
  "download_file": ""
}
Our LeadMagnet.astro component will automatically detect this and hide itself from the page.