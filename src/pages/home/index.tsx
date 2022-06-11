import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="outer">
        <h1>Hi, welcome to</h1>
      </div>
      <div id="outer">
        <h1>LocalFoods</h1>
      </div>
      <div id="outer">
        <button className="button" onClick={() => navigate('browse')}>
          Browse
        </button>
        <button className="button" onClick={() => navigate('post')}>
          Add Stuff
        </button>
        <button className="button" onClick={() => navigate('diagnose')}>
          Diagnose
        </button>
      </div>
    </div>
  );
}
