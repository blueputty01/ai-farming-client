import '../../index.css';
import UploadButton from '../../shared/components/Upload';

export default function Diagnose() {
  return (
    <main className="flex-col text-center">
      <UploadButton mode={'diagnose'}></UploadButton>
    </main>
  );
}
