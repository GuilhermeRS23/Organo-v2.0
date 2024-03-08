import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="http://www.facebook.com" target="_blank">
              <img src="/imgs/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img src="/imgs/ig.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <img src="/imgs/tw.png" alt="X" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imgs/logo.png" alt="Organo Logo" />
      </section>
      <section>
        <p>Desenvolvido por Guilherme Rosa</p>
        <p>e Alura</p>
      </section>
    </footer>
  );
};

export default Rodape;
