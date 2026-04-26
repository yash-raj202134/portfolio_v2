export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  sourceLink: string;
  detailsLink: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

export interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  experience: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GeoStitch — Drone to GeoTIFF Pipeline",
    description: "End-to-end pipeline converting georeferenced drone video into stitched GeoTIFF maps using SIFT feature matching, RANSAC homography, and GCP-based georeferencing.",
    image: "/Images/project-images/stitched_result.png",
    category: "machine-learning",
    sourceLink: "https://github.com/yash-raj202134/GeoStitch",
    detailsLink: "https://yash-raj202134.github.io/"
  },
  {
    id: 2,
    title: "TalentOptimize-AI-Powered-Recruitment-Solutions",
    description: "Leveraging Python libraries and algorithms to optimize the hiring process and revolutionize job placement strategies with machine learning insights.",
    image: "/Images/project-images/HRrec.jpg",
    category: "data-analysis",
    sourceLink: "https://github.com/yash-raj202134/TalentOptimize-AI-Powered-Recruitment-Solutions",
    detailsLink: "https://yash-raj202134.github.io/TalentOptimize-AI-Powered-Recruitment-Solutions/"
  },
  {
    id: 3,
    title: "RecommendaFy-Project",
    description: "An e-commerce recommendation system using Python Flask and machine learning to provide personalized product recommendations to users.",
    image: "/Images/project-images/ecomrec.jpg",
    category: "machine-learning",
    sourceLink: "https://github.com/yash-raj202134/RecommendaFy-Project",
    detailsLink: "https://yash-raj202134.github.io/RecommendaFy-Project/"
  }
];

export const allProjects: Project[] = [
  ...projects,
  {
    id: 4,
    title: "Invoice Processing System",
    description: "Automated invoice processing using AI and OCR technologies for efficient document handling.",
    image: "/Images/project-images/invoice.webp",
    category: "machine-learning",
    sourceLink: "https://github.com/yash-raj202134",
    detailsLink: "https://yash-raj202134.github.io/"
  },
  {
    id: 5,
    title: "Kidney Disease Prediction",
    description: "Machine learning model to predict kidney disease using medical data and patient records.",
    image: "/Images/project-images/Kidneydisease.png",
    category: "machine-learning",
    sourceLink: "https://github.com/yash-raj202134",
    detailsLink: "https://yash-raj202134.github.io/"
  },
  {
    id: 6,
    title: "Text Summarizer",
    description: "NLP-based text summarization tool that generates concise summaries from long documents.",
    image: "/Images/project-images/TextSummarizer.png",
    category: "nlp",
    sourceLink: "https://github.com/yash-raj202134",
    detailsLink: "https://yash-raj202134.github.io/"
  },
  {
    id: 7,
    title: "PDF Chatbot",
    description: "RAG-based conversational AI that answers questions from PDF documents using LLM technology.",
    image: "/Images/project-images/pdf_chatbot.png",
    category: "nlp",
    sourceLink: "https://github.com/yash-raj202134",
    detailsLink: "https://yash-raj202134.github.io/"
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "India's AI Ambition: Building a Homegrown AI Ecosystem",
    description: "This blog explores India's bold pursuit of building a self-reliant AI ecosystem. From government policies and digital infrastructure to talent development and startups, it highlights the country's progress, real-world impact, and the challenges that still need to be addressed.",
    image: "/Images/blog-images/blog11/titleimage.jpeg",
    date: "Jun 24, 2025",
    link: "blog/Indias_AI_ambition.html"
  },
  {
    id: 2,
    title: "Agentic AI: The Next Evolution in Autonomous Intelligence",
    description: "Agentic AI is a new frontier in autonomous systems, enabling machines to make independent decisions and learn. This blog explores its potential, challenges, and future impact on industries, emphasizing the need for ethical considerations and responsible development.",
    image: "/Images/blog-images/blog10/titleimage.png",
    date: "Apr 01, 2025",
    link: "blog/Agentic_AI_the_next_evolution_in_autonomous_intelligence.html"
  },
  {
    id: 3,
    title: "DeepSeek AI: The Emerging Rival to Big AI Giants",
    description: "DeepSeek AI is revolutionizing the AI industry with cutting-edge technology, efficient architecture, and a bold vision for the future. This blog explores its impact and why it's gaining traction.",
    image: "/Images/blog-images/blog9/deepseek3.webp",
    date: "Feb 19, 2025",
    link: "blog/Deepseek_ai_the_emerging_rival_to_big_ai_giants.html"
  },
  {
    id: 4,
    title: "The Art and Science of Multimodal AI",
    description: "Multimodal AI represents the next frontier in artificial intelligence, combining multiple data types such as text, images, audio, and video into a cohesive framework that enhances machine learning models.",
    image: "/Images/blog-images/blog8/title2.webp",
    date: "Dec 29, 2024",
    link: "blog/The_Art_and_Science_of_Mulimodal_AI.html"
  }
];

