import type { SiteDataInput } from '../types/site';

const icons = {
  github: {
    name: 'GitHub',
    viewBox: '0 0 24 24',
    path:
      'M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.36-1.17-3.36-1.17-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.1-.65.35-1.09.63-1.34-2.21-.25-4.53-1.11-4.53-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.33 4.7-4.55 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.59.69.48A10 10 0 0 0 12 2z',
  },
  linkedin: {
    name: 'LinkedIn',
    viewBox: '0 0 24 24',
    path:
      'M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.52-.98 1.8-2.01 3.7-2.01 4 0 4.75 2.64 4.75 6.08V21h-4v-5.2c0-1.24-.02-2.83-1.72-2.83-1.73 0-2 1.35-2 2.74V21h-4V9z',
  },
  mail: {
    name: 'Email',
    viewBox: '0 0 24 24',
    path: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2 8 5 8-5',
  },
  instagram: {
    name: 'Instagram',
    viewBox: '0 0 24 24',
    path:
      'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6-.75a1.25 1.25 0 1 1-1.25-1.25A1.25 1.25 0 0 1 18 6.75z',
  },
};

export const siteData: SiteDataInput = {
  seo: {
    title: 'Leandro Diaz Quinteros | Portafolio',
    description:
      'Portafolio profesional de Leandro Diaz Quinteros, estudiante de Desarrollo de Software con foco en aprendizaje continuo, crecimiento tecnico y futuro impacto.',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mi', href: '#sobre-mi' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    name: 'Leandro Diaz Quinteros',
    role: 'Estudiante de Tecnico Superior en Desarrollo de Software',
    summary:
      'Me enfoco en construir bases solidas en desarrollo web y software. Busco crecer con desafios reales, aportar con responsabilidad y aprender todos los dias.',
    image: {
      src: '/images/Foto.png',
      alt: 'Foto de perfil de Leandro Diaz Quinteros',
    },
    ctaPrimary: {
      label: 'Contactar',
      href: '#contacto',
    },
    ctaSecondary: {
      label: 'Descargar CV',
      href: '/CV_Leandro_Diaz_Quinteros.pdf',
      download: true,
    },
  },
  about: {
    title: 'Sobre mi',
    subtitle: 'Construyendo una base tecnica solida con foco en aprendizaje y crecimiento.',
    items: [
      {
        title: 'Formacion actual',
        description:
          'Estudiante de Tecnico Superior en Desarrollo de Software, con enfoque en buenas practicas y pensamiento logico.',
      },
      {
        title: 'Interes profesional',
        description:
          'Me atrae el desarrollo web moderno, la arquitectura limpia y el trabajo colaborativo orientado a producto.',
      },
      {
        title: 'Objetivo',
        description:
          'Sumar experiencia real, aportar valor y evolucionar hacia un perfil full-stack confiable y versatil.',
      },
    ],
  },
  tech: {
    title: 'Tecnologias',
    subtitle: 'Herramientas y lenguajes que uso para aprender, practicar y construir.',
    carousel: [
      { name: 'HTML', src: '/tech/html.svg' },
      { name: 'CSS', src: '/tech/css.svg' },
      { name: 'JavaScript', src: '/tech/javascript.svg' },
      { name: 'TypeScript', src: '/tech/typescript.svg' },
      { name: 'Astro', src: '/tech/astro.svg' },
      { name: 'TailwindCSS', src: '/tech/tailwind.svg' },
      { name: 'Python', src: '/tech/python.svg' },
      { name: 'MySQL', src: '/tech/mysql.svg' },
      { name: 'SQLite', src: '/tech/sqlite.svg' },
      { name: 'Git', src: '/tech/git.svg' },
      { name: 'GitHub', src: '/tech/github.svg' },
      { name: 'VS Code', src: '/tech/vscode.svg' },
    ],
    categories: [
      {
        title: 'Frontend',
        items: [
          { name: 'HTML', abbr: 'HTML', tone: 'amber' },
          { name: 'CSS', abbr: 'CSS', tone: 'sky' },
          { name: 'JavaScript', abbr: 'JS', tone: 'amber' },
          { name: 'TypeScript', abbr: 'TS', tone: 'cyan' },
          { name: 'Astro', abbr: 'AS', tone: 'rose' },
          { name: 'TailwindCSS', abbr: 'TW', tone: 'emerald' },
        ],
      },
      {
        title: 'Backend',
        items: [{ name: 'Python', abbr: 'PY', tone: 'emerald' }],
      },
      {
        title: 'Bases de Datos',
        items: [
          { name: 'MySQL', abbr: 'SQL', tone: 'cyan' },
          { name: 'SQLite', abbr: 'SQL', tone: 'violet' },
        ],
      },
      {
        title: 'Herramientas',
        items: [
          { name: 'Git', abbr: 'GIT', tone: 'rose' },
          { name: 'GitHub', abbr: 'GH', tone: 'violet' },
          { name: 'VS Code', abbr: 'VSC', tone: 'sky' },
        ],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Espacio preparado para mostrar trabajos reales a medida que avance mi carrera.',
    items: [
      {
        title: 'Titulo del proyecto',
        description: 'Descripcion breve del proyecto, tecnologias usadas y objetivo del mismo.',
        status: 'Terminado',
        tag: 'Producto personal',
        timeline: '2026',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: 'Disponible para colaborar, aprender y sumar experiencia profesional.',
    items: [
      {
        label: 'Email',
        value: 'lean92284@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lean92284@gmail.com',
        icon: icons.mail,
      },
      {
        label: 'GitHub',
        value: 'github.com/LeanNDQ',
        href: 'https://github.com/LeanNDQ',
        icon: icons.github,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/Leandro-Diaz-Quinteros',
        href: 'https://www.linkedin.com/in/leandro-diaz-quinteros-902402356/',
        icon: icons.linkedin,
      },
      {
        label: 'Instagram',
        value: '@leandrodiaz27',
        href: 'https://www.instagram.com/leandrodiaz27/',
        icon: icons.instagram,
      },
    ],
  },
};
