'use server';
/**
 * @fileOverview A flow for handling contact form submissions and sending an email.
 * 
 * - sendContactMessage - A function that handles processing the contact form message.
 * - ContactFormInput - The input type for the sendContactMessage function.
 * - ContactFormOutput - The return type for the sendContactMessage function.
 */
import 'dotenv/config';
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';

const ContactFormInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function sendContactMessage(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    const { name, email, message } = input;

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Use your email as sender
      to: process.env.GMAIL_USER, // Send to your own email
      replyTo: email, // Set the user's email for easy reply
      subject: `📩 Novo contato de ${name}`,
      text: `
        Você recebeu uma nova mensagem de contato:

        Nome: ${name}
        Email: ${email}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      return {
        success: true,
        message: "Obrigado por entrar em contato! Responderemos em breve.",
      };
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      // It's better not to expose detailed error messages to the client.
      throw new Error("Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
    }
  }
);
