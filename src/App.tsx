import { Button } from "./components/Button"
import { Calculator } from "./components/Calculator/Calculator"
import { GlassMorph } from "./components/GlassMorph"
import { Header } from "./components/Header"
import { HelloWorld } from "./components/HelloWorld"
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
    </>
  )
}

export default App
