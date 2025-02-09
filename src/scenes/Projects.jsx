import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, github, live }) => {
  const overlayStyles = `absolute shadow-md shadow-[#040c16] h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-dark-grey text-gray-700 font-bold text-lg"
            >
              Code
            </button>
          </a>
        </div>
      </div>
      <img
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 mt-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="font-playfair mt-8 mb-10">Check All My Projects!</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center shadow-md shadow-[#040c16]">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            title="Project 1"
            subtitle="E-Commerce web application using Java, HTML, CSS, JavaScript, JDBC, Servlet, JSP and many more."
            github=""
            live="/"
          />

          <Project
            title="Project 2"
            subtitle="Bank Account handling system using Java."
            github=""
            live="/"
          />

          <Project
            title="Project 3"
            subtitle="A task management system built with React and Node.js."
            github=""
            live="/"
          />

          <Project
            title="Project 4"
            subtitle="Built an engaging and user-friendly responsive blog template using HTML and CSS."
            github=""
            live="/"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
