import { sendMail } from "../utils/email";

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstname, lastname, email } = body;

        const emailResponse = await sendMail(
            email, 
            `Emailed to ${email}`, 
            'test-email',
            {
                templateTitle: 'Test Email',
                emailTitle: `Emailed to ${email}`,
                firstname,
                lastname,
                email,
            }
        )
        return Response.json(emailResponse, {status: 200})
    } catch (error) {
        return Response.json({error: error?.message}, {status: 400})
    }
}