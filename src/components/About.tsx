import React from "react";
import { Code2, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* <motion.h2
          className="text-3xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          About Me
        </motion.h2> */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.p className="text-gray-600 leading-relaxed mb-6">
              {/* A passionate Front-end developer with 1.3 years of experience in React.js, JavaScript, TypeScript, and Redux,
              specializing in building dynamic, user-friendly web applications. Experienced in integrating Graph API and REST APIs
              for data handling. Seeking a challenging role to contribute to organizational growth while further enhancing my technical skills
              and expertise. */}
              A results-driven Front-End Developer with 1.3 years of experience
              in React.js, React Native, TypeScript, and Redux. Dedicated to
              building sleek, user-centric applications and ensuring seamless
              API integrations. Passionate about clean code, intuitive design,
              and crafting solutions that make a lasting impact.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="p-4 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code2 className="text-indigo-600 mb-2" size={24} />
                <h3 className="font-semibold mb-1">Frontend</h3>
                <p className="text-sm text-gray-600">
                  {/* React, TypeScript, Redux */}
                  React, TypeScript, React Native, Redux, UI/UX Design,
                  Component Architecture, Responsive Development
                </p>
              </motion.div>
              <motion.div
                className="p-4 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Brain className="text-indigo-600 mb-2" size={24} />
                <h3 className="font-semibold mb-1">Problem Solving</h3>
                <p className="text-sm text-gray-600">
                  {/* API Integration, Testing */}
                  API Integration, Data Flow Management, Automated Testing,
                  Debugging, Performance Tuning
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-3"
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="relative rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
