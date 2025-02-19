
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Are you <span className="text-gold">REALLY</span> rich?
          <br />
          I don't trust you.
          <br />
          <span className="text-gold">Prove it now!</span>
        </h1>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button
            onClick={() => navigate("/payment")}
            className="premium-button"
          >
            Prove Me
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