export const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "Species Composition Prediction with High Spatial Resolution at Continental Scale Using Remote Sensing",
    description: "The 'Location-based Species Presence Prediction' project aims to enhance species composition prediction using deep learning models and remote sensing data.",
    link: "/files/paper1.pdf"
  },
  {
    id: 2,
    title: "Sleep State Detection Using LSTM",
    description: "Paper focuses on developing models to accurately detect sleep onset and wake phases from wrist worn accelerometer data.",
    link: "/files/paper2.pdf"
  },
  {
    id: 3,
    title: "Number Representation in Computer Systems",
    description: "The paper explores techniques for representing numbers in computer system architecture, including decimal, binary, octal, and hexadecimal systems.",
    link: "/files/paper3.pdf"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Yash is an exceptional developer with a keen eye for detail. His machine learning expertise significantly improved our project outcomes.",
    author: "Afelio Padilla",
    role: "Tech Lead and COO at Ignitus WorldWide Co",
    image: "/Images/testimonial-images/Afelio.jpg"
  },
  {
    id: 2,
    quote: "Working with Yash was a pleasure. His data science skills and ability to explain complex concepts made our collaboration highly productive.",
    author: "Ayush Kumar",
    role: "Student at Central University of Haryana",
    image: "/Images/testimonial-images/Ayush.jpg"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    icon: "Code2",
    experience: "More than 5 years",
    skills: [
      { name: "C/C++", percentage: 80 },
      { name: "Python", percentage: 90 },
      { name: "R", percentage: 70 },
      { name: "JavaScript", percentage: 40 },
      { name: "SQL", percentage: 75 }
    ]
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: "BarChart3",
    experience: "More than 2 years",
    skills: [
      { name: "Data Analysis", percentage: 85 },
      { name: "Visualization", percentage: 80 },
      { name: "Statistical Modeling", percentage: 75 }
    ]
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: "Network",
    experience: "More than 2 years",
    skills: [
      { name: "Supervised Learning", percentage: 80 },
      { name: "Unsupervised Learning", percentage: 75 },
      { name: "Model Deployment", percentage: 70 }
    ]
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    icon: "Brain",
    experience: "More than 2 years",
    skills: [
      { name: "Neural Networks", percentage: 80 },
      { name: "TensorFlow", percentage: 75 },
      { name: "PyTorch", percentage: 70 }
    ]
  },
  {
    id: "frontend",
    name: "Front-End Development",
    icon: "Layout",
    experience: "More than 3 years",
    skills: [
      { name: "HTML", percentage: 75 },
      { name: "CSS", percentage: 60 },
      { name: "JavaScript", percentage: 45 },
      { name: "Bootstrap", percentage: 30 }
    ]
  },
  {
    id: "backend",
    name: "Back-End Development",
    icon: "Server",
    experience: "More than 1 year",
    skills: [
      { name: "Python", percentage: 95 },
      { name: "PHP", percentage: 55 },
      { name: "SQL", percentage: 90 }
    ]
  },
  {
    id: "designing",
    name: "Designing",
    icon: "Palette",
    experience: "More than 2 years",
    skills: [
      { name: "Adobe Photoshop", percentage: 85 },
      { name: "Figma", percentage: 70 },
      { name: "Canva", percentage: 80 }
    ]
  },
  {
    id: "tools",
    name: "Tools",
    icon: "Wrench",
    experience: "More than 4 years",
    skills: [
      { name: "Git & GitHub", percentage: 90 },
      { name: "Linux", percentage: 75 },
      { name: "VS Code", percentage: 95 },
      { name: "Jupyter Lab", percentage: 90 },
      { name: "Docker", percentage: 60 }
    ]
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer – AI/ML",
    company: "ProSkep Solutions LLP",
    period: "Jul 2025 – Present"
  },
  {
    title: "Software Development Engineer",
    company: "AST Consulting",
    period: "Nov 2024 – Mar 2025"
  },
  {
    title: "ML Research Intern",
    company: "Ignitus Labs",
    period: "Feb 2024 – Aug 2024"
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor's of Technology in Computer Science and Engineering",
    institution: "Central University of Haryana",
    period: "2020 - 2024",
    details: "SGPA: 7.86"
  },
  {
    degree: "Intermediate (Class XII PCM)",
    institution: "DAV Public School, Ranchi",
    period: "2018 - 2020",
    details: "Percentage: 89%"
  }
];

