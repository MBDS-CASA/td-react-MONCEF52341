import './App.css';
import emsiLogo from '/emsi.jpg';


function Header() {
  return (
    <header>
      <h1>Introduction à React</h1>
      <h5>A la découverte des premières notions de React</h5>
      <a href="#" target="_blank">
          <img src={emsiLogo} className="logo" alt="Vite logo" />
        </a>
    </header>
  )
}

function MainContent() {
  const now = new Date();
  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  return (
    <h3>
      Bonjour, on est le {jours[now.getDay()]}, {now.getDate()} {mois[now.getMonth()]}, {now.getFullYear()} et il est {now.getHours().toString().padStart(2, '0')}:{now.getMinutes().toString().padStart(2, '0')}:{now.getSeconds().toString().padStart(2, '0')}
    </h3>
  )}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h5>© {currentYear} - MOSTAINE Moncef, Tous droits réservés</h5>
    </footer>
  )
}

function App() {

  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  )
}

export default App
