import { useRef } from 'react';

interface UploadTypes {
  className?: string;
  uploadHandler: () => void;
  responseHandler: (data: FormData) => void;
}

export default function Upload(props: UploadTypes) {
  const inputFile = useRef(null);

  const onFileUpload = async (event: React.FormEvent<HTMLInputElement>) => {
    props.uploadHandler();
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files![0];

    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);

    props.responseHandler(data);
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
    </div>
  );
}
