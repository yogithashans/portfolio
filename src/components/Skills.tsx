import React from 'react';
import { Code2, Layout, Database, Terminal, GitBranch, Box, Cpu, TestTube, Globe, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="text-indigo-600" size={24} />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Python']
  },
  {
    title: 'Frontend',
    icon: <Layout className="text-indigo-600" size={24} />,
    skills: ['React.js', 'Redux', 'Redux Toolkit', 'React Router', 'React Native']
  },
  {
    title: 'State Management',
    icon: <Database className="text-indigo-600" size={24} />,
    skills: ['Redux', 'Context API', 'Redux Toolkit']
  },
  {
    title: 'Development Tools',
    icon: <Terminal className="text-indigo-600" size={24} />,
    skills: ['VS Code', 'Git', 'Bitbucket', 'npm', 'Yarn']
  },
  {
    title: 'Testing',
    icon: <TestTube className="text-indigo-600" size={24} />,
    skills: ['Playwright', 'Selenium']
  },
  {
    title: 'API Integration',
    icon: <Globe className="text-indigo-600" size={24} />,
    skills: ['REST APIs', 'GraphQL', 'Axios', 'Fetch API']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </motion.div>
              <motion.ul 
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.1) }}
                  >
                    • {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;