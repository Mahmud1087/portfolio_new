import { useScrollView } from '../libs/hooks';
import { Title } from '../components/main';
import { FaPaperPlane } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendCustomEmail } from '../libs/send-custom-email';

const ContactMe = () => {
  const { ref } = useScrollView('Contact', 0.5);

  const msgSent = () =>
    toast.success('Message sent, will get back to you soon', {
      position: 'top-center',
      closeOnClick: true,
      // className: 'sent',
    });

  const msgEmpty = () =>
    toast.error('One or more fields is empty', {
      position: 'top-center',
      closeOnClick: true,
    });

  const validate = () => {
    details.name === '' || details.email === '' || details.message === ''
      ? msgEmpty()
      : msgSent();
  };

  const userDetails = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendCustomEmail(details);
    setDetails(userDetails);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const [details, setDetails] = useState(userDetails);

  return (
    <div
      ref={ref}
      className='w-[90%] scroll-mt-28 sm:w-3/4 lg:w-1/2'
      id='contact'
    >
      <ToastContainer />
      <Title title='Contact Me' />
      <p className='text-center mt-4 text-lg dark:text-white/70 dark:font-[200]'>
        Please contact me directly at{' '}
        <a href='mailto:abdulazeezm578@gmail.com' className='underline'>
          abdulazeezm578@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <motion.form
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        onSubmit={handleSubmit}
        className='mt-10 flex flex-col mx-auto w-[min(100%,38rem)]'
      >
        <label
          htmlFor='name'
          className='border-2 border-gray-500 rounded-md relative h-14 px-6 pt-3 mb-10 dark:border-gray-100/20 bg-gray-50/10'
        >
          <p className='absolute -top-4 left-6 text-lg dark:text-white/70 dark:font-[200] transition-all px-3 bg-gray-100 dark:bg-gray-900 rounded-md'>
            Name
          </p>
          <input
            type='text'
            name='name'
            value={details.name}
            onChange={handleChange}
            required
            className='w-full h-full bg-transparent text-lg dark:text-white/80 dark:font-[200] focus:outline-none'
          />
        </label>

        <label
          htmlFor='email'
          className='border-2 border-gray-500 rounded-md relative h-14 px-6 pt-3 mb-10 dark:border-gray-100/20 bg-gray-50/10'
        >
          <p className='absolute -top-4 left-6 text-lg dark:text-white/70 dark:font-[200] transition-all px-3 bg-gray-100 dark:bg-gray-900 rounded-md'>
            Email
          </p>
          <input
            type='email'
            name='email'
            value={details.email}
            onChange={handleChange}
            required
            className='w-full h-full bg-transparent text-lg dark:text-white/80 dark:font-[200] focus:outline-none'
          />
        </label>

        <label
          htmlFor='email'
          className='border-2 border-gray-500 rounded-md relative h-fit px-6 pt-5 group dark:border-gray-100/20 bg-gray-50/10'
        >
          <p className='absolute -top-4 left-6 text-lg dark:text-white/70 dark:font-[200] transition-all px-3 bg-gray-100 dark:bg-gray-900 rounded-md'>
            Message
          </p>{' '}
          <textarea
            name='message'
            value={details.message}
            onChange={handleChange}
            required
            rows={6}
            className='resize-none w-full h-full bg-transparent text-lg dark:text-white/80 dark:font-[200] focus:outline-none'
          />
        </label>

        <button
          type='submit'
          className='group flex items-center gap-3 mt-8 text-lg bg-gray-900 w-fit px-6 py-1 rounded-full text-white transition-all hover:scale-110 active:scale-105 dark:bg-gray-50/10'
          onClick={validate}
        >
          submit{' '}
          <FaPaperPlane className='text-sm text-white/60 group-hover:-translate-y-1 transition-all' />
        </button>
      </motion.form>
    </div>
  );
};
export default ContactMe;
