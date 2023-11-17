import './App.css';
import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/aboutMe/AboutMe';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;