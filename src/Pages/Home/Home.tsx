import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "animate.css";

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const [questions] = useState<Question[]>([
    {
      category: "Technology",
      type: "multiple",
      difficulty: "easy",
      question: "¿Qué significa HTML?",
      correct_answer: "HyperText Markup Language",
      incorrect_answers: [
        "HighText Machine Language",
        "HyperTabular Markup Language",
        "None of the above",
      ],
    },
    {
      category: "Technology",
      type: "multiple",
      difficulty: "easy",
      question: "¿Cuál de los siguientes es un lenguaje de programación?",
      correct_answer: "JavaScript",
      incorrect_answers: ["HTML", "CSS", "XML"],
    },
    {
      category: "Technology",
      type: "multiple",
      difficulty: "easy",
      question: "¿Qué significa CSS?",
      correct_answer: "Cascading Style Sheets",
      incorrect_answers: [
        "Cascading Simple Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
      ],
    },
    {
      category: "Technology",
      type: "multiple",
      difficulty: "easy",
      question: "¿Qué es un algoritmo?",
      correct_answer: "Un conjunto de instrucciones para resolver un problema",
      incorrect_answers: [
        "Una lista de archivos",
        "Un tipo de base de datos",
        "Una función matemática",
      ],
    },
    {
      category: "Technology",
      type: "multiple",
      difficulty: "easy",
      question: "¿Qué es Git?",
      correct_answer: "Un sistema de control de versiones",
      incorrect_answers: [
        "Un lenguaje de programación",
        "Un framework para front-end",
        "Una base de datos",
      ],
    },
  ]);

  useEffect(() => {
    setTimeout(() => setShowWelcome(true), 500);
  }, []);

  const handleAnswer = (option: string) => {
    if (option === questions[questionIndex].correct_answer) {
      setScore(score + 1);
      setMessage("¡Correcto! +1 punto");
      setMessageClass("bg-green-500");
    } else {
      setScore(score - 1);
      setMessage("Incorrecto! -1 punto");
      setMessageClass("bg-red-500");
    }

    setTimeout(() => {
      setMessage("");
      setMessageClass("");
    }, 2000);

    setQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />

      <div className="relative">
        <div className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 h-80 md:h-[500px] flex flex-col items-center justify-center text-center">
          <h1
            className={`text-white text-4xl md:text-6xl font-bold transition-opacity duration-1000 ${
              showWelcome ? "opacity-100" : "opacity-0"
            }`}
          >
            Bienvenido a <span className="text-green-500">DevOpinion</span>
          </h1>
          <p
            className={`text-white text-lg mt-4 max-w-2xl transition-opacity duration-1000 ${
              showWelcome ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Donde cada feedback cuenta, cada experiencia enriquece, y cada
            tecnología tiene un lugar en el mundo del desarrollo.
          </p>
          <Link to={"/Nosotros"}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full mt-6 transition">
              Explora más
            </button>
          </Link>
        </div>
      </div>

      <div className="py-16 px-5 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Por qué elegir <span className="text-green-500">DevOpinion</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-green-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Comunidad</h3>
            <p className="text-gray-600 text-sm">
              Únete a una comunidad vibrante de desarrolladores y comparte
              conocimientos y experiencia.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-blue-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Innovación</h3>
            <p className="text-gray-600 text-sm">
              Explora tecnologías y aprende a aplicarlas para resolver problemas
              reales.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="text-center mb-4">
              <div className="bg-blue-400 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Crecimiento</h3>
            <p className="text-gray-600 text-sm">
              Avanza en tu carrera con recursos diseñados para el aprendizaje
              continuo.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-5 md:px-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          ¿Qué tan bien conoces las tecnologías?
        </h2>
        {questions.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">
              {questions[questionIndex].question}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[questionIndex].incorrect_answers
                .concat(questions[questionIndex].correct_answer)
                .sort(() => Math.random() - 0.5)
                .map((option, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
            </div>
            <p className="text-gray-600 mt-4">
              Puntuación actual: <span className="font-bold">{score}</span>
            </p>
            {message && (
              <div
                className={`mt-4 text-white py-2 px-6 rounded-full ${messageClass} animate__animated animate__fadeIn animate__delay-1s`}
              >
                {message}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="bg-gradient-to-b from-blue-400 via-green-400 to-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para transformar tu{" "}
          <span className="text-blue-100">futuro</span>?
        </h2>
        <p className="text-lg mb-8">
          Únete a nuestra plataforma y forma parte del cambio.
        </p>
        <Link to={"/Tipos_Desarrollo"}>
          {" "}
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
            ¡Comienza ahora!
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
