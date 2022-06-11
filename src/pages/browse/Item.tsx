interface ItemProps {
  image: string;
  price: number;
  desc: string;
}

export default function Item(props: ItemProps) {
  return (
    <div>
      <h1>{props.desc}</h1>
      <h2>{props.price}</h2>
      <img src={`data:image/png;base64,${props.image}`} alt="image" />
    </div>
  );
}
