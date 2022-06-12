import '../../index.css';
import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';
import Server from '../../shared/api';
import { useState } from 'react';

export default function Diagnose() {
  const s = new Server();
  const [res, setRes] = useState({ data: '' });

  const fileHandler = async (data: FormData) => {
    const r = await s.getLeaf(data);
    setRes(r);
  };

  return (
    <main className="flex-col text-center">
      <Navigate title="Diagnose"></Navigate>
      <h1 className="pb-10 5xl">
        Upload an image of leaves in order to diagnose any potential diseases
      </h1>
      <UploadButton fileHandler={fileHandler}></UploadButton>

      <div className="result">{res.data}</div>
    </main>
  );
}
