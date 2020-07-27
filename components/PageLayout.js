import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Head from "next/head";

const PageLayout = ({ children, className }) => (
  <>
    <Head></Head>
    {/*
    I can customize my fonts here
    */}
    <Container>
      <Navbar />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>
          {" | "}
          <a href="#">github</a>
          {" | "}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  </>
);

export default PageLayout;
