import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "87a4884075027e",
        pass: "d2243ed53f246f"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Lucas Rabelo <lucas.rabelo@feedget.com>",
            subject,
            html: body
        })
    }
}