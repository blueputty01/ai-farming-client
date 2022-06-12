import { useRef, useState } from 'react';
import Server from '../api';

interface UploadTypes {
  mode: 'upload' | 'predict';
  className?: string;
}

export default function Upload(props: UploadTypes) {
  const s = new Server();

  const inputFile = useRef(null);

  const [res, setRes] = useState('');

  const onFileUpload = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files![0];

    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);

    let res = 'none';

    switch (props.mode) {
      case 'upload':
        res = await s.postItem(data);
        break;
      case 'predict':
        res = await s.getPrediction(data);
        break;
      default:
        res = 'none';
    }

    setRes(res);
    console.log(res);
  };

  const onButtonClick = () => {
    (inputFile.current! as HTMLInputElement).click();
  };

  return (
    <div className={props.className}>
      <input
        type="file"
        id="file"
        ref={inputFile}
        className="hidden"
        onChange={onFileUpload}
        accept=".jpeg,.jpg"
      />
      <button onClick={onButtonClick} className="button button-blue">
        Upload Image
      </button>
      <div className="result">{res}</div>
    </div>
  );
}
