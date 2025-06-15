
import './App.css'
import Boton from './components/Boton.jsx'
import BotonEstilo from './components/BotonEstilo.jsx'

function App() {
  return (
    <div>
      <div className='min-h-screen bg-black flex items-center flex-col justify-center gap-10'>
        <Boton/>
        <BotonEstilo/>
      </div>
    </div>
  )
}

export default App
