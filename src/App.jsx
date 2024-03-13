import Header from "./components/Header"
import Main from "./components/Main"

import "./styles/components/app.sass"

function App() {

  return (
    <>
        <section id="name-container">
        <h1 id="name">Vitor Oséas</h1>
        </section>
      <div id="portfolio">
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
