import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Popular from './page/Popular';
import UpComing from './page/UpComing';
import NowPlaying from './page/NowPlaying';
import Footer from './components/Footer';

function App() {
  return (
    
  
    <Routes>
      <Route path='/' element={<MainLayout />}>
        {/* place children */}
            <Route  path='/'
            element={<Home />}
            />
            <Route path='/popular'
            element={<Popular />}
            />
            <Route path='/upcoming'
            element={<UpComing />}
            />
            <Route path='/nowplaying'
            element={<NowPlaying />}
            />
            
      </Route>
      {/* End children */}
    </Routes>
  );
}

 export default App;
function MainLayout(){
  return(
    <main className='container mx-auto bg-black pb-14 lg:pb-0'>
      <Navbar/>
      <Outlet />
      <Footer/>
    </main>
   )
}