
import './App.css'
import { ThemeProvider } from './context/ThemeContext.jsx';
import BotonEstilo from './components/BotonEstilo.jsx'

function App() {
  return (
    <ThemeProvider>
      <div>
      <div className='min-h-screen dark:bg-black bg-white flex items-center flex-col justify-center gap-10'>
        <h1 className='dark:text-white text-2xl text-black'>Componente para modo claro y oscuro en React</h1>
        <BotonEstilo/>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
