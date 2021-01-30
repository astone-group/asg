import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'ASTONE.',
  subtitle: 'Developing leaders, teams and organisations to kick ass.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  
  paragraphOne: 'ASTONE. Group is a specialist Organisational Development and Business Psychology consultancy that partners with our clients to develop tailored, expert solutions.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '05 Assessment.png',
    title: 'Assessment',
    info: 'We know that psychometric assessment data is one of the most powerful ways of predicting job performance and culture fit.',
    info2: 'We help you to make sense of this data and to increase your liklihood of making a good hire by integrating assessment data with other methods of selection (and your gut feel), and to plan and craft your next stages of interview, reference checks and on-boarding.',
    url: 'eee',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '10.png',
    title: 'Leadership Coaching',
    info: 'We believe in the potential for growth and development within all of us, including the great leaders among us.',
    info2: 'Leadership coaching is a high impact and high accountability approach to developing an individual\'s personal leadership capability, and embed new and helpful behaviours that will maintain a virtuous, upward spiral. This almost always begins with honest self-reflective, personal insights, and an exploration of the individual why.',
    url: 'e',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let\'s chat!',
  email: '@',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
