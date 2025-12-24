import { useTheme } from '../hooks/useTheme';

const ThemeToggle = ({ className = "", size = "md" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        relative
        rounded-full
        bg-white dark:bg-dark-surface
        border-2 border-gray-200 dark:border-dark-border
        shadow-lg dark:shadow-gray-900/20
        hover:shadow-xl dark:hover:shadow-gray-900/30
        transition-all duration-300 ease-in-out
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-pnp-green dark:focus:ring-dark-pnp-green
        ${className}
      `}
      aria-label={`Cambiar a modo ${isDarkMode ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${isDarkMode ? 'claro' : 'oscuro'}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isDarkMode ? (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
      </div>
      
      {/* Efecto de rotación */}
      <div className={`
        absolute inset-0 rounded-full
        transition-all duration-500 ease-in-out
        ${isDarkMode ? 'rotate-180' : 'rotate-0'}
      `}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 dark:opacity-20 transition-opacity duration-300" />
      </div>
    </button>
  );
};

export default ThemeToggle;