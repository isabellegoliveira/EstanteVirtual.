import React from "react";
import "./livrocard.css";

const LivroCard = ({ livro, moverLivro }) => {
  return (
    <div className="livro-card-container">
      <div className="livro-card-imagem">
        {livro.imageLinks?.thumbnail ? (
          <img
            src={livro.imageLinks.thumbnail}
            alt={`Capa do livro: ${livro.title || "Título desconhecido"}`}
          />
        ) : (
          <div className="sem-imagem">Sem capa disponível</div>
        )}
      </div>
      <h2>{livro.title || "Título desconhecido"}</h2>
      <h3>{livro.authors?.join(", ") || "Autor desconhecido"}</h3>
      <select
        onChange={(e) => moverLivro(livro.id, e.target.value)} // Chama a função ao mudar o valor
        value={livro.estante || "none"}
      >
        <option value="none" disabled>
          Mover para...
        </option>
        <option value="lendo">Estou lendo</option>
        <option value="queroLer">Quero ler</option>
        <option value="lido">Já lido</option>
      </select>
    </div>
  );
};

export default LivroCard;
