import { useNavigate } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h1>Hi, welcome to</h1>
      <h1>LocalFoods</h1>
      <HomeButton page={'post'} desc={'Add'}></HomeButton>
      <HomeButton page={'browse'} desc={'Browse'}></HomeButton>
      <HomeButton page={'diagnose'} desc={'Diagnose'}></HomeButton>
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
    'button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';
  return (
    <button className={home} onClick={() => navigate(props.page)}>
      {props.desc}
    </button>
  );
}
