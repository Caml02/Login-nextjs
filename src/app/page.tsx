"use client";

// Importa React y useState desde React
import React, { useState, useEffect } from 'react';

function HomePage() {
  // Define un estado para controlar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Utiliza useEffect para aplicar el modo oscuro al elemento HTML raíz
  useEffect(() => {
    // Cuando cambia el estado de isDarkMode, actualiza la clase "dark" en el elemento HTML raíz
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Función para cambiar entre el modo claro y oscuro
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev); // Cambia el estado de isDarkMode
  };

  return (
    <div className={`h-[calc(100vh-8rem)] justify-center flex flex-col items-center mb-10 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="flex items-center space-x-4">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flivecoins.com.br%2Fwp-content%2Fuploads%2F2021%2F07%2FNubank-aplicativo-financeiro-blockchain.jpg&f=1&nofb=1&ipt=8f4c74afb2197576513d48c0cb307ab0b09067dfaa132ad23e11df0828ae8074&ipo=images"
           alt="" width="150" height="150" className="flex-none rounded-lg bg-slate-100" loading="lazy" />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-violet-600 dark:text-violet-400 text-sm">
              Nu Bank Employee's Portal
            </p>
            <p className="text-slate-900 dark:text-slate-50 text-lg">
              Full Stack Proyect
            </p>
            <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate ">
              "The best way to predict the future is to create it." - Peter Drucker
            </h2>
            
          </div>
        </div>
      </div>
      
      
      <button
        type="button"
        onClick={toggleDarkMode}
        className="bg-slate-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-slate-800"
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
}

export default HomePage;
