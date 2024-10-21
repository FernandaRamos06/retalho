import React, {useEffect, useState, useRef} from 'react';
import styles from './login.module.css';
import Header from '../../components/header/index';
import { Link } from 'react-router-dom'; 

function Login() {
  
  return (
    <div className={styles.Root}>
      <Header />
      <main className={styles.Conteudo}>
        <h1 className={styles.Titulo}>Login</h1>
        <form className={styles.Form} onSubmit={validarLogin}>
          <label htmlFor="usuario">Usuário</label>
          <input type="text" id="usuario" placeholder="Usuário" required />
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Senha" required />
          <div className={styles.BotaoContainer}>
            <button type="submit" className={styles.Botao}>Entrar</button>
          </div>
          <div id="mensagemErro" className={styles.Erro} style={{ display: 'none' }}>
            Usuário ou senha incorretos!
          </div>
        </form>
      </main>
    </div>
  );
}

const validarLogin = (event) => {
  event.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const mensagemErro = document.getElementById('mensagemErro');

  if (usuario !== 'admin' || senha !== '1234') {
    mensagemErro.style.display = 'block';
    setTimeout(() => {
      mensagemErro.style.display = 'none';
    }, 2000); // Esconde a mensagem de erro após 2 segundos
  } else {
    mensagemErro.style.display = 'none';
    // Redireciona para a página de menu 
    // history.push('/menu');
  }
};

export default Login;