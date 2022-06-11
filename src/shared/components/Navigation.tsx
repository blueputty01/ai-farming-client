import axios from 'axios';

interface PageType {
  title: string;
}

export default function Upload(props: PageType) {
  return <div>{props.title}</div>;
}
