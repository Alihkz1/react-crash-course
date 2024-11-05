import Card from "./Card";
import CardsJson from "../json/card-data.json";
const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full px-[100px] py-2">
        {CardsJson.map((card, index) => (
          <div className="basis-1/3 px-4" key={index}>
            <Card
              title={card.title}
              description={card.description}
              path={card.route}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
