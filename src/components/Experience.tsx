import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Front-End Developer",
    company: "Energetics.ai Private Limited",
    period: "Nov 2023 - Present",
    description: [
      // "Designed and developed high-performance dashboards with React and TypeScript",
      // "Implemented OAuth for Instagram, Facebook, and YouTube",
      // "Developed highly scalable components reducing future development time by 30%",
      // "Integrated WebSocket for live updates and notifications",
      // "Automated testing using Playwright and Selenium",
      "Developed responsive web and mobile applications using React, React Native, and TypeScript",
      "Optimized API integrations for improved performance and seamless user experiences",
      "Implemented WebSocket for real-time updates and live notifications, enhancing interactivity",
      "Worked with Redux for efficient state management across platforms",
      "Automated UI and functional testing, reducing manual efforts by 40% using Playwright and Selenium",
      "Integrated OAuth for secure authentication with Instagram, Facebook, and YouTube APIs",
    ],
  },
  {
    title: "Executive-Customer Support",
    company: "Spincotech Systems LLP",
    period: "Dec 2022 - Nov 2023",
    description: [
      "Managed supply chain and customer support operations using SAP Business ByDesign",
      "Led virtual team meetings and prepared reports",
      "Utilized MS Excel and CRM tools to streamline workflows",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          // className="text-3xl font-bold text-center mb-16"
          className="text-4xl font-bold text-center text-gray-800  mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {index !== experiences.length - 1 && (
                <motion.div
                  className="absolute left-[11px] top-8 h-full w-0.5 bg-gray-200"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
              )}
              <motion.div
                className="absolute left-0 top-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.2,
                }}
              >
                <Briefcase size={14} className="text-white" />
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm ml-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white shadow-md"
                  >
                    <Briefcase className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    {exp.title}
                  </h3>
                </div>
                {/* <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p> */}
                <h3 className="font-medium text-lg text-gray-600">
                  {exp.company}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <motion.ul className="mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + i * 0.1,
                      }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
