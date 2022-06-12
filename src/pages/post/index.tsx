import UploadButton from '../../shared/components/Upload';
import Navigate from '../../shared/components/Navigation';

export default function Post() {
  return (
    <main>
      <Navigate title="Upload Plant's Leaf and Vegetable/Fruit"></Navigate>{' '}
      <UploadButton className="p-1" mode={'predict'}></UploadButton>
      <UploadButton className="p-1" mode={'upload'}></UploadButton>
    </main>
  );
}
