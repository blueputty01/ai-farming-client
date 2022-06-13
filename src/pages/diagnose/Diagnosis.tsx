import '../../index.css';
import UploadButton from '../../shared/components/Upload';
import Server from '../../shared/api';
import { useState } from 'react';
import DiagnosticBar from '../../shared/components/DiagnosticBar';

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
    <div className="flex-col text-center">
      <h1 className="pb-10 5xl">
        Upload an image of leaves in order to diagnose any potential diseases
      </h1>
      <UploadButton
        responseHandler={fileHandler}
        uploadHandler={uploadHandler}
      ></UploadButton>

      <div className="pt-10">
        <h1 className="font-bold">Results</h1>
        {res == -2 ? (
          'Please upload an image'
        ) : res == -1 ? (
          'Waiting...'
        ) : (
          <DiagnosticBar health={res / 37}></DiagnosticBar>
        )}
      </div>
    </div>
  );
}
