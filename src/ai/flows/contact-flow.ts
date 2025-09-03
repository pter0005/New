'use server';
/**
 * @fileOverview A flow for handling contact form submissions and sending an email via Resend.
 * 
 * - sendContactMessage - A function that handles processing the contact form message.
 * - ContactFormInput - The input type for the sendContactMessage function.
 * - ContactFormOutput - The return type for the sendContactMessage function.
 */
import 'dotenv/config';
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

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
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Erro: RESEND_API_KEY não está definida no arquivo .env");
      throw new Error("O servidor de e-mail não está configurado. Contate o suporte.");
    }

    const resend = new Resend(resendApiKey);

    const mailOptions = {
      from: 'onboarding@resend.dev', // Endereço de envio padrão do Resend
      to: 'new.contatar@gmail.com', // Seu e-mail verificado no Resend
      reply_to: email, // O e-mail do cliente, para você poder responder diretamente
      subject: `📩 Novo contato de ${name}`,
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
      const { data, error } = await resend.emails.send(mailOptions);

      if (error) {
        console.error("Erro detalhado ao enviar o e-mail pelo Resend:", error);
        throw new Error("Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
      }

      return {
        success: true,
        message: "Obrigado por entrar em contato! Responderemos em breve.",
      };
    } catch (error) {
      console.error("Erro capturado no bloco catch:", error);
      throw new Error("Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.");
    }
  }
);
