import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecalho from "./funcao/Cabecalho";
import LivroCard from "./funcao/LivroCard";
import Pesquisa from "./funcao/Pesquisa";
import Livros from "./funcao/Livro";
import { findAll } from "./funcao/LivroApi";
import "./styles.css";

export default function App() {
  const [livros, setLivros] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    findAll()
      .then((dados) => {
        setLivros(dados.map((livro) => ({ ...livro, estante: "queroLer" })));
      })
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  // Atualiza a estante de um livro
  const handleUpdateEstante = (id, novaEstante) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, estante: novaEstante } : livro
      )
    );
  };

  // Adiciona um novo livro, se ele não estiver na lista
  const handleAdicionarLivro = (novoLivro) => {
    if (!livros.find((livro) => livro.id === novoLivro.id)) {
      setLivros((prevLivros) => [...prevLivros, novoLivro]);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <Router>
      <div className="App">
        <Cabecalho onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Minha Estante</h1>
                <Livros livros={livros} moverLivro={handleUpdateEstante} />
              </div>
            }
          />
          <Route
            path="/search"
            element={
              <Pesquisa
                livros={livros}
                query={query}
                moverLivro={handleUpdateEstante}
                adicionarLivro={handleAdicionarLivro}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
