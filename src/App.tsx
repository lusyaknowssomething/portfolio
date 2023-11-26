import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { AboutMe } from "./layout/sections/aboutMe/AboutMe";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Main } from "./layout/sections/main/Main";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
