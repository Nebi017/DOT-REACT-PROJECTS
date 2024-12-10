import{Routes,Route} from 'react-router-dom'
import Home from './Home';
import Enterprise from './Enterprise'
import Features from './Features';
import Support from './Support';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return(
    <>
    <Header />
    
   <Routes >
    <Route path='/' element={<Home />}></Route>
    <Route path='/enterprise' element={<Enterprise />}></Route>
    <Route path='/features' element={<Features />}></Route>
    <Route path='/support' element={<Support />}></Route>

   </Routes>
   <Footer />
    </>

  );
}


export default App;
