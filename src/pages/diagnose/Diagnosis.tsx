import '../../index.css';
import UploadButton from '../../shared/components/Upload';
import Server from '../../shared/api';
import { useState } from 'react';
import Navigation from '../../shared/components/Navigation';

export default function Diagnose() {
  const s = new Server();
  const [res, setRes] = useState(-2);
  //res = -1: loading
  //res = -2: no image

  const fileHandler = async (data: FormData) => {
    const r = await s.getLeaf(data);
    console.log(r);

    setRes(parseInt(r.data));
  };

  const uploadHandler = () => {
    setRes(-1);
  };

  return (
    <div className="flex-col text-center p-4">
      <Navigation title={'Disease Detection'}></Navigation>
      <h1 className="">
        Upload an image of leaves in order to diagnose any potential diseases
      </h1>
      <UploadButton
        responseHandler={fileHandler}
        uploadHandler={uploadHandler}
      ></UploadButton>

      <div className="pt-10">
        <h1 className="font-bold">Disease Result:</h1>
        {res == -2
          ? 'None, please upload an image'
          : res == -1
          ? 'Waiting...'
          : res}
      </div>
    </div>
  );
}
