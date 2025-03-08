
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Layout,
  Database,
  Terminal,
  GitBranch,
  Box,
  Cpu,
  TestTube,
  Globe,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const skills = [
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    items: ['React.js', 'Redux', 'Redux Toolkit', 'React Router', 'React Native'],
  },
  {
    category: 'State Management',
    icon: <Database className="w-6 h-6" />,
    items: ['Redux', 'Context API', 'Redux Toolkit'],
  },
  {
    category: 'Version Control & DevOps',
    icon: <Terminal className="w-6 h-6" />,
    items: ['VS Code', 'Bitbucket', 'Git', 'Docker'],
  },
  {
    category: 'Testing & Automation',
    icon: <TestTube className="w-6 h-6" />,
    items: ['Playwright', 'Selenium'],
  },
  {
    category: 'API Integration & Services',
    icon: <Globe className="w-6 h-6" />,
    items: ['REST APIs', 'GraphQL', 'Axios', 'Fetch API', 'Apollo Client', 'WebSocket'],
  },
  {
    category: 'Performance Optimization & Tools',
    icon: <Cpu className="w-6 h-6" />,
    items: ['Code Splitting', 'Lazy Loading', 'Webpack', 'Babel', 'Vite'],
  },
  {
    category: 'UI/UX & Design Systems',
    icon: <Box className="w-6 h-6" />,
    items: ['Bootstrap', 'framer-motion', 'Styled-components', 'Tailwind CSS'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { type: 'spring', stiffness: 400 },
              }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 text-white">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <motion.li
                    key={item}
                    className="text-gray-600 flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
