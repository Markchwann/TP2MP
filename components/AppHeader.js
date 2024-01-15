// src/components/AppHeader.js
import React from 'react';

const AppHeader = ({ username }) => {
 return (
    <header>
      <h1>Aplikasi Anda</h1>
      <p>Nama Pengguna: {username}</p>
    </header>
 );
};

export default AppHeader;