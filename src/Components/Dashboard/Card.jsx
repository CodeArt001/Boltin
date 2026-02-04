import Dashboardbutton from "./Dashboardbutton";

const Card = ({
  title,
  value,
  buttonText,
  className = "",
  valueClassName = "",
  textClassName = "",
  image,
  imageClass = "",
  onClick,
  category,
  categoryClassName = "",
  model,
  modelClassName = "",
  active,
  activeclassName = "",
  cardHeight = "",
  showViewIcon = true,
  viewIconClassName = "",
  buttonClassName = "",
}) => {
  return (
    <div
      className={`shadow shadow-black/30 flex flex-col items-center justify-between ${cardHeight} h-[160px] sm:h-[170px] md:h-[180px] lg:h-[180px] xl:h-[180px] gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 py-3 sm:py-3 md:py-3 lg:py-3 xl:py-3 px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 bg-white text-black dark:bg-black dark:text-white border border-white rounded-2xl`}
    >
      {image && (
        <img
          src={image}
          alt="card image"
          className={` object-cover ${imageClass}`}
        />
      )}
      <div className={`${className}`}>
        <h2
          className={`text-black dark:text-white text-center ${textClassName}`}
        >
          {title}
        </h2>
        <h1
          className={`text-black dark:text-white text-center ${valueClassName}`}
        >
          {value}
        </h1>
        <h1
          className={`text-black dark:text-white text-center ${categoryClassName}`}
        >
          {category}
        </h1>
        <h1
          className={`text-black dark:text-white text-center ${modelClassName}`}
        >
          {model}
        </h1>
        <h1
          className={`text-black dark:text-white text-center ${activeclassName}`}
        >
          {active}
        </h1>
      </div>
      <div className="flex justify-center ">
        <Dashboardbutton
          text={buttonText}
          viewIcon={showViewIcon}
          viewIconClassName={viewIconClassName}
          onClick={onClick}
          valueClassName={viewIconClassName}
          cardHeight={cardHeight}
          buttonClassName={buttonClassName}
        />
      </div>
    </div>
  );
};

export default Card;
