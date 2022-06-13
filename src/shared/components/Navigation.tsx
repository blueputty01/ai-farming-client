interface PageType {
  title: string;
}

export default function Upload(props: PageType) {
  return (
    <div className="p-4">
      <h1 className="font-bold text-5xl">{props.title}</h1>
    </div>
  );
}
