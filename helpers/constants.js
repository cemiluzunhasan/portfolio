export const SKILLS = [
  { id: 1, name: 'React', percentage: 80 },
  { id: 2, name: 'Vue', percentage: 60 },
  { id: 3, name: 'Javascript', percentage: 80 },
  { id: 4, name: 'SCSS - SASS', percentage: 70 },
  { id: 5, name: 'LESS', percentage: 70 },
  { id: 6, name: 'HTML', percentage: 90 },
  { id: 7, name: 'Flutter', percentage: 40 },
];

export const EXPERIENCES = [
  {
    id: 0,
    companyName: 'Delivery Hero',
    title: 'Software Engineer',
    description: "Software Engineer in Delivery Hero. I'm responsible from Frontend part and maintaining the global Store Management Project",
    startDate: '11.2021',
    endDate: 'Present',
    tag: 'Full Time',
  },
  {
    id: 1,
    companyName: 'Piksel Mutfak',
    title: 'Frontend Engineer',
    description: 'Frontend Engineer in Piksel Mutfak consultancy firm. Worked as an outsource to Anadolu Sigorta and Netax. Did İBB-BİO, İGDAŞ, Asenta, Coach Hero, NeredeKal projects',
    startDate: '02.2021',
    endDate: '11.2021',
    tag: 'Full Time',
  },
  {
    id: 2,
    companyName: 'C-Level',
    title: 'Frontend Developer',
    description: 'C-Level is a consultancy firm which has lots of customer projects. Worked in Europcar, Paket Taxi, T.C Ziraat CV and T.C Ziraat FED projects',
    startDate: '06.2020',
    endDate: '01.2021',
    tag: 'Full Time',
  },
  {
    id: 3,
    companyName: 'Falcon AI',
    title: 'Frontend Developer',
    description: 'Falcon AI is a product company which has a product SenpAI. SenpAI takes your data from various games and process it via AI technologies. When the process is finished, suggestions prepared by AI which makes the user a better player is shown in a dashboard. Worked with Vue JS / Nuxt JS',
    startDate: '08.2018',
    endDate: '02.2019',
    tag: 'Part Time'
  },
  {
    id: 4,
    companyName: 'Monday Hero',
    title: 'Software Developer Intern',
    description: 'Monday Hero is a company which has a product of Monday Hero. Monday Hero is a code generator app that takes designs from Sketch and turns them into iOS and Android Native source cod. Worked with Swift and React JS / Next JS',
    startDate: '06.2018',
    endDate: '07.2018',
    tag: 'Intern',
  },
  {
    id: 5,
    companyName: 'Bitexen',
    title: 'Frontend Engineer',
    description: 'Bitexen is a cryptocurrency platform that lets user to make some trades with cryptocurrency',
    startDate: '02.2018',
    endDate: '01.2018',
    tag: 'Intern',
  },
  {
    id: 6,
    companyName: 'Bilgetech',
    title: 'Long Term Software Developer Intern',
    description: 'Bilgetech is a software development house which has lots of customer projects. Worked in Kolektif House Dashboard (KoPlanet) & Botgate AI projects',
    startDate: '06.2017',
    endDate: '01.2018',
    tag: 'Long-Term Intern',
  },
];

export const EDUCATION = [
  { id: 1, school: 'Marmara University', department: 'Computer Engineering', startDate: '09.2015', endDate: '03.2021', description: 'Computer Engineering Department with 100% English education and 1 year preliminary school' },
  { id: 2, school: 'Pertevniyal High School', department: 'High School', startDate: '09.2011', endDate: '06.2015', description: 'Fatih - Pertevniyal Anatolian High School' },
  { id: 3, school: 'Borusan OTO. Z.N.K Primary School', department: 'Primary School', startDate: '09.2003', endDate: '06.2011', description: 'Fatih - Pertevniyal Anatolian High School' },
];

