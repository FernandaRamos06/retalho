import React, {useEffect, useState, useRef} from 'react';
import styles from './menu.module.css';
import Header from '../../components/header/index';
import { Link } from 'react-router-dom'; 

function Menu() {
  return (
    <div className="Root">
      <Header />
      <main className="Conteudo">
        <h1 className="Titulo">Menu de Navegação</h1>
        <div className={styles.container}>
          <Link to="/Cliente" className={styles.menuButton}>Cliente</Link>
          <Link to="/Estoque" className={styles.menuButton}>Estoque</Link>
        </div>
      </main>
    </div>
  );
}

export default Menu;
