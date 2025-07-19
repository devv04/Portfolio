// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition ${className}`}
    >
      {children}
    </button>
  );
};
