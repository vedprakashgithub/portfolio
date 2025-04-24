export const projects = [
  {
      id: 1,
      title: 'AI-Based Traffic Sign Recognition System',
      description: 'A deep learning-powered traffic sign recognition system using TensorFlow and OpenCV for real-time road sign detection and classification.',
      detailed_description: 'This project presents an intelligent Traffic Sign Recognition (TSR) system using cutting-edge deep learning techniques. Developed with TensorFlow and OpenCV, the system is capable of detecting and classifying road signs in real-time, enabling applications in autonomous driving and driver assistance.\n\nKey features include:\n- Custom-trained CNN model using GTSRB dataset for high-accuracy sign classification\n- Real-time video stream analysis and processing\n- RESTful API for easy integration with navigation systems or autonomous vehicles\n- Intuitive web interface for visualizing recognized signs and system performance\n\nThe system achieves over 97% accuracy on the test dataset and maintains real-time performance at up to 30 FPS on standard hardware.',
      thumbnail: 'https://images.unsplash.com/photo-1723986645537-4c4bfa0453d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMHNpZ24lMjByZWNvZ25pdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      image: 'https://images.unsplash.com/photo-1723986645537-4c4bfa0453d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMHNpZ24lMjByZWNvZ25pdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      category: 'Artificial Intelligence',
      tags: ['TensorFlow', 'OpenCV', 'Deep Learning', 'Traffic Sign Recognition', 'Python'],
      date: 'December 2023',
      client: 'University Research Lab',
      role: 'Lead Developer',
      gallery: [
        'https://images.unsplash.com/photo-1723986645537-4c4bfa0453d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMHNpZ24lMjByZWNvZ25pdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1736921793420-35acebc51930?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYWZmaWMlMjBzaWduJTIwcmVjb2duaXRpb258ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1678387496268-a970e2e7cf3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhZmZpYyUyMHNpZ24lMjByZWNvZ25pdGlvbnxlbnwwfDB8MHx8fDA%3D',
      ]
    },

    {
      id: 2,
      title: 'Enterprise Task Management Platform',
      description: 'A powerful task management solution developed using a modern tech stack to enhance enterprise productivity and collaboration.',
      detailed_description: `AVNV Infotech designed and delivered a cloud-native enterprise task management platform with a full-featured dashboard, secure contact forms, career management, and an integrated blog engine. Built on microservices and containerized infrastructure, the solution offers modular scalability and robust security.
    
    Key implementations:
    - Frontend using React and React Router 7.4.0 with Redux state management
    - UI with Bootstrap 5.3.2 and Tailwind CSS-like styling through utility classes
    - Visual effects using Swiper, AOS, Isotope, and Lightbox for dynamic UI/UX
    - Form security with Google reCAPTCHA integration
    - Real-time data management using Firebase (Auth + Firestore)
    - Integrated Google Maps API for location features
    - SEO-optimized and lightweight deployment with Cloudflare CDN, Cloudinary, jsDelivr, and cdnjs
    - Backend services containerized with Docker and orchestrated via Kubernetes
    - CI/CD automation with GitHub Actions and deployment on Hostinger's LiteSpeed servers
    - Monitoring with Prometheus and Grafana
    - Business communications via WhatsApp Chat and Collect.chat for live support
    - Media and asset delivery optimized via Cloudinary
    
    Modules:
    - Admin Dashboard with access control
    - Dynamic Blog System with category and tag filtering
    - Career Page with application submission and resume uploads
    - Contact Form with real-time validation and backend routing`,
      thumbnail: './avnv.JPG',
      image: './avnv.JPG',
      category: 'Web Development',
      tags: [
        'React', 'Redux', 'Firebase', 'Kubernetes', 'Docker', 'Cloudinary',
        'reCAPTCHA', 'React Router', 'Bootstrap', 'Swiper', 'Isotope', 'AOS',
        'Lightbox', 'Prometheus', 'Grafana', 'Cloudflare', 'Hostinger'
      ],
      date: 'March 2024',
      client: 'AVNV Infotech',
      role: 'Full-Stack & DevOps Engineer',
      link: 'https://avnvinfotech.com',
      gallery: [
        '/avnv.JPG',
        '/adminlogin.JPG',
        '/blog.JPG',
      ]
    },
    
  
    {
      id: 3,
      title: 'Full-Stack Institute Management Website',
      description: 'A comprehensive institute management system with an interactive dashboard, built using React, Node.js, and MongoDB, integrated with modern UI frameworks and deployment technologies.',
      detailed_description: 'Developed a full-stack institute management web application designed for educational institutions to efficiently manage students, courses, staff, and schedules. The system features a responsive and dynamic dashboard with role-based access, ensuring an intuitive experience for admins, faculty, and students.\n\nCore Features:\n- Fully responsive UI with Tailwind CSS, Radix UI, Lucide icons, and Framer Motion animations\n- React with Redux and React Router v6 for smooth navigation and global state management\n- Role-based dashboards for Admin, Faculty, and Students\n- Course & Batch Management, Attendance Tracking, Fee Collection, and Notifications\n- Live chat and announcement system powered by WebSocket\n- Reports and analytics dashboard for monitoring progress and activity\n- Authentication with JWT and secure session management\n- Hosted on Hostinger with LiteSpeed web server and HTTP/3 support for high-speed performance',
      thumbnail: './SRS.JPG',
      image: './SRS.JPG',
      category: 'Web Development',
      tags: [
        'React', 'Redux', 'React Router',
        'Tailwind CSS', 'Radix UI', 'Lucide', 'Framer Motion',
        'Node.js', 'MongoDB', 'JWT', 'WebSocket',
        'LiteSpeed', 'HTTP/3', 'Hostinger'
      ],
      date: 'January 2024',
      client: 'Educational Training Center',
      role: 'Full Stack Developer',
      link: 'https://srscomputer.com', // Replace with actual live site URL
      gallery: [
        '/SRS.JPG',
        '/student.JPG',
        '/addmision.JPG',
      ]
    },

    {
      id: 4,
      title: 'Full-stack E-commerce app with auth and payments.',
      description: 'A modern e-learning platform built with React, and MongoDB, featuring real-time collaboration, secure payments, and AI-powered content recommendations.',
      detailed_description: 'Developed a full-featured e-learning platform that combines modern frontend and backend technologies with intelligent learning support. The system delivers a responsive and secure online education experience with personalized learning paths and real-time collaboration tools.\n\nTechnical highlights:\n- **Frontend:** React with Next.js for server-side rendering, enhanced by Tailwind CSS and Goober for styling\n- **Routing & State Management:** React Router v6 and Redux for efficient navigation and global state\n- **Backend:** Node.js with MongoDB for scalable data handling\n- **Real-Time Collaboration:** Socket.io for live sessions, messaging, and collaborative document editing\n- **AI Features:** Collaborative filtering-based content recommendation system\n- **Authentication & Security:** JWT-based login, HSTS for HTTP security, and role-based access control\n- **Media & Assets:** Cloudinary integration for optimized digital asset management\n- **Payments:** Stripe and BitPay integration for secure and flexible transactions\n- **Deployment & Infrastructure:** Deployed via Vercel with global CDN support for optimized performance',
      thumbnail: './click.JPG',
      image: './click.JPG',
      category: 'Web Development',
      tags: [
        'React', 'Redux', 'React Router',
        'Node.js', 'MongoDB', 'Socket.io',
        'Tailwind CSS', 'Goober', 'Cloudinary',
        'JWT', 'HSTS', 'CDN', 'Stripe', 'BitPay', 'Vercel'
      ],
      date: 'October 2023',
      client: 'Educational Institution',
      role: 'Full Stack Developer',
      link:'https://clickitecommerceweb.vercel.app',
      gallery: [
        '/click.JPG',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=1000',
      ]
    },
    
   
    
    {
      id: 5,
      title: 'Digital Field ',
      description: 'A cutting-edge digital dashboard solution offering predictive analytics and interactive visualizations for field operations.',
      detailed_description: `This dashboard system was engineered for digital field service companies aiming to optimize operations with real-time data insights. The solution integrates seamlessly with field data pipelines and provides predictive analytics for decision-making.
    
    Key highlights:
    - Built with **React.js** and **Redux** for real-time data handling
    - Integrated **React Router 7.0.1** for seamless navigation
    - Enhanced UI/UX with **Framer Motion** animations
    - Clean, scalable styling via **Tailwind CSS**
    - Visualized predictive trends using **D3.js**
    - SVG icon support via **Lucide**
    - Live chat support with **Collect.chat**
    - Fast deployment and hosting on **Vercel**
    
    Ideal for:
    - Field service companies
    - Remote analytics teams
    - Operations intelligence platforms
    
    This project showcases AVNV Infotech’s capability to deliver high-performance web applications tailored for field operations and digital analytics.`,
      thumbnail: './digihome.JPG',
      image: './digihome.JPG',
      category: 'Web Development',
      tags: [
        'React', 'Redux', 'React Router 7', 'Tailwind CSS', 'Framer Motion',
        'D3.js', 'Lucide Icons', 'Collect.chat', 'Vercel'
      ],
      date: 'February 2024',
      client: 'FieldTech Solutions',
      role: 'Lead Frontend Developer',
      link: 'https://www.mydigitalfield.in',
      gallery: [
        '/digihome.JPG',
        '/case.JPG',
        '/contact.JPG',
      ]
    },
    
  {
    id: 6,
    title: 'Decentralized Car Marketplace Platform',
    description: 'A blockchain-integrated car marketplace application enabling secure, transparent vehicle transactions and listings.',
    detailed_description: `Developed a feature-rich decentralized car marketplace application that combines Web3 innovation with a modern frontend architecture. This platform empowers users to list, buy, and verify cars with complete transaction transparency via blockchain. The interface ensures seamless user experience across devices, powered by leading-edge UI tools and authentication mechanisms.
  
  Key implementations:
  - Frontend built with React.js and React Router v6
  - State management using Redux Toolkit for scalable logic handling
  - UI/UX designed using Tailwind CSS, Radix UI, and shadcn/ui components
  - Secure user authentication with Clerk (sign-up, login, session handling)
  - Blockchain layer via Ethereum and smart contracts in Solidity
  - Web3.js for contract interaction and transaction handling
  - IPFS for decentralized storage of car documents and metadata
  - MetaMask integration for wallet-based transactions
  - Hosted on Vercel with edge functions and HSTS enforcement for security
  
  Modules:
  - Car Listing Dashboard with filtering, sorting, and real-time updates
  - Admin Panel for approving or flagging listings
  - Transaction verification via MetaMask
  - User Profiles with ownership history
  - Document uploads to IPFS for verified car details`,
    thumbnail: './car.JPG',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    tags: [
      'React', 'Redux', 'React Router', 'Tailwind CSS', 'shadcn/ui', 'Radix UI',
      'Clerk', 'Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask', 'Vercel', 'HSTS'
    ],
    date: 'April 2024',
    client: 'AutoChain Marketplace',
    role: 'Full-Stack Blockchain Developer',
    link: 'https://carmarketplace-one.vercel.app',
    gallery: [
      '/car.JPG',
      '/list.JPG',
      '/feature.JPG',
    ]
  },
  
];

export const featuredProjects = projects.slice(0, 3);

export const categories = ['All', 'Artificial Intelligence', 'Web Development', 'Data Science', 'Blockchain'];

export const skills = [
  { name: 'Machine Learning & AI', percentage: 90 },
  { name: 'Full Stack Development', percentage: 85 },
  { name: 'Python Programming', percentage: 90 },
  { name: 'Database Management', percentage: 85 },
  { name: 'Cloud Computing', percentage: 80 },
  { name: 'DevOps & CI/CD', percentage: 75 },
];

export const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'University Institute of Technology',
    period: '2022 - Present',
    description: 'Specializing in Artificial Intelligence and Web Development with focus on building scalable applications and implementing machine learning solutions.',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'State College of Computer Science',
    period: '2019 - 2022',
    description: 'Graduated with distinction, focusing on computer science fundamentals, data structures, and software development methodologies.',
  },
  {
    degree: 'Advanced Certification in AI & ML',
    institution: 'Tech Institute',
    period: '2023',
    description: 'Intensive program covering advanced machine learning algorithms, neural networks, and practical implementation of AI solutions.',
  },
];