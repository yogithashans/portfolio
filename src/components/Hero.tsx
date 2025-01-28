import React, { useRef } from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from "../assets/IMG_20241225_203428.png"

const Hero = ({focusInput}:{focusInput:()=>void}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="container mx-auto px-6 py-20 relative">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 text-center md:text-left">
            <motion.div
              className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-indigo-100 text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} className="mr-2" />
              <span className="text-sm font-medium">Front-End Developer</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={textVariants}
            >
              <span className="inline-block">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Yogitha
                </span>
              </span>
              <motion.span
                className="inline-block text-indigo-600 ml-2"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  transition: { 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              variants={textVariants}
            >
              Crafting beautiful and intuitive web experiences with{' '}
              <span className="text-indigo-600 font-semibold">React</span> and{' '}
              <span className="text-indigo-600 font-semibold">TypeScript</span>.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-4 mb-8"
              variants={textVariants}
            >
              <motion.div
                className="flex items-center text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin size={20} className="mr-2" />
                <span>Chennai, India</span>
              </motion.div>

              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={focusInput}
              >
                Let's Connect
                <ArrowRight size={18} className="ml-2" />
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-4 justify-center md:justify-start"
              variants={textVariants}
            >
              <motion.a 
                href="mailto:yogithashans@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="text-gray-600" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yogitha-shanmugam"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="text-gray-600" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img 
                // src="/profile-image.jpg" 
                src="/portfolio/IMG_20241225_203428.png"
                alt="Profile" 
                className="relative rounded-full w-64 h-64 mx-auto object-cover shadow-xl border-4 border-white"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;