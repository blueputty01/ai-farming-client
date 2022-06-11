import { useNavigate } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex-1 wid w-9/10 text-center space-y-3">
      <h1>Hi, welcome to</h1>
      <h1 className="text-xl">LocalFoods</h1>
      <nav className="flex space-x-4">
        <HomeButton page={'post'} desc={'Add'}></HomeButton>
        <HomeButton page={'browse'} desc={'Browse'}></HomeButton>
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
    'button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-colors duration-150';
  return (
    <button className={home} onClick={() => navigate(props.page)}>
      {props.desc}
    </button>
  );
}
