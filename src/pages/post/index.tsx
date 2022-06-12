import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';
import { useState } from 'react';
import Server from '../../shared/api';

export default function Post() {
  const s = new Server();

  const [classify, setClassify] = useState({ data: '' });
  const [diagnosis, setDiagnosis] = useState({ data: '' });

  const classifyHandler = async (data: FormData) => {
    const r = await s.getLeaf(data);
    setClassify(r);
  };

  const diagnoseHandler = async (data: FormData) => {
    const r = await s.getLeaf(data);
    setDiagnosis(r);
  };

  return (
    <main className="flex">
      <Navigate title="Post Item"></Navigate>
      <h1>Upload Fruit</h1>
      <UploadButton
        className="p-1"
        fileHandler={classifyHandler}
      ></UploadButton>
      <div className="result">{classify.data}</div>
      <h1>Upload Leaf for Diagnosis</h1>
      <UploadButton
        className="p-1"
        fileHandler={diagnoseHandler}
      ></UploadButton>
      <div className="result">{diagnosis.data}</div>
    </main>
  );
}
