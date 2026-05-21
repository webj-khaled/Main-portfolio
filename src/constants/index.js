import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";
import project12 from "../assets/projects/Project-12.png";
import project13 from "../assets/projects/Project-13.png";


export const HERO_CONTENT = `I create full-stack products, AI workflows, and scientific visuals that turn complex ideas into usable systems. My work sits where product engineering, biomedical science, machine learning, and creative execution meet.`;

export const ABOUT_TEXT = `My background connects Biomedical Engineering, Medical Biology, full-stack development, AI/ML, bioinformatics, and scientific visualization. I look for projects where the interface, the data, and the real-world decision all have to fit together.`;

export const EXPERIENCES = [
  {
    year: "03/2025 - 04/2026",
    role: "Student Assistant",
    company: "University of Salzburg",
    description: `Worked as a student assistant in Medical Biology, creating detailed 3D structures and scientific illustrations using Adobe Illustrator and Blender. Developed didactic visuals for teaching that improved understanding of complex biological concepts. Collaborated closely with the professor, and the produced illustrations were successfully adopted as course materials.`,
    technologies: ["Adobe Illustrator", "Blender", "3D Modeling", "Scientific Illustration"],
  },

  {
    year: "01/2025 - Present",
    role: "Full-Stack Developer",
    company: "Freelance",
    description: `Created full-stack web and mobile applications for real client and event use cases, including authentication, admin dashboards, file uploads, and Stripe payments with React, Next.js, React Native, and Node.js/NestJS. Delivered end-to-end product workflows from requirements and data modeling to API design, debugging, testing, deployment, and cloud/service integrations (AWS, Azure, Supabase, Appwrite). Developed and integrated ML components in Python/PyTorch for data-driven features, including cell-type classification from gene expression data and protein mutation/stability prediction.`,
    technologies: ["React", "Next.js", "React Native", "Node.js", "NestJS", "PostgreSQL", "Stripe", "AWS", "Azure", "Supabase", "Appwrite", "Python", "PyTorch"],
  },

  {
    year: "06/2024 - 08/2024",
    role: "Bioinformatics Intern",
    company: "University of Salzburg",
    description: `Developed and implemented machine learning models with PyTorch and TensorFlow to analyze large-scale genomic datasets, identifying potential mutations with up to 95% accuracy. Collaborated with interdisciplinary teams to integrate biological data into computational models, improving predictive performance by 20%. Applied AI methods including neural networks and deep learning for protein structure prediction, increasing processing speed by 30% and accuracy by 25%.`,
    technologies: ["Python", "PyTorch", "TensorFlow", "Deep Learning", "Bioinformatics"],
  },
  {
    year: "01/2022 - 09/2022",
    role: "Data Analyst",
    company: "Berlitz, Sao Paulo, Brazil",
    description: `Analyzed sales and customer datasets (1,000+ records) and produced actionable insights that improved marketing strategy and increased customer engagement by 10%. Led data collection, cleaning, and standardization of 10,000+ data points per week, improving model reliability by 15%. Created a technical improvement roadmap that reduced sales-data noise by 20% and improved forecasting accuracy by 5%.`,
    technologies: ["Python", "PostgreSQL", "Matplotlib", "Power BI", "Data Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "GNNv3 Online - AI/ML Prediction Workbench",
    image: project13,
    description:
      "Online AI/ML workbench that turns a PyTorch FNN regression workflow into a deployed prediction tool. The interface lets users inspect the active model, prepare train/test commands, upload TSV or CSV feature data, run predictions through a FastAPI backend, preview outputs, and download prediction results. Deployed with Next.js, FastAPI, ONNX Runtime, Docker Compose, and Caddy on live.esnsalzburg.org.",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "PyTorch",
      "ONNX Runtime",
      "Docker",
      "Caddy"
    ],
    github: "https://live.esnsalzburg.org/",
  },
  {
    title: "Shopping List - Symfony Full-Stack Web App",
    image: project12,
    description:
      "Full-stack shopping-list application with a Symfony 8 backend, Twig dashboard UI, MySQL database, and Docker deployment. Includes optional username sessions, public and private shopping lists, list and item CRUD, search and ownership filters, uploaded cover images, Turbo frame updates, Stimulus interactions, and REST API endpoints for assignment-style list management. Deployed on list.esnsalzburg.org.",
    technologies: [
      "Symfony",
      "PHP",
      "Twig",
      "Doctrine",
      "MySQL",
      "Turbo",
      "Docker"
    ],
    github: "https://list.esnsalzburg.org/",
  },
  {
    title: "ESN Salzburg Shop - Production E-Commerce Platform",
    image: project11,
    description:
      "Production e-commerce platform for ESN Salzburg merchandise with a Next.js storefront and NestJS API. Includes authentication and password recovery, color/size-aware cart flow, Stripe checkout with delivery metadata, customer/admin order history, and order-completion emails. Deployed with Docker Compose, PostgreSQL, and Caddy reverse proxy on shop.esnsalzburg.org.",
    technologies: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "AWS",
      "Tailwind CSS"
    ],
    github: "https://shop.esnsalzburg.org/",
  },

  {
    title: "ESN Salzburg Budapest Trip Registration Portal",
    image: project10,
    description:
      "Trip registration and payment portal for a 3-day winter Budapest event (Dec 5-7, 2025). Includes full itinerary and inclusions, multi-step attendee form (personal/travel preferences), Stripe checkout with tiered pricing, and Supabase-backed registration storage with document upload. CODE IS CONFIDENTIAL, AVAILABLE UPON REQUEST.",
    technologies: ["React", "Vite", "Stripe", "Supabase", "Tailwind CSS"],
    github: "https://esn-salzburg-budapest-trip.netlify.app/",
  },
  {
    title: "ESN Salzburg FC26 FIFA Tournament Registration",
    image: project9,
    description:
      "Landing and registration portal for an FC26 tournament, including event details, rule set, prize breakdown, and limited-slot signup flow. Features Stripe checkout with dual pricing (€5/€10), optional membership-card upload, and Supabase persistence for participant records. CODE IS CONFIDENTIAL, AVAILABLE UPON REQUEST.",
    technologies: ["React", "Vite", "Stripe", "Supabase", "Tailwind CSS"],
    github: "https://esn-salzburg-fc26.netlify.app/",
  },
  {
    title: "ESN Card Online Store",
    image: project8,
    description: "An e-commerce platform for selling ESN (Erasmus Student Network) cards to international students. The website features product customization options, secure payment processing, and automatic digital card delivery. Includes admin dashboard for order management and analytics. CODE IS CONFIDENTIAL, AVAILABLE UPON REQUEST.",
    technologies: ["React", "Vite", "Stripe", "Supabase", "Tailwind CSS"],
    github: "https://card.esnsalzburg.org/"
  },
  {
    title: "Munich Trip Registration Portal",
    image: project7,
    description: "A registration and payment portal for organized trips to Munich. Features event creation, participant registration, payment processing, and automatic confirmation emails. Includes admin panel for managing participants, generating reports, and tracking payments. CODE IS CONFIDENTIAL, AVAILABLE UPON REQUEST.",
    technologies: ["React", "Vite", "Stripe", "Supabase", "Node.js"],
    github: "https://esn-salzburg-munich-trip.netlify.app/"
  },


  {
    title: "FilmFlow - Movie Discovery App",
    image: project5,
    description: "A React Native movie discovery application that allows users to browse trending movies, view details, watch trailers, and create personalized watchlists. Features user authentication, movie recommendations based on viewing history, and integration with movie databases for up-to-date content.",
    technologies: ["React Native", "Tailwind CSS", "Supabase", "Appwrite", "Stripe"],
    github: "https://github.com/webj-khaled/MOvie-app"
  },
  {
    title: "TasteBuds - Food Delivery App",
    image: project6,
    description: "A food delivery application made with React Native that connects users with local restaurants. Features include menu browsing, customized orders, real-time order tracking, secure payments, and restaurant ratings. Users can save favorite orders and restaurants for quick reordering. CODE IS CONFIDENTIAL, AVAILABLE UPON REQUEST.",
    technologies: ["React Native", "Tailwind CSS", "Supabase", "Appwrite", "Stripe"],
    github: "https://github.com/webj-khaled/TasteBuds-Food-App"
  },


  {
    title: "Protein Mutations Predictor",
    image: project1,
    description: "This project develops a machine learning model using PyTorch to predict continuous target variables for protein mutations. It allows fine-tuning of hyperparameters, supports both numerical and categorical features, and uses techniques like K-fold cross-validation. The model tracks and saves best-performing configurations and includes SHAP visualizations to explain predictions, making it applicable in bioinformatics and healthcare for analyzing protein mutation effects.",
    technologies: ["Python", "PyTorch", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/webj-khaled/Genetic-mutations-detector"
  },
  {
    title: "Car Price Prediction",
    image: project2,
    description: "This project focuses on predicting car prices using two models: Linear Regression and Decision Tree Regression. The dataset is validated, transformations like log transformation on price and encoding of categorical variables are applied. Exploratory analysis is performed to uncover relationships between variables. The Decision Tree model outperforms the Linear Regression model based on R-squared and RMSE metrics, making it more suitable for deployment.",
    technologies: ["Python", "Pandas", "Seaborn", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/webj-khaled/Used-cars-market-analysis"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    github: "https://github.com/webj-khaled/Main-portfolio"
  },
  {
    title: "Automated Email Processing System",
    image: project4,
    description: "This project automates the classification and processing of customer emails using OpenAI’s GPT-3 API. Emails are categorized as either order requests or product inquiries, and relevant product details and quantities are extracted from orders. After checking stock availability, the system updates the stock database and generates email responses based on order fulfillment status. For inquiries, responses are generated using the product catalog descriptions. The project integrates Excel files to handle data and automates the entire process, improving efficiency in customer service operations.",
    technologies: ["Python", "OpenAI GPT-3", "Pandas", "Excel", "gspread"],
    github: "https://github.com/webj-khaled/Solving-business-problems-with-AI"
  },
];


export const CONTACT = {
  address: " 5020, Salzburg, Austria ",
  phoneNo: "+43 676 3817 666 ",
  email: "elfahamkhaled65@gmail.com",
};

