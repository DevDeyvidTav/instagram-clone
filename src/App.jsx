import { Conteudo } from './components/Conteudo.jsx'
import { Footer } from './components/Footer.jsx'


export function App(){
  return(
    <div className="w-screen grid max-w-full items-center justify-center h-screen bg-white">
      <Conteudo/>
      <Footer/>
    </div>
  )
}
