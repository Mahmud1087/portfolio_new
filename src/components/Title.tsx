type TitleType = {
  title: string;
};

const Title = (sectionTitle: TitleType) => {
  return (
    <h1 className='text-4xl text-center text-gray-900 font-semibold dark:text-white/85 dark:font-normal'>
      {sectionTitle.title}
    </h1>
  );
};
export default Title;
