import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://lmtrain.github.io/lm-images/assets/images/books6.jpg">
        <h1>Google Books Search</h1>
        <h2>A Place To Find All Your Books</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Google Books (previously known as Google Book Search and Google Print and by its codename Project Ocean) is a service from Google Inc. that searches the full text of books and magazines that Google has scanned, converted to text using optical character recognition (OCR), and stored in its digital database. Books are provided either by publishers and authors through the Google Books Partner Program, or by Google's library partners through the Library Project. Additionally, Google has partnered with a number of magazine publishers to digitize their archives.
            </p>
            <p>
            The Publisher Program was first known as Google Print when it was introduced at the Frankfurt Book Fair in October 2004. The Google Books Library Project, which scans works in the collections of library partners and adds them to the digital inventory, was announced in December 2004.
            </p>
            <p>
            The Google Books initiative has been hailed for its potential to offer unprecedented access to what may become the largest online body of human knowledge and promoting the democratization of knowledge. However, it has also been criticized for potential copyright violations, and lack of editing to correct the many errors introduced into the scanned texts by the OCR process.
            </p>
            <p>
            As of October 2015, the number of scanned book titles was over 25 million, but the scanning process has slowed down in American academic libraries. Google estimated in 2010 that there were about 130 million distinct titles in the world, and stated that it intended to scan all of them.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
