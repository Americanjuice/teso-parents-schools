// HighLevel form IDs (location W52fwIqxyeIgFtIrXwSx). Paste each form's ID once it is created in HighLevel.
// Embeds use https://api.leadconnectorhq.com/widget/form/<id>. No API keys belong in this file.
window.TESO_FORMS = {
  donor:   { id: "", name: "Teso Donor Interest",
             fields: ["First name", "Last name", "Email", "Phone (optional)", "Country", "I'm interested in (Sponsor a child $30/mo, Greenhouse $2,000, Rainwater tank, General gift, Prayer partner)", "Message"] },
  gws:     { id: "", name: "Teso Bring GWS to Your School",
             fields: ["First name", "Last name", "Email", "Phone / WhatsApp", "School name", "Role (Head teacher, Teacher, Director, Other)", "Town / district and country", "Number of teachers", "Number of students", "Preferred training (Conference venue near us, At Teso Parents' schools, Either)", "Message"] },
  partner: { id: "", name: "Teso Partner With Us",
             fields: ["First name", "Last name", "Email", "Phone", "Organization name", "Organization type (Church, NGO, Foundation/Funder, Business, Individual, Other)", "Country", "Partnership interest (Program funding, Church partnership, Volunteer/visit, Other)", "Message"] }
};
// When false, the grey review banner is hidden.
window.TESO_REVIEW_MODE = true;
