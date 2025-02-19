
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Quote, Share } from "lucide-react";
import { useState, useEffect } from "react";

const richPeopleQuotes = [
  { author: "Elon Musk", quote: "I'm so rich I can buy Twitter for fun!" },
  { author: "Warren Buffett", quote: "I make money in my sleep, that's why I never wake up early." },
  { author: "Bill Gates", quote: "I don't know my bank balance, too many zeros to count." },
  { author: "Jeff Bezos", quote: "Space travel is my weekend hobby." }
];

const leaderboardData = [
  { name: "Diamond Dan", score: 99999999 },
  { name: "Platinum Pete", score: 88888888 },
  { name: "Golden Gary", score: 77777777 },
];

const Index = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(richPeopleQuotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * richPeopleQuotes.length);
      setCurrentQuote(richPeopleQuotes[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleProveClick = () => {
    navigate("/wealth-calculator");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center space-y-8 max-w-2xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Are you <span className="text-gold">REALLY</span> rich?
        </h1>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleProveClick}
            className="premium-button w-full md:w-auto px-12"
          >
            Prove It Now
          </button>
        </motion.div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass p-6 rounded-xl max-w-2xl mx-auto mb-12 text-center"
      >
        <Quote className="w-6 h-6 text-gold mb-4 mx-auto" />
        <p className="text-lg text-gray-300 italic mb-2">"{currentQuote.quote}"</p>
        <p className="text-gold font-medium">- {currentQuote.author}</p>
      </motion.div>

      {/* Leaderboard Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-6 rounded-xl max-w-2xl w-full"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="text-gold w-6 h-6" />
            Richest Proven Users
          </h2>
          <Share className="text-gold w-5 h-5 cursor-pointer" />
        </div>
        
        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <div
              key={user.name}
              className="flex items-center justify-between p-4 rounded-lg bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="text-gold font-bold">{index + 1}</span>
                <span className="text-gray-200">{user.name}</span>
              </div>
              <span className="text-gold font-mono">
                ${user.score.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
