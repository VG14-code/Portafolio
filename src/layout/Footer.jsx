import React from 'react'

export const Footer = () => {
    // Obtener el año actual
    const anioActual = new Date().getFullYear();
  return (

    <footer className='footer'>
        Portafolio Victor Madrid &copy; - {anioActual}
    </footer>
    
  )
}

