import './App.css';
import Header from './components/Header/Header';
import { Container } from '@mui/system';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      
    <Header />
    <Container sx={{backgroundColor:"#D7D7D9", padding:0}}> 
    <Outlet/>
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
