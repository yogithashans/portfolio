import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Brain, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Smart Healthcare Application For Homecare Patients',
    description: 'IoT-based healthcare monitoring system that enables remote patient monitoring and real-time health tracking.',
    technologies: ['Arduino IDE', 'Android Studio', 'Firebase', 'IoT'],
    icon: <Heart className="text-indigo-600" size={24} />,
    link: '#'
  },
  {
    title: 'Brain Tumour Detection App',
    description: 'Mobile application that utilizes machine learning algorithms to detect and analyze brain tumors from medical images.',
    technologies: ['Android Studio', 'Machine Learning', 'Python'],
    icon: <Brain className="text-indigo-600" size={24} />,
    link: '#'
  },
  {
    title: 'Face Mask Detection',
    description: 'Real-time face mask detection system using computer vision and machine learning techniques.',
    technologies: ['Machine Learning', 'Python'],
    icon: <Shield className="text-indigo-600" size={24} />,
    link: '#'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div
                  className="mt-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={project.link}
                    className="text-indigo-600 font-medium flex items-center"
                  >
                    Learn More
                    <Code2 size={16} className="ml-2" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;