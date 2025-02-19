
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const Index = () => {
  const navigate = useNavigate();

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black relative overflow-hidden"
    >
      <ParticlesBackground />
      
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8 z-10"
      >
        <motion.div variants={childVariants} className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Are you <span className="text-gold">REALLY</span> rich?
            <br />
            I don't trust you.
            <br />
            <span className="text-gold">Prove it now!</span>
          </h1>
          
          <motion.p
            className="text-gray-400 text-lg md:text-xl"
            variants={childVariants}
          >
            Join the elite club of verified wealthy individuals
          </motion.p>
        </motion.div>

        <motion.div
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button
            onClick={() => navigate("/payment")}
            className="premium-button group"
          >
            <span className="inline-flex items-center gap-2">
              Prove Me
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default Index;
