type IDType = {
  id: string;
};

const HorizontalLine = (sectionID: IDType) => {
  return (
    <div
      className='h-14 w-[2px] rounded-full bg-slate-500'
      id={sectionID.id}
    ></div>
  );
};
export default HorizontalLine;
