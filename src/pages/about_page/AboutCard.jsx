const AboutCard = ({ title, description }) => {
  return (
    <div className=" border hover:bg-blue-500 hover:text-white duration-[0.5s] border-gray-300 py-17 px-15 lg:px-8 md:px-15">
      <h3 className="font-bold uppercase text-[16px]  my-5">{title}</h3>
      <p className="text-[14px]">{description}</p>
    </div>
  );
};

export default AboutCard;
