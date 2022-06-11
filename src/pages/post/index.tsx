import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';

export default function Post() {
  return (
    <main>
      <Navigate title="Diagnose"></Navigate>
      <UploadButton mode={'post'}></UploadButton>
    </main>
  );
}
