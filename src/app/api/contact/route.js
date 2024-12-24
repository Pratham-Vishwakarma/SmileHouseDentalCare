import { sendMail } from "../utils/email";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received body:", body);
        const { name, useremail, phoneNumber, message } = body;

        console.log('TO_EMAIL_ADDRESS:', process.env.TO_EMAIL_ADDRESS);

        const emailResponse = await sendMail(
            process.env.TO_EMAIL_ADDRESS,
            `Email From Smile House Dental Care Website`, 
            'test-email',
            {
                templateTitle: 'Email From Smile House Dental Care Website',
                emailTitle: `Email From ${name}`,
                name,
                useremail,
                phoneNumber,
                message,
            }
        )
        return Response.json(emailResponse, {status: 200})
    } catch (error) {
        return Response.json({error: error?.message}, {status: 400})
    }
}
