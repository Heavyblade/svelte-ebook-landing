import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail"
import { SENDGRID_API_KEY } from "$env/static/private"

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST({ request }) {
  try {
    const requestBody = await request.json();
    const customerEmail = requestBody.data.object.customer_details.email
    const customerName = requestBody.data.object.customer_details.name

    const message = {
      to: customerEmail,
      from: "cristian.vasquez@dealmaker.tech",
      subject: "Your purchase confirmation - Complete Spain Relocation Guide",
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h1>Thank you for your purchase!</h1>
          <p>Hi ${customerName},</p>
          <p>We appreciate your purchase of <strong>Complete Spain Relocation Guide</strong>.</p>
          <p>Your order has been received and is being processed. You will receive another email with your download link shortly.</p>
          <hr>
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br>The Dealmaker Team</p>
        </div>
      `
    }
    console.log(message)

    await sgMail.send(message)

    return json({ response: "Email sent" })
  } catch (error) {
    console.log(error)
    return json({ error }, { status: 500 })
  }
}
