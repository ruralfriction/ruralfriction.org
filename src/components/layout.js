import React from 'react';
import { Link } from 'gatsby';
import './layout.module.css';

const Main = ({ children }) => (
  <>
    <nav>
      <Link to="/">
        <img src={'rural-friction-logo.svg'} alt="logo" />
      </Link>
    </nav>
    <main>{children}</main>
  </>
);

const Footer = ({ children }) => <footer>{children}</footer>;

export default function Layout(props) {
  return props.children({ Main, Footer });
}