export const achievements: string[] = [
  "Qualified UGC NET JRF (2024) - Computer Science and Applications.",
  "Solved 400+ programming problems on LeetCode, ranking in the Top 20% of coders globally.",
  "1st Place in Web Development Competition organized by the university coding club, Bytecode Learners."
];

export const interests = [
  {
    name: "Coding Challenges",
    icon: "Code",
    description: "Enjoy solving coding puzzles and participating in hackathons and competitions hosted worldwide."
  },
  {
    name: "Artificial Intelligence",
    icon: "Brain",
    description: "Passionate about developing and applying AI models to real-world problems."
  },
  {
    name: "Cybersecurity and Digital Forensics",
    icon: "Shield",
    description: "Interested in protecting systems, networks, and data from digital attacks, and investigating cybercrimes."
  },
  {
    name: "Bioinformatics",
    icon: "Dna",
    description: "Explore the intersection of biology and computational analysis for healthcare solutions."
  }
];

export const hobbies = [
  {
    name: "Reading",
    icon: "BookOpen",
    description: "Love reading books on technology, science fiction, and personal development."
  },
  {
    name: "Traveling",
    icon: "Plane",
    description: "Passionate about exploring new places and experiencing different cultures and foods."
  },
  {
    name: "Games",
    icon: "Gamepad2",
    description: "Enjoy playing video games that challenge problem-solving skills and strategic thinking."
  },
  {
    name: "Movies and Music",
    icon: "Film",
    description: "Enjoy watching Sci-fi action-thriller and comedy movies and listening to various genres of music."
  }
];

export const socialLinks = {
  github: "https://github.com/yash-raj202134",
  linkedin: "https://www.linkedin.com/in/yash-raj-8b924a296/",
  instagram: "https://www.instagram.com/raj_yash_00/?hl=en",
  facebook: "https://www.facebook.com/profile.php?id=100007895925153",
  twitter: "https://x.com/YashRaj07880847",
  kaggle: "https://www.kaggle.com/yashraj121",
  leetcode: "https://leetcode.com/u/yash_raj121/",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/yashraj3376"
};

export const contactInfo = {
  email: "yashraj3376@gmail.com",
  phone: "+91 7644849436",
  whatsapp: "+91 7644849436",
  address: "New Delhi, Delhi, India",
  web3formsKey: "4ccdb722-03b1-494b-99ff-388a411d1fe0"
};
