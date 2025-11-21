import React from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/cover_photo.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { FlipWords } from "../../components/ui/flip-words";

const Home = () => {
  const skills = ["Full-Stack Developer", "Front-End Developer"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home section grid"
    >
      <motion.img
        src={Profile}
        alt=""
        className="home__img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />

      <motion.div
        className="home__content"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="home__data">
          <motion.h1
            className="home__title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="Intro">I'm Pragya Srivastava.</span>
            <div className="home__post">
              <FlipWords words={skills} /> <br />
            </div>
          </motion.h1>

          <motion.p
            className="home__description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            I’m a dynamic full-stack developer skilled in modern front-end and
            back-end technologies. I build seamless user experiences, architect
            scalable systems, and deliver high-impact solutions. I also work
            with AI, LLMs, and LangChain to create intelligent and automated
            applications.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link to="/about" className="button">
              More About Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="color__block"></motion.div>
    </motion.section>
  );
};

export default Home;
