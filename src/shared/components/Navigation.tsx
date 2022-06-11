import axios from 'axios';

interface PageType {
  title: string;
}

export default function Upload(props: PageType) {
  return (
    <div className="p-5">
      <h1 className="font-bold">{props.title}</h1>
    </div>
  );
}
