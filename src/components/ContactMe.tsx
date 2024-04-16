import { useScrollView } from '../libs/hooks';
import { Title } from '../components/main';

const ContactMe = () => {
  const { ref } = useScrollView('Contact', 0.8);
  return (
    <div ref={ref} className='w-1/2 scroll-mt-28' id='contact'>
      <Title title='Contact Me' />
    </div>
  );
};
export default ContactMe;
