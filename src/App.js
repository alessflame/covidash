import './App.css';
import PaperCard from './components/PaperCard/PaperCard';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import CountriesTable from './components/CountriesTable/CountriesTable';
import { Container } from '@mui/system';
import { Routes, Route, Link } from "react-router-dom";
import GlobalPage from './pages/GlobalPage';
import ItalyPage from './pages/ItalyPage';
import UsaPage from './pages/UsaPage';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Header />
    <Container sx={{backgroundColor:"#D7D7D9", padding:0}}  > 
        
        <Routes>
        <Route path="/" element={<GlobalPage />} />
        <Route path="italy" element={<ItalyPage />} />
        <Route path="usa" element={<UsaPage/>} />
      </Routes>
      

  
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
