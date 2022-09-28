import './App.css';
import PaperCard from './components/PaperCard/PaperCard';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import CountriesTable from './components/CountriesTable/CountriesTable';
import { Container } from '@mui/system';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalPage from './pages/GlobalPage';
import CountryPage from "./pages/CountryPage";
import UsaPage from './pages/UsaPage';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      
      <Header />
    <Container sx={{backgroundColor:"#D7D7D9", padding:0}}  > 
        
       
       <Routes>
        <Route path="/" element={<GlobalPage />} />
        <Route path="/usa" element={<UsaPage/>} />
        <Route path="/country/:country" element={<CountryPage />} />
      </Routes>

  
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
