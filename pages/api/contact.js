const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  //   res.status(200).json({ name: "John Doe" });
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  console.log(req.body.name);
  console.log(req.method);
  const { name, subject, email, message } = req.body;

  const msg = {
    to: "dunglevan2001@gmail.com",
    from: "dunglevan2001@gmail.com",
    subject: subject,
    text: `From: ${name}, email: ${email}, ${message}`,
  };

  try {
    const result = await sgMail.send(msg);
    console.log("email sent succesfully", result);
    res.status(200).json({ status: "email sent successfull" });
    
  } catch (error) {
    res.status(500).json({ status: "sendGrid problems" });
  }

  // res.status(500).json({ status: "sendGrid problems" });
  
  
}
