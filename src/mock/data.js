import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Hugo - Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hugo Meza',
  subtitle: 'I\'m an aspiring software engineer',
  cta: 'Get to know me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'My name is Hugo Meza, and I am a recent Computer Engineering graduate from the Grove School of Engineering at City College of New York, CUNY.',
  paragraphTwo: 'I participated at CUNY Tech Prep, which is a year long full stack JavaScript program, became president of Association for Computing Machinery - CCNY Chapter (2018-2019), and have experience at two startup companies.',
  paragraphThree: 'My goal is to pursue a Software Engineering career either as a Full Stack, Front or Back End developer.',
  resume: 'https://hugomeza.herokuapp.com/cv', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'nuravine.png',
    title: 'Software Developer Intern',
    info: 'Nuravine focuses on indoor farming. My task was to transition their Java EC2 server to a Node.js serverless using Amazon Web Services.',
    info2: 'I built more than 30 REST API endpoints that decreased by 20% data rendering time. Then, I focused on adding AWS Cognito for authentication / authorization and built dynamic databases with AWS DynamoDB.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'yada.png',
    title: 'Software Engineer Intern',
    info: 'Yada aims to create a scalable workforce of research assistants augmented by software & AI. I managed my own projects and built from scratch a REST API with MongoDB with a Test Driven Development practices.',
    info2: 'I started the development of a React frontend and handled registration, sign-in/out, account editing, and user authentication and authorization.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'faceapp.png',
    title: 'Face Recognition React.js',
    info: 'This personal React.js project allows you to identify the detection of faces in any image that it is supplied. This was achieved by using Clarifai\'s Face Detect Model.',
    info2: '',
    url: 'http://react-detect-face.herokuapp.com/',
    repo: 'https://github.com/hgmeza/FaceApp-React', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'portfolio-react.png',
    title: 'Porfolio React and Next.js',
    info: 'Another personal React.js using Next.js and Reactstrap to display my projects in another fashion. Decided to build another version of my portfolio to learn more about the popular frameworks and to also understand the component\'s life cycle.',
    info2: '',
    url: 'https://hugomeza.herokuapp.com/',
    repo: 'https://github.com/hgmeza/portfolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'portfolio-gatsby.png',
    title: 'Portfolio React Gatsby',
    info: 'I decided to ramp up my portfolio page to leverage front end development using another technology library.',
    info2: 'This static website uses Gatsby to make the site "blazingly fast"',
    url: '',
    repo: 'https://github.com/hgmeza/portfolio-gatsby', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to shoot an email!',
  btn: 'Email Me!',
  email: 'hgmeza114@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'link',
      url: 'https://hugomeza.herokuapp.com/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hgmeza',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/hgmeza',
    },
  ],
};