export const PORTFOLIO = [
  {
    id: 1,
    name: 'Europcar',
    description: "Dashboard of the Europcar which allows you to manage reservations, cars, rates and other things that a car rental company should have",
    technologies: ['React JS', 'Redux', 'DevExtreme', 'Ant Design', 'LESS'],
    link: 'https://ec.clevel.app/',
    images: [
      '/images/Europcar/1.png',
      '/images/Europcar/2.png',
      '/images/Europcar/3.png',
      '/images/Europcar/4.png',
    ],
    color: '#72ce66',
  },
  {
    id: 2,
    name: 'Paket Taxi',
    description: "Dashboard of the Paket Taxi which allows you to manage vehicles, employees, their qualities and contracts etc.",
    technologies: ['React JS', 'Redux', 'Ant Design', 'LESS'],
    link: 'https://app.pt.clevel.app/',
    images: [
      '/images/paket-taxi/1.png',
    ],
    color: '#f2ae2f'
  },
  {
    id: 3,
    name: 'İBB BİO',
    description: "Istanbul Metropolian Munipilacity's employement project that users can apply to different jobs and keep track of the hiring process",
    technologies: ['React JS', 'Redux', 'Ant Design', 'LESS'],
    link: 'https://bio.ibb.istanbul/',
    images: [
      '/images/ibb-bio/1.png',
      '/images/ibb-bio/2.png',
      '/images/ibb-bio/3.png',
      '/images/ibb-bio/4.png',
    ],
    color: '#fb236a'
  },
  {
    id: 4,
    name: 'Asenta',
    description: "Internal project of Anadolu Sigorta that insurers can prepare their profiles and keep track of the products' insurances. Also different users can use this app with different ways like creating policies, make payments and prepare some product packages",
    technologies: ['React JS', 'Redux', 'Ant Design', 'LESS'],
    link: 'Internal',
    images: [
      '/images/asenta/1.png',
      '/images/asenta/2.png',
      '/images/asenta/3.png',
      '/images/asenta/4.png',
      '/images/asenta/5.png',
    ],
    color: '#3a4fbd'
  },
  {
    id: 5,
    name: 'Coach Hero',
    description: "It's a web app that establish a coach-employee relationship which employees can register with their company code. Companies can assign some coaches to employees in order to solve their problems",
    technologies: ['Vue JS', 'Vuex', 'SASS - SCSS', 'Vuetify'],
    link: 'http://app.coachhero.nl/',
    images: [
      '/images/coach-hero/1.png',
      '/images/coach-hero/2.png',
    ],
    color: '#e73c25'
  },
  {
    id: 6,
    name: 'T.C Ziraat Bankası CV',
    description: "It's a web app that holds the CV's of all the employees of TC Ziraat Bank. You can also print the CV's in specified format",
    technologies: ['React JS', 'Redux', 'LESS', 'Ant Design'],
    link: 'http://app.coachhero.nl/',
    images: [
      '/images/ziraat-cv/1.jpg',
      '/images/ziraat-cv/2.jpg',
      '/images/ziraat-cv/3.jpg',
      '/images/ziraat-cv/4.jpg',
    ],
    color: '#d82b32',
  },
  {
    id: 7,
    name: 'MÜİK',
    description: "Marmara University Communication Club's website. It has a dashboard that you can manage the content and a website that shows the specified data",
    technologies: ['React & Next JS', 'Redux', 'LESS', 'Ant Design'],
    link: 'https://muik-website.vercel.app/',
    images: [
      '/images/muik-website/2.png',
      '/images/muik-website/3.png',
      '/images/muik-website/4.png',
      '/images/muik-website/6.png',
      '/images/muik-website/7.png',
    ],
    color: '#df2968'
  },
  {
    id: 8,
    name: 'SenpAI',
    description: "SenpAI is a gaming app that collects data from various games and gives advices which prepared by AI. This project is an app that shows the data via graphics, visualizations and charts",
    technologies: ['Vue JS', 'Nuxt JS', 'SCSS'],
    link: 'https://app.senpai.gg/',
    images: [
      '/images/senpai/1.png',
      '/images/senpai/2.png',
      '/images/senpai/3.png',
    ],
    color: '#022b9f'
  },
  {
    id: 9,
    name: 'SenpAI - DOTA',
    description: "It's the same SenpAI app. But just for a landing page for DOTA 2 version",
    technologies: ['Vue JS', 'Nuxt JS', 'SCSS'],
    link: 'Deleted',
    images: [
      '/images/senpai-dota/1.png',
    ],
    color: '#022b9f'
  },
  {
    id: 10,
    name: 'Vatan Computer',
    description: "A sample Vatan Computer website that is made for Proj-e Software Company",
    technologies: ['HTML', 'SCSS', 'Gulp JS'],
    link: 'https://vatancomputer-homepage.vercel.app/',
    images: [
      '/images/vatan-computer/1.png',
      '/images/vatan-computer/2.png',
    ],
    color: '#013178',
  },
  {
    id: 11,
    name: 'SenpAI - Sample Dashboard',
    description: "A sample SenpAI dashboard that shows a collection of data. It was the task of the Falcon AI",
    technologies: ['Vue JS', 'VueX', 'SCSS'],
    link: 'https://falconai-task.vercel.app',
    images: [
      '/images/senpai-sample-dashboard/1.png',
    ],
    color: '#615cb5'
  },
  {
    id: 12,
    name: 'Monday Hero Landing Page',
    description: "Monday Hero is an app that takes your designs from Sketch App and turns them into a native iOS code. This project is the landing of this app",
    technologies: ['React JS', 'Next JS', 'SCSS'],
    link: 'https://mondayhero.io/',
    images: [
      '/images/monday-hero/1.png'
    ],
    color: '#000'
  },
  {
    id: 13,
    name: 'Filmable',
    description: "It's a film and movie app that shows latest, top-rated, ongoing movies & TV shows",
    technologies: ['React JS', 'Redux', 'SCSS'],
    link: 'Preparing',
    images: [
      '/images/filmable/1.png',
      '/images/filmable/2.png',
      '/images/filmable/3.png',
    ],
    color: '#e50914'
  },
  {
    id: 14,
    name: 'Magrabi',
    description: "It's a brand of sunglasses. Landing page is prepared for the company",
    technologies: ['HTML', 'SCSS', 'Pug', 'Gulp JS'],
    link: 'Preparing',
    images: [
      '/images/magrabi/1.png',
      '/images/magrabi/2.png',
      '/images/magrabi/3.png',
      '/images/magrabi/4.png',
      '/images/magrabi/5.png',
      '/images/magrabi/6.png',
      '/images/magrabi/7.png',
    ],
    color: '#e3f1e3'
  },
  {
    id: 15,
    name: 'KoPlanet',
    description: "It's the Kolektif House's dashboard project that manages the meetings, entertainments, companies and more...",
    technologies: ['React JS', 'Redux', 'Element UI', 'SCSS'],
    link: 'https://koplanet.kolektifhouse.co/',
    images: [
      '/images/kolektif-house/1.png',
      '/images/kolektif-house/2.png',
      '/images/kolektif-house/3.png',
    ],
    color: '#00bf6f'
  },
  {
    id: 16,
    name: 'Codeway',
    description: "The task of Codeway that shows a collection of statistics within charts",
    technologies: ['React JS', 'Redux', 'Ant Design', 'ChartJS'],
    link: 'https://codeway-vert.vercel.app',
    images: [
      '/images/codeway/1.png',
      '/images/codeway/2.png',
    ],
    color: '#c05ccd'
  },
  {
    id: 17,
    name: 'Shopping App',
    description: "It's a shopping app that shows some data to the user.",
    technologies: ['Flutter', 'GetX', 'Dart'],
    link: 'Mobile App',
    images: [
      '/images/shopping-app/1.png',
      '/images/shopping-app/2.png',
    ],
    color: '#3d83ae'
  },
  {
    id: 18,
    name: 'Starbucks Landing Page',
    description: "It's a sample Starbucks Landing Page",
    technologies: ['HTML', 'CSS', 'SCSS', 'Gulp JS'],
    link: 'Deleted',
    images: [
      '/images/starbucks/1.png',
      '/images/starbucks/2.png',
      '/images/starbucks/3.png',
    ],
    color: '#2a8a15'
  },
];