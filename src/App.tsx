import { Button } from "./components/Button"
import { Calculator } from "./components/Calculator/Calculator"
import { Contador } from "./components/Contador/Contador"
import { GlassMorph } from "./components/GlassMorph"
import { Header } from "./components/Header"
import { HelloWorld } from "./components/HelloWorld"
import { LoadingBar } from "./components/LoadingBar"
import { NotFoundPage } from "./components/NotFoundPage"

function App() {

  return (
    <>
      <Header />
      <HelloWorld />
      <Button />
      <Calculator />
      <NotFoundPage />
      <GlassMorph />
      <Contador />
      <LoadingBar />
    </>
  )
}

export default App
