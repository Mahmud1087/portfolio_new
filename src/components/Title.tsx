type TitleType = {
  title: string;
};

const Title = (sectionTitle: TitleType) => {
  return (
    <h1 className='text-4xl text-gray-900 font-semibold'>
      {sectionTitle.title}
    </h1>
  );
};
export default Title;
