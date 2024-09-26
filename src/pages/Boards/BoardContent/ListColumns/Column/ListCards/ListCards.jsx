import Card from "./Card/Card";

export default function ListCards({ cards }) {
  return (
    <>
      {cards?.map((card) => (
        <Card key={card?._id} card={card} />
      ))}
    </>
  );
}
