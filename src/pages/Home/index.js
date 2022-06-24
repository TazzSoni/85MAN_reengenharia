import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap'
import Navbar from '../../components/NavBar/Navbar'
import home from '../../images/home.png'


function Home() {
  return (
    <>
      <Navbar nome={"usuario.nome"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} >
        <Container
          style={{
            display: "grid",
            justifyContent: "center"
          }}
        >
          <Row>
            <Col>
              <Image src={home} ></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
