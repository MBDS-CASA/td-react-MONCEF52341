import React, { useEffect, useState } from "react";
import "./App.css";
import GradeInfo from "./components/GradeInfo";
import Menu from "./components/Menu";
import gradeData from "./data.json";
import { getRandomItem } from "./utils/random";
import emsiLogo from "/emsi.jpg";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold tracking-tight">
            Introduction à React
          </h1>
          <h5 className="text-xl mt-2 font-light">
            A la découverte des premières notions de React
          </h5>
        </div>
        <a
          href="#"
          target="_blank"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img
            src={emsiLogo}
            className="w-20 h-20 rounded-full shadow-md"
            alt="EMSI logo"
          />
        </a>
      </div>
    </header>
  );
}

function MainContent() {
  const [randomGrade, setRandomGrade] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomGrade(getRandomItem(gradeData));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Bonjour, on est le {jours[currentTime.getDay()]},{" "}
          {currentTime.getDate()} {mois[currentTime.getMonth()]},{" "}
          {currentTime.getFullYear()} et il est{" "}
          <span className="font-mono bg-gray-100 px-2 py-1 rounded">
            {currentTime.getHours().toString().padStart(2, "0")}:{currentTime
              .getMinutes().toString().padStart(2, "0")}:{currentTime
              .getSeconds().toString().padStart(2, "0")}
          </span>
        </h3>
      </div>
      {randomGrade && <GradeInfo gradeInfo={randomGrade} />}
    </main>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <h5 className="text-sm">
        © {currentYear} - MOSTAINE Moncef, Tous droits réservés
      </h5>
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Menu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
