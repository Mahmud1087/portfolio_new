import emailjs from '@emailjs/browser';
import { UserDetailsType } from './types';

const sendCustomEmail = async (
  details: UserDetailsType
): Promise<{ status: number; text: string }> => {
  emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  try {
    const res = await emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        email: details.email,
        name: details.name,
        message: details.message,
      }
    );
    return { status: res.status, text: res.text };
  } catch (error) {
    console.error(error);
    return { status: 500, text: 'Email send failed' };
  }
};

export { sendCustomEmail };
