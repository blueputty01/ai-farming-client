interface ItemProps {
  imageURL: string;
  classification: number;
  desc: string;
}

export default function Item(props: ItemProps) {
  return (
    <div>
      <h1>{props.desc}</h1>
      <h2>{props.classification}</h2>
      <img src={props.imageURL} alt="image" />
    </div>
  );
}
