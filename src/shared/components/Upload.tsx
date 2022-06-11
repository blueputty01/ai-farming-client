import axios from 'axios';
import { useRef } from 'react';

interface UploadTypes {
  mode: string;
}

export default function Upload(props: UploadTypes) {
  const inputFile = useRef(null);

  const onFileUpload = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files![0];

    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);

    console.log(selectedFile);

    axios.post(`api/${props.mode}`, formData);
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
