import React from 'react';

// Este é o seu componente de Barra de Navegação
const Navbar = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <h1 style={{ margin: 0 }}>Loja Moda Urbana</h1>
    </header>
  );
};

// Isso permite que outros arquivos, como o App.jsx, possam usar este componente
export default Navbar;

