
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import BlogPage from './Pages/BlogPage';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
         <Route path='/' element={<Home/> }  /> 
         <Route path='/about'  element={<About/>} />
         <Route path='/blog'  element={<BlogPage/>} />
         <Route path='/contact'  element={<Contact/>} />
     
     </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
