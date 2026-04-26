import { motion } from 'framer-motion';
import { UserCircle, GraduationCap, Briefcase, Award, Heart, Code, Brain, Shield, Dna, BookOpen, Plane, Gamepad2, Film, Download } from 'lucide-react';
import { experiences, education, achievements, interests, hobbies } from '../data/portfolioData';

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
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ElementType } = {
    Code,
    Brain,
    Shield,
    Dna,
    BookOpen,
    Plane,
    Gamepad2,
    Film
  };
  const Icon = icons[iconName] || Code;
  return <Icon className="w-5 h-5" />;
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600">My Introduction & Personal Journey</p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-30 transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Images/img2.jpeg"
                  alt="Yash Raj"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Personal Intro */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600">
                <UserCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Who Am I?</h3>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As a passionate <span className="text-gray-900 font-semibold">Computer Science Engineer</span>, I'm captivated by the transformative power of data science and artificial intelligence. The ability to extract meaningful insights from vast amounts of data and use them to solve real-world problems is what drives my pursuit of a career in this field.
              </p>
              <p>
                My journey into data science began with a simple curiosity about how technology could be leveraged to make better decisions. As I delved deeper, I realized that data science offers endless possibilities to innovate and create positive change across various industries.
              </p>
              <p>
                What motivates me most is the potential to contribute to groundbreaking discoveries and innovations that can improve lives and shape the future. I'm excited by the rapid advancements in AI and how they're revolutionizing the way we interact with technology.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Background & Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Background */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Background</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Innovative Computer Science Engineer specializing in machine learning and data science. Passionate about leveraging technical skills in AI and data analytics to solve complex problems. Extensive experience in developing advanced machine learning models and deploying them across various industries.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Skilled in collaborating with multidisciplinary teams to drive impactful projects from concept to completion. Continuously seeking opportunities to enhance technical knowledge and stay at the forefront of technological advancements.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10 text-green-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-sm text-blue-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills & Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Skills */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-600">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Skills</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Programming Languages (5+ years)</h4>
                <p className="text-sm text-gray-600">Python, C, C++, R, JavaScript, SQL</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">AI & Data Science (2+ years)</h4>
                <p className="text-sm text-gray-600">Machine Learning, Deep Learning, NN, GenAI, Data Analysis, Visualization</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Libraries & Frameworks</h4>
                <p className="text-sm text-gray-600">Pandas, NumPy, TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, Flask</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Tools & Technologies</h4>
                <p className="text-sm text-gray-600">Git/GitHub, Docker, AWS, Azure, GCP, MLflow, MySQL, PowerBI</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-500" />
                  <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-sm text-indigo-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                  {edu.details && <p className="text-sm text-gray-600 mt-1">{edu.details}</p>}
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Achievements</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Interests & Hobbies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Interests */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Interests</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-600">
                    {getIcon(interest.icon)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{interest.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hobbies</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600">
                    {getIcon(hobby.icon)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{hobby.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/cv.html"
            className="glass-btn-secondary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Curriculum Vitae
          </a>
        </motion.div>
      </div>
    </section>
  );
}
