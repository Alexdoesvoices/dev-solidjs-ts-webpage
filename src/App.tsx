import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          This is the Alexdoesvoices Dev Site.
        </p>
        <p>
          This is my attempt to learn solid.js!!
        </p>
        <a
          class={styles.link}
          href="https://alexdoesvoices.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Website!
        </a>
       
      </header>
    </div>
  );
};

export default App;
