
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Award, Briefcase, GraduationCap } from "lucide-react";
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
      title: "Medical Store",
      description: "Streamlined communication between doctors, chemists, and patients using HTML, CSS, Bootstrap, and Django. Improved operational efficiency and reduced paperwork by 200%.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Play Store Observation",
      description: "Analyzed user behavior and app download patterns using Python, Data Analysis, Pandas, Numpy, and Matplotlib. Observed reactions of 10% of users.",
      image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "LNM-services",
      description: "Developed an LNM-shop platform for students with product listing and registration features. Implemented LNM-taxi feature for facilitating student-partner connections.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const skills = [
    "Spring Boot",
    "Angular",
    "Kafka",
    "AWS",
    "SQL",
    "Java",
    "Python",
    "C++",
    "REST API",
    "Cloud Computing",
    "CI/CD",
    "Serverless Computing",
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Rishi Raj Yadav</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Software Development Engineer
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
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <GraduationCap className="w-6 h-6 text-gray-700" />
              <div>
                <h3 className="text-xl font-semibold">B.Tech in Computer Science and Engineering</h3>
                <p className="text-gray-600">LNMIIT • Aug '19 - Jun '23 • CGPA: 7/10.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-gray-700" />
              <div>
                <h3 className="text-xl font-semibold">Software Development Engineer</h3>
                <p className="text-gray-600">BNY • Jan '23 - Present • Pune</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="w-6 h-6 text-gray-700" />
              <div>
                <h3 className="text-xl font-semibold">Achievements</h3>
                <p className="text-gray-600">Solved 700+ DSA questions on Leetcode and 600+ on other platforms</p>
                <p className="text-gray-600">3rd place in BNY hackathon out of 20 teams</p>
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
              href="mailto:yadavrishiraj976@gmail.com"
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
