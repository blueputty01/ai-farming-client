import { Route, Routes } from 'react-router-dom';

import Browse from './pages/browse/index';
import Diagnose from './pages/diagnose/Diagnosis';
import Post from './pages/post/index';
import Home from './pages/home/index';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post" element={<Post />} />
      <Route path="diagnose" element={<Diagnose />} />
      <Route path="browse" element={<Browse />} />
    </Routes>
  );
}
