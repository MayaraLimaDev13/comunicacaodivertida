import React, { useState } from 'react';
import Secao from './Secao';
import './App.css';

const App = () => {
  const [secaoAtual, setSecaoAtual] = useState(null);
  const [subsecaoAprendizagem, setSubsecaoAprendizagem] = useState(null);

  const botoesNavegacao = {
    sentimentos: require('./assets/images/sentimentos/botao_sentimentos.webp'),
    necessidades: require('./assets/images/necessidades/botao_necessidades.webp'),
    aprendizagem: {
      main: require('./assets/images/aprendizagem/botao_aprendizagem.webp'),
      subsecoes: {
        alfabeto: require('./assets/images/aprendizagem/alfabeto/subsecao-alfabeto.webp'),
        numerais: require('./assets/images/aprendizagem/numerais/subsecao-numerais.webp'),
        cores: require('./assets/images/aprendizagem/cores/subsecao-cores.webp'),
        'formas geométricas': require('./assets/images/aprendizagem/formas geometricas/subsecao-formas-geometricas.webp'),
      }
    },
    brincadeiras: require('./assets/images/brincadeiras/botao_brincadeiras.webp'),
    'assistir desenhos': require('./assets/images/assistir desenhos/botao_assistir_desenhos.webp'),
  };
  
  const seções = {
    sentimentos: [
      { imagem: require('./assets/images/sentimentos/feliz.webp'), texto: 'Feliz', audio: require('./assets/audios/sentimentos/feliz.mp3') },
      { imagem: require('./assets/images/sentimentos/triste.webp'), texto: 'Triste', audio: require('./assets/audios/sentimentos/triste.mp3') },
      { imagem: require('./assets/images/sentimentos/bravo.webp'), texto: 'Bravo', audio: require('./assets/audios/sentimentos/bravo.mp3') }, 
      { imagem: require('./assets/images/sentimentos/cansado.webp'), texto: 'Cansado', audio: require('./assets/audios/sentimentos/cansado.mp3') },
      { imagem: require('./assets/images/sentimentos/abraco.webp'), texto: 'Abraço', audio: require('./assets/audios/sentimentos/abraco.mp3') },
      { imagem: require('./assets/images/sentimentos/barulho.webp'), texto: 'Barulho', audio: require('./assets/audios/sentimentos/barulho.mp3') },
    ],
    necessidades: [
      { imagem: require('./assets/images/necessidades/comer.webp'), texto: 'Comer', audio: require('./assets/audios/necessidades/comer.mp3') },
      { imagem: require('./assets/images/necessidades/banheiro.webp'), texto: 'Banheiro', audio: require('./assets/audios/necessidades/banheiro.mp3') },
      { imagem: require('./assets/images/necessidades/beber água.webp'), texto: 'Beber água', audio: require('./assets/audios/necessidades/beber agua.mp3') },
      { imagem: require('./assets/images/necessidades/escovar os dentes.webp'), texto: 'Escovar os dentes', audio: require('./assets/audios/necessidades/escovar os dentes.mp3') },
      { imagem: require('./assets/images/necessidades/banho.webp'), texto: 'Banho', audio: require('./assets/audios/necessidades/banho.mp3') },
      { imagem: require('./assets/images/necessidades/lavar as mãos.webp'), texto: 'Lavar as mãos', audio: require('./assets/audios/necessidades/lavar as maos.mp3') },
    ],
    aprendizagem: {
      alfabeto: [
        { imagem: require('./assets/images/aprendizagem/alfabeto/a.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/a.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/b.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/b.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/c.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/c.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/d.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/d.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/e.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/e.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/f.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/f.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/g.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/g.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/h.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/h.mp3') }, 
        { imagem: require('./assets/images/aprendizagem/alfabeto/i.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/i.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/j.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/j.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/k.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/k.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/l.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/l.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/m.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/m.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/n.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/n.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/o.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/o.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/p.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/p.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/q.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/q.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/r.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/r.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/s.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/s.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/t.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/t.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/u.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/u.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/v.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/v.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/w.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/w.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/x.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/x.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/y.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/y.mp3') },
        { imagem: require('./assets/images/aprendizagem/alfabeto/z.webp'), audio: require('./assets/audios/aprendizagem/alfabeto/z.mp3') },
      ],
      numerais: [
        { imagem: require('./assets/images/aprendizagem/numerais/numero 1.webp'), audio: require('./assets/audios/aprendizagem/numerais/1.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 2.webp'), audio: require('./assets/audios/aprendizagem/numerais/2.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 3.webp'), audio: require('./assets/audios/aprendizagem/numerais/3.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 4.webp'), audio: require('./assets/audios/aprendizagem/numerais/4.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 5.webp'), audio: require('./assets/audios/aprendizagem/numerais/5.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 6.webp'), audio: require('./assets/audios/aprendizagem/numerais/6.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 7.webp'), audio: require('./assets/audios/aprendizagem/numerais/7.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 8.webp'), audio: require('./assets/audios/aprendizagem/numerais/8.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 9.webp'), audio: require('./assets/audios/aprendizagem/numerais/9.mp3') },
        { imagem: require('./assets/images/aprendizagem/numerais/numero 10.webp'), audio: require('./assets/audios/aprendizagem/numerais/10.mp3')},
      ],
      cores: [
        { imagem: require('./assets/images/aprendizagem/cores/azul escuro.webp'), texto: 'azul escuro', audio: require('./assets/audios/aprendizagem/cores/azul escuro.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/vermelho.webp'), texto: 'vermelho', audio: require('./assets/audios/aprendizagem/cores/vermelho.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/verde.webp'), texto: 'verde', audio: require('./assets/audios/aprendizagem/cores/verde.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/amarelo.webp'), texto: 'amarelo', audio: require('./assets/audios/aprendizagem/cores/amarelo.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/preto.webp'), texto: 'preto', audio: require('./assets/audios/aprendizagem/cores/preto.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/branco.webp'), texto: 'branco', audio: require('./assets/audios/aprendizagem/cores/branco.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/azul claro.webp'), texto: 'azul claro', audio: require('./assets/audios/aprendizagem/cores/azul claro.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/rosa.webp'), texto: 'rosa', audio: require('./assets/audios/aprendizagem/cores/rosa.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/laranja.webp'), texto: 'laranja', audio: require('./assets/audios/aprendizagem/cores/laranja.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/roxo.webp'), texto: 'roxo', audio: require('./assets/audios/aprendizagem/cores/roxo.mp3') },
        { imagem: require('./assets/images/aprendizagem/cores/marrom.webp'), texto: 'marrom', audio: require('./assets/audios/aprendizagem/cores/marrom.mp3') },
      ],
      'formas geométricas': [
        { imagem: require('./assets/images/aprendizagem/formas geometricas/circulo.webp'), texto: 'círculo', audio: require('./assets/audios/aprendizagem/formas geometricas/circulo.mp3') },
        { imagem: require('./assets/images/aprendizagem/formas geometricas/retangulo.webp'), texto: 'retângulo', audio: require('./assets/audios/aprendizagem/formas geometricas/retangulo.mp3') },
        { imagem: require('./assets/images/aprendizagem/formas geometricas/triangulo.webp'), texto: 'triângulo', audio: require('./assets/audios/aprendizagem/formas geometricas/triangulo.mp3') },
        { imagem: require('./assets/images/aprendizagem/formas geometricas/quadrado.webp'), texto: 'quadrado', audio: require('./assets/audios/aprendizagem/formas geometricas/quadrado.mp3') },
      ],
    },
    brincadeiras: [
      { imagem: require('./assets/images/brincadeiras/parquinho.webp'), texto: 'parquinho', audio: require('./assets/audios/brincadeiras/parquinho.mp3') },
      { imagem: require('./assets/images/brincadeiras/massinha.webp'), texto: 'massinha', audio: require('./assets/audios/brincadeiras/massinha.mp3') },
      { imagem: require('./assets/images/brincadeiras/brinquedos.webp'), texto: 'brinquedos', audio: require('./assets/audios/brincadeiras/brinquedos.mp3') },
    ],
    'assistir desenhos': [
      { imagem: require('./assets/images/assistir desenhos/Casa_magica_da_gabby.webp'), texto: 'A casa mágica da Gabby', link: "https://www.youtube.com/@acasamagicadagabby" },
      { imagem: require('./assets/images/assistir desenhos/marsha_e_o_urso.webp'), texto: 'Marsha e o urso', link: "https://www.youtube.com/@Mashaurso" },
    ],
  };
  const handleVoltar = () => {
    if (subsecaoAprendizagem) {
      setSubsecaoAprendizagem(null);
    } else {
      setSecaoAtual(null);
    }
  };
  return (
    <div id='root'>
      <header>
        <h1>Comunicação Divertida</h1>
      </header>
    <div className='content'>
      {!secaoAtual && (
        <>
          <div className='info-container'>
            <h2>Vamos aprender e nos divertir!</h2>
            <p>Clique nos botões abaixo para explorar</p>
          </div>
            <nav className='nav-container'>
              {Object.entries(botoesNavegacao).map(([secao, dados]) => {
                const imagem = secao === 'aprendizagem' ? dados.main : dados;
                return (
                  <button className='nav-button'
                    key={secao} 
                    onClick={() => setSecaoAtual(secao)}
                    aria-label={secao}
                  >
                    <img className='nav-icon'
                      src={imagem} 
                      alt={`Ícone ${secao}`}
                    />
                    <span>
                      {secao.charAt(0).toUpperCase() + secao.slice(1)}
                    </span>
                  </button>
                )
              })}
            </nav>
        </>
      )}

{secaoAtual && (
  <div className='secao-container'>
    {secaoAtual === 'aprendizagem' ? (
      <>
        {!subsecaoAprendizagem ? (
          <>
            <h2>Aprendizagem</h2>
            <div className="subsecoes-menu">
              {Object.keys(seções.aprendizagem).map((subsecao) => (
                <button
                  key={subsecao}
                  className="subsecao-button"
                  onClick={() => setSubsecaoAprendizagem(subsecao)}
                >
                  <img
                    src={botoesNavegacao.aprendizagem.subsecoes[subsecao]}
                    alt={subsecao}
                    className="subsecao-icon"
                  />
                  <span className="subsecao-label">
                    {subsecao.charAt(0).toUpperCase() + subsecao.slice(1)}
                  </span>
                </button>
              ))}
            </div>
            <button 
                className="voltar-button"
                onClick={handleVoltar}>Voltar</button>
          </>
        ) : (
          <Secao
            titulo={subsecaoAprendizagem}
            pictogramas={seções.aprendizagem[subsecaoAprendizagem]}
            onVoltar={handleVoltar}
            showVoltar={true}
          />
        )}
      </>
    ) : (
      <Secao
        titulo={secaoAtual}
        pictogramas={seções[secaoAtual] || []}
        onVoltar={handleVoltar}
        showVoltar={true}
      />
    )}
  </div>
)}
</div>
    <footer>
        <p>&copy; 2025 Comunicação Divertida. Todos os direitos reservados.</p>
    </footer>
    </div>
  );
};
export default App;
