import React from "react";
import LivroCard from "./LivroCard";
import "./livro.css";

  const Livros = ({ livros, moverLivro }) => {
    const estantes = {
      lendo: "Estou lendo",
      queroLer: "Quero ler",
      lido: "Já lido",
    };
  
    return (
      <div className="livros">
        {Object.entries(estantes).map(([key, title]) => (
          <div key={key} className="estante">
            <h2>{title}</h2>
            <div className="livros-container">
              {livros
                .filter((livro) => livro.estante === key)
                .map((livro) => (
                  <LivroCard
                    key={livro.id}
                    livro={livro}
                    moverLivro={moverLivro} // Corrigido: função é passada corretamente
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default Livros;
