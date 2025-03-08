import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Car, ExternalLink, Github, ShoppingBagIcon, ShoppingCart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// const projects = [
//   {
//     title: "Splendid",
//     // description:
//     //   "A high-performance dashboard with OAuth integration for social media platforms.",
//     tech: ["React", "TypeScript", "Redux", "OAuth"],
//     highlights: [
//       "Designed and developed dashboard with React and TypeScript",
//       "Implemented OAuth for Instagram, Facebook, and YouTube",
//       "Optimized API connections for better performance",
//     ],
//     icon: <ShoppingCart className="text-indigo-600" size={24} />,
//   },
//   {
//     title: "Keyon",
//     // description:
//     //   "Scalable front-end application with GraphQL and REST API integration.",
//     tech: ["React", "TypeScript", "GraphQL", "Redux"],
//     highlights: [
//       "Developed responsive and scalable front-end",
//       "Integrated GraphQL and REST APIs",
//       "Reduced development time by 30% with reusable components",
//     ],
//     icon: <Car className="text-indigo-600" size={24} />,

//   },
//   {
//     title: "Witmer",
//     // description:
//     //   "Feature-rich application with real-time updates and automated testing.",
//     tech: ["React", "TypeScript", "WebSocket", "Playwright"],
//     highlights: [
//       "Enhanced front-end with dynamic designs",
//       "Implemented WebSocket for live updates",
//       "Automated testing reducing manual effort by 40%",
//     ],
//     icon: <Brain className="text-indigo-600" size={24} />,

//   },
// ];
const projects = [
  {
    title: "Splendid",
    tech: ["React", "React Native", "TypeScript", "Redux", "OAuth"],
    highlights: [
      "Engineered a scalable and high-performance platform using React and TypeScript.",
      "Integrated OAuth for secure authentication with social media APIs.",
      "Developed reusable components that accelerated front-end development.",
      "Enhanced API performance through optimized data-fetching techniques.",
      "Supported React Native integration for cross-platform functionality.",
    ],
    icon: <ShoppingCart className="text-indigo-600" size={24} />,
  },
  {
    title: "Keyon",
    tech: ["React", "TypeScript", "GraphQL", "Redux"],
    highlights: [
      "Created a highly responsive and dynamic front-end using React and Redux.",
      "Integrated GraphQL and REST APIs to manage and display complex data.",
      "Improved scalability by designing modular and reusable components.",
      "Implemented state management solutions for smooth cross-platform functionality.",
      "Optimized the app’s load time and performance using code splitting and lazy loading.",
    ],
    icon: <Car className="text-indigo-600" size={24} />,
  },
  {
    title: "Witmer",
    tech: ["React", "TypeScript", "WebSocket", "Playwright"],
    highlights: [
      "Developed a feature-rich, real-time application using WebSocket and React.",
      "Engineered dynamic UIs with advanced component structures for scalability.",
      "Implemented Playwright and Selenium for automated UI and functional testing.",
      "Ensured smooth data sync and real-time updates with WebSocket integration.",
      "Optimized front-end performance, reducing load times and resource consumption.",
    ],
    icon: <Brain className="text-indigo-600" size={24} />,
  },
];


export default function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
                  {project.icon}
                  <span className="ml-2">{project.title}</span>
                </h3>
                {/* <p className="text-gray-600 mb-4">{project.description}</p> */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-600 text-sm flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
