import '../../index.css';
import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';

export default function Diagnose() {
  return (
    <main className="flex-col text-center">
      <Navigate title="Diagnose"></Navigate>
      <h1>
        Upload an image of the fruit or its leaves in order to diagnose any
        potential diseases
      </h1>
      <UploadButton mode={'predict'}></UploadButton>
    </main>
  );
}
