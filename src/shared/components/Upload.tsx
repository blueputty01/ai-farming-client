import { useRef } from 'react';
import Server from '../api';

interface UploadTypes {
  mode: 'upload' | 'predict';
}

export default function Upload(props: UploadTypes) {
  const s = new Server();

  const inputFile = useRef(null);

  const onFileUpload = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files![0];

    switch (props.mode) {
      case 'upload':
        s.postItem(selectedFile);
        break;
      case 'upload':
        s.getPrediction(selectedFile);
        break;
    }
  };

  const onButtonClick = () => {
    (inputFile.current! as HTMLInputElement).click();
  };

  return (
    <main>
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
    </main>
  );
}
