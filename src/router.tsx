import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from './components/Button';
import { Calculator } from './components/Calculator/Calculator';
import { Contador } from './components/Contador/Contador';
import { Gallery } from './components/Gallery/Gallery';
import { GlassMorph } from './components/GlassMorph';
import { Header } from './components/Header';
import { HelloWorld } from './components/HelloWorld';
import { LoadingBar } from './components/LoadingBar';
import { LoginForm } from './components/LoginForm';
import { NotFoundPage } from './components/NotFoundPage';
import { Particle } from './components/Particles';
import { QuizzForm } from './components/QuizzForm';
import VitrineDeProdutos from './components/Vitrine/VitrineDeProdutos';
import RicardoMoreira from './pages/RicardoMoreira';

export function Router() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/helloworld' element={<HelloWorld />} />
            <Route path='/botao' element={<Button />} />
            <Route path='/calculadora' element={<Calculator />} />
            <Route path='/notfound' element={<NotFoundPage />} />
            <Route path='/glasscard' element={<GlassMorph />} />
            <Route path='/contador' element={<Contador />} />
            <Route path='/semana2' element={<LoadingBar />} />
            <Route path='/semana2/particles' element={<Particle />} />
            <Route path='/semana2/loginform' element={<LoginForm />} />
            <Route path='/semana2/galeria' element={<Gallery />} />
            <Route path='/semana2/quizform' element={<QuizzForm />} />
            <Route path='/semana2/vitrineprodutos' element={<VitrineDeProdutos />} />
          </Route>
          <Route path='/semana2/ricardoemoreira/personagens' element={<RicardoMoreira />} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}