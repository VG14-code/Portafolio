import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export const Contacto = () => {
  return (
    <Container className="my-5"> {/* Container para centrar y añadir padding */}
      <h1 className="text-center mb-4">Contacto</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formApellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Ingrese sus Apellidos" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email@ejemplo.com" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu email con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Escribe aquí tu mensaje..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </Container>
  );
};
