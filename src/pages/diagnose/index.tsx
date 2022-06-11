import '../../index.css';
import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';

export default function Diagnose() {
  return (
    <main className="flex-col text-center">
      <Navigate title="Diagnose"></Navigate>
      <UploadButton mode={'diagnose'}></UploadButton>
    </main>
  );
}
