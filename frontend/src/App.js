import Login from './view/Login';
import ResetScreen from './view/ResetPassword';
import EpiScreen from './view/Epi';
import Fornecedor from './view/Fornecedor';
import Filial from './view/Filial';
import Acidente from './view/Acidante';

function App() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Acidente" element={<Acidente />} />
      <Route path="/Epi" element={<EpiScreen />} />
      <Route path="/Fornecedor" element={<Fornecedor />} />
      <Route path="/Filial" element={<Filial />} />
      <Route path="/ResetPassword" element={<ResetScreen />} />
      <Route path="/funcionarios/*" element={<Funcionarios />} />
    </Router >
  );
}

export default App;