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
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => navigate('browse')}
        >
          Browse
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => navigate('post')}
        >
          Add Stuff
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => navigate('diagnose')}
        >
          Diagnose
        </button>
      </div>
    </div>
  );
}
