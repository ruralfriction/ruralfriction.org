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

export default class Layout extends React.Component {
  static Main = Main;
  static Footer = Footer;

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        Main: this.Main,
        Footer: this.Footer,
      }),
    )
  }
}