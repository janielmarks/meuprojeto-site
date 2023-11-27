import React from 'react';

function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>janielmarques</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="index.html">Sobre mim</a>
              </li>
              <li>
                <a href="projetc.html">Projetos</a>
              </li>
              <li>
                <a href="contact.html">Contatos</a>
              </li>
            </ul>
          </nav>

          <header>
            <div className="center">
              <img src="./img/355354745_6404754696267228_1769436348199367225_n.jpg" alt="Imagem" />
            </div>
            <h1>Janiel Marques</h1>
            <h2>Desenvolvedor Web</h2>
          </header>

          <main>
            <section>
              <h3>Sobre mim</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                quasi. Quasi, quaerat quidem quibusdam quasi quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat quaerat
              </p>
            </section>
            <section>
              <h3>Formação</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                quasi. Quasi, quaerat quidem quibusdam quasi quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat quaerat
              </p>
            </section>
            <section>
              <h3>Cursos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                quasi. Quasi, quaerat quidem quibusdam quasi quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat quaerat
              </p>
            </section>
          </main>
          <footer>
            <a href="https://github.com/janielmarks" target="_blank" rel="noopener noreferrer">
              <img src="./img/git.png" alt="GitHub" />
              <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/janiel-marques-547413249/" target="_blank" rel="noopener noreferrer">
              <img src="./img/linkedin.png" alt="LinkedIn" />
              <p>Linkedin</p>
            </a>
            <a href="https://www.instagram.com/janielmarks/" target="_blank" rel="noopener noreferrer">
              <img src="./img/instagram.jpg" alt="Instagram" />
              <p>Instagram</p>
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default App;
