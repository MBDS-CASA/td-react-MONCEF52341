import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import GradeInfo from "./components/GradeInfo";
import Menu from "./components/Menu";
import gradeData from "./data/data.json";
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
    const gradeInterval = setInterval(() => {
      setRandomGrade(getRandomItem(gradeData));
    }, 5000);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(gradeInterval);
      clearInterval(timer);
    };
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
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Date et heure actuelles</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold text-gray-800">
            Bonjour, on est le {jours[currentTime.getDay()]},{" "}
            {currentTime.getDate()} {mois[currentTime.getMonth()]},{" "}
            {currentTime.getFullYear()} et il est{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {currentTime.getHours().toString().padStart(2, "0")}:{currentTime
                .getMinutes().toString().padStart(2, "0")}:{currentTime
                .getSeconds().toString().padStart(2, "0")}
            </span>
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="random" className="mb-8">
        <TabsList>
          <TabsTrigger value="random">Note Aléatoire</TabsTrigger>
          <TabsTrigger value="table">Tableau de Données</TabsTrigger>
        </TabsList>
        <TabsContent value="random">
          {randomGrade && <GradeInfo gradeInfo={randomGrade} />}
          <Button
            className="mt-4"
            onClick={() => setRandomGrade(getRandomItem(gradeData))}
          >
            Générer une nouvelle note
          </Button>
        </TabsContent>
        <TabsContent value="table">
          <DataTable data={gradeData} />
        </TabsContent>
      </Tabs>
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
