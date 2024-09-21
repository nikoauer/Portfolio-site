import Navbar from './components/Navbar'
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ScrollUp from './components/ScrollUp.jsx';



function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
        <ScrollUp />
      </main>
    </div>
  );
}

export default App;