import { sendMail } from "../utils/email";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received body:", body);
        const { name, email, useremail, phoneNumber, message } = body;

        const emailResponse = await sendMail(
            email, 
            `Email From Smile House Dental Care Website`, 
            'test-email',
            {
                templateTitle: 'Email From Smile House Dental Care Website',
                emailTitle: `Email From ${name}`,
                name,
                useremail,
                phoneNumber,
                email,
                message,
            }
        )
        return Response.json(emailResponse, {status: 200})
    } catch (error) {
        return Response.json({error: error?.message}, {status: 400})
    }
}