import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
