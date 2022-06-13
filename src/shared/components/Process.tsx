import UploadButton from './Upload';
import { useState } from 'react';
import Navigation from './Navigation';

interface ProcessProps {
  title: string;
  desc: string;
  apiCall: Function;
  resMap?: { [key: number]: string };
}

export default function Process(props: ProcessProps) {
  const [res, setRes] = useState(-2);
  //res = -1: loading
  //res = -2: no image

  const fileHandler = async (data: FormData) => {
    const r = await props.apiCall(data);
    console.log(r);

    setRes(parseInt(r.data));
  };

  const uploadHandler = () => {
    setRes(-1);
  };

  let lookup: string = res.toString();

  if (typeof props.resMap !== 'undefined') {
    lookup = props.resMap[res];
  }

  return (
    <div className="flex-col space-y-2 p-8 text-center  max-w-sm rounded-lg overflow-hidden shadow-lg border-gray-200 border-2">
      <Navigation title={props.title}></Navigation>
      <h1 className="">{props.desc}</h1>
      <UploadButton
        responseHandler={fileHandler}
        uploadHandler={uploadHandler}
      ></UploadButton>

      <div className="pt-4">
        <h1 className="font-bold">{props.title} Result:</h1>
        {res == -2 ? (
          <p className="italic">None, please upload an image</p>
        ) : res == -1 ? (
          'Waiting...'
        ) : (
          lookup
        )}
      </div>
    </div>
  );
}
