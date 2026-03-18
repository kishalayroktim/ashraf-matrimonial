// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and fill in these values
// Then create a .env.local file with:
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
//   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
