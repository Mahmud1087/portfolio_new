import emailjs from '@emailjs/browser';
import { UserDetailsType } from './types';

const sendCustomEmail = (details: UserDetailsType) => {
  emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        email: details.email,
        name: details.name,
        message: details.message,
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { sendCustomEmail };
