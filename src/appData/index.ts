// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
  LLMIcon,
  RAGIcon,
  AIIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 0,
    title: 'AI Legal Assistant',
    shortDescription:
      'A professional AI-powered legal assistant for Slovak and EU law. Provides precise legal analysis based on up-to-date legislation, court rulings, and expert commentaries. Built with Node.js, Next.js, Qdrant, and LangChain.',
    cover:
      'https://caplak.sk/_next/image?url=%2Fimages%2Fai-lawyer.png&w=384&q=75',
    livePreview: 'https://caplak.sk/',
    type: 'Main Project ⭐',
    siteAge: 'Live',
  },
  {
    priority: 1,
    title: 'Project Alpha',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: '1 month old',
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
  {
    key: 'llm',
    icon: LLMIcon,
    title: 'LLM models',
    shortDescription: 'Implementation and integration of Large Language Models (LLM) for your projects.',
  },
  {
    key: 'rag',
    icon: RAGIcon,
    title: 'RAG',
    shortDescription: 'Retrieval-Augmented Generation: connecting AI with your data for more accurate responses.',
  },
  {
    key: 'ai',
    icon: AIIcon,
    title: 'AI',
    shortDescription: 'Custom design and development of AI solutions tailored to your needs.',
  },
  {
    key: 'js',
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    key: 'react',
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    key: 'node',
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    key: 'next',
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    key: 'ts',
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    key: 'tailwind',
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'Projects', href: '#projects', key: 'projects' },
  { title: 'Testimonials', href: '#testimonials', key: 'testimonials' },
  { title: 'Services', href: '#services', key: 'services' },
  { title: 'Contact', href: '#contact', key: 'contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['EN', 'SK']
