import { useNavigate } from 'react-router-dom';
import i from './shop.png';

export default function Home() {
  return (
    <main className="italic flex-1 wid w-9/10 text-center space-y-3 font-body text-gray-800 justify-center pt-5">
      <h1 className="text-6xl font-black">Hi, welcome to</h1>
      <div className="inline">
        <img src={i} alt="..." height={600} width={600}></img>
      </div>
      <nav className="flex justify-center space-x-4">
        <HomeButton page={'post'} desc={'Add'}></HomeButton>
        {/* <HomeButton page={'browse'} desc={'Browse'}></HomeButton> */}
        <HomeButton page={'diagnose'} desc={'Diagnose'}></HomeButton>
      </nav>
    </main>
  );
}

interface ButtonProps {
  page: string;
  desc: string;
}

function HomeButton(props: ButtonProps) {
  const navigate = useNavigate();
  const home =
    'button-large bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-6 px-8 border border-blue-500 hover:border-transparent rounded ease-linear transition-all duration-150 text-5xl rounded-full';
  return (
    <button className={home} onClick={() => navigate(props.page)}>
      {props.desc}
    </button>
  );
}
