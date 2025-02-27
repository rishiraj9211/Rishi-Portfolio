
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("animate-fade-in-up");
          section.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Project One",
      description: "A minimal design project showcasing modern aesthetics",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Two",
      description: "Clean and sophisticated web development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Three",
      description: "Innovation through simplicity",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const skills = [
    "Design Systems",
    "UI/UX Design",
    "Frontend Development",
    "Backend Architecture",
    "Project Management",
    "Creative Direction",
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Creating minimal and effective design solutions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" style={{ opacity: 0 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              A passionate creator focused on crafting clean, user-friendly experiences. With a keen eye for detail and a dedication to excellence, I bring ideas to life through thoughtful design and precise execution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" style={{ opacity: 0 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50" style={{ opacity: 0 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <p className="text-gray-800 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ opacity: 0 }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
