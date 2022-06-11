import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';

export default function Post() {
  return (
    <main>
      <Navigate title="Upload"></Navigate>{' '}
      <UploadButton mode={'predict'}></UploadButton>
      <UploadButton mode={'upload'}></UploadButton>
    </main>
  );
}
