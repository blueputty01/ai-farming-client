import Server from '../../shared/api';
import Process from '../../shared/components/Process';

export default function Diagnose() {
  const s = new Server();

  return (
    <Process
      title={'Disease Detection'}
      desc={'Upload image of plant leaf to detect disease'}
      apiCall={s.getLeaf}
    ></Process>
  );
}
