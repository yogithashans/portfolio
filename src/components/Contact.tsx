import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Contact( { inputRef ,connectRef}: { inputRef: any ,connectRef:any}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.log("error",error)
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 " ref={connectRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 text-gray-600"
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                <Mail className="w-6 h-6" />
              </div>
              <a href="mailto:yogithashans@gmail.com" className="hover:text-blue-600 transition-colors">
                yogithashans@gmail.com
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 text-gray-600"
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                <Phone className="w-6 h-6" />
              </div>
              <a href="tel:+916381922684" className="hover:text-blue-600 transition-colors">
                +91 6381922684
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 text-gray-600"
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <span>Chennai, India</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800"
                  ref={inputRef}
                />
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800"
                />
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}