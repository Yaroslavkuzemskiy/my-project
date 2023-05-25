import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <BrowserRouter>
     <>
     <Header setOpen ={setOpen} open={open}/>
      <main className="main" onClick={()=> setOpen(false)}>
        <Routes>
          
          <Route path='/' element={<Hero />}/>
          
          <Route path='/services' element={<Services />}/>

        </Routes>
       
      </main>
      <Footer />
    </>
    </BrowserRouter>
   
  
  );
}

export default App;
