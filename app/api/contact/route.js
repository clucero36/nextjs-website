const sgMail = require('@sendgrid/mail');


export async function POST(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = await req.json();

  const msg = {
    to: 'llucero3696@gmail.com', // Change to your recipient
    from: 'luislucero.temp@gmail.com', // Change to your verified sender
    subject: `Message from ${body.name}`,
    text: body.message,
    html: `<div>Email from: ${body.email}</div><div>Message: ${body.message}</div>`,
  }

  try {
    await sgMail.send(msg)
    return new Response('OK');
  } catch (error) {
    return new Response({ error: 'Internal Server Error' }, { status: 500 })
  }
} 