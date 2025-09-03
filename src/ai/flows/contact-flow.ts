'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 * 
 * - sendContactMessage - A function that handles processing the contact form message.
 * - ContactFormInput - The input type for the sendContactMessage function.
 * - ContactFormOutput - The return type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

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
    // In a real-world scenario, you would integrate an email service here.
    // For example: await sendEmail({ to: 'your-email@example.com', from: input.email, subject: `Contact from ${input.name}`, body: input.message });
    
    console.log('Received contact form submission:', input);

    // For now, we just simulate a successful submission.
    return {
      success: true,
      message: "Obrigado por entrar em contato! Responderemos em breve.",
    };
  }
);
