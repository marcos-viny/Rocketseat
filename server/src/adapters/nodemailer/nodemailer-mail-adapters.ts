import { MailAdapters, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ec1fd805fbd62b",
      pass: "8b546a1753672d"
    }
  });

export class NodemailerMailAdapters implements MailAdapters{
    
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Marcos Vinicius <mvini0863@gmail.com>',
        subject,
        html: body
    });
    }
}