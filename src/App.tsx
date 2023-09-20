import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './Style.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import {DataContextProvider} from './context/DataContext';
import Resumo from './pages/Resumo';
import Vendas from './pages/Vendas';
import Venda from './pages/Venda';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;

