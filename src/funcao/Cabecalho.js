import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate
import "./cabecalho.css";

export default function Cabecalho({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate("/search");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header>
      <div className="container">
        <h1 className="estante-titulo">Estante Virtual</h1>
        <div className="nav">
          <ul>
            <li>
              <Link to="/" className="nav-button">
                Inicial
              </Link>
            </li>
            <li>
              <Link to="/search" className="nav-button">
                Pesquisar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
