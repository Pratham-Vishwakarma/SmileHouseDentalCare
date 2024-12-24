import { sendMail } from "../utils/email";

export async function POST(req) {
  try{
    const body = await req.json();
    const { name, number, useremail, date, time, service, notes } = body;

    const emailResponse = await sendMail(
      "smile.drratnesh@gmail.com",
      `Email From Smile House Dental Care Website`,
      "appointment",
      { 
        templateTitle: 'Email From Smile House Dental Care Website',
        emailTitle: `Email From ${name}`,
        name,
        number,
        useremail, 
        date,
        time, 
        service, 
        notes 
      }
    );
    return Response.json(emailResponse, {status: 200})
  }
  catch (error) {
    return Response.json({error: error?.message}, {status: 400})
  }
}
