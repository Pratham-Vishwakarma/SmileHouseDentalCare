import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "pratham.vishwakarma125940@gmail.com", // generated ethereal user
      pass: "iiwk prsw ykey rolt", // generated ethereal password
    },
});

//Render The EJS Template
const renderTemplate = async (templateName, data) => {
    const templatePath = path.join(process.cwd(), '.next', 'templates')
    const template = path.join(templatePath, `${templateName}.ejs`)

    return new Promise((resolve, reject) => {
        ejs.renderFile(template, data, (err, html) => {
            if (err) reject(err)
            else resolve(html);            
        })
    })
};

const sendMail = async (to, subject, templateName, templateData) => {
    try {
        const html = await renderTemplate(templateName, templateData);

        const mailOptions = {
            from: `"Smile House Dental Care" "pratham.vishwakarma125940@gmail.com"`,
            to,
            subject,
            html
        }
        const info = await transporter.sendMail(mailOptions);

        return {message: `Message succesfully sent to ${info.accepted[0]}`}
    } catch (error) {
        throw new Error(error.message)
    }
}

export { sendMail }
