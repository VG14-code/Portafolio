import React from 'react';
import { Container } from 'react-bootstrap';

export const Footer = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className="bg-body-secondary text-center py-4 border-top mt-5">
            <Container>
                <small>
                    {anioActual} Portafolio <strong>Victor Madrid</strong> -- Todos los derechos reservados
                </small>
            </Container>
        </footer>
    );
};
