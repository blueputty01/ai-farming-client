import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';
import { useState } from 'react';
import Server from '../../shared/api';
import Diagnosis from '../diagnose/Diagnosis';

export default function Post() {
  const s = new Server();

  const [classify, setClassify] = useState('none');

  const loadClassify = () => {
    setClassify('loading...');
  };

  const classifyHandler = async (data: FormData) => {
    const r = await s.getFruit(data);
    setClassify(r.data);
  };

  return (
    <main className="flex-col content-center text-center">
      <Navigate title="Post Item"></Navigate>
      <h1>Upload Fruit</h1>
      <UploadButton
        className="p-1"
        responseHandler={classifyHandler}
        uploadHandler={loadClassify}
      ></UploadButton>
      <div className="result">{classify}</div>
      <Diagnosis></Diagnosis>
    </main>
  );
}
