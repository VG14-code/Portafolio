import React from 'react'
import { Routes,  Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../layout/HeaderNav';
import { Footer } from '../layout/Footer';

export const Rutas = () => {
  return (
    <BrowserRouter>
        {/*Header y Navegacion*/}

        
      <HeaderNav/>

      {/*CONTENIDO CENTRAL*/}
      <section className='content'>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
        </section>
    
        {/*Footer*/}
      <Footer></Footer>

    </BrowserRouter>
  )

}
