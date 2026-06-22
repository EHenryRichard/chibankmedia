const cdn =
  'https://images.squarespace-cdn.com/content/v1/623364b318b00b6031d1cf18';

export const images = {
  logo: `${cdn}/58b04c92-21f2-401d-810e-cbb2a4d58f15/image+40.png?format=500w`,
  heroPortrait: '/hero_page.png',
  heroPortraitMobile: '/hero-mobile.png',
  hero: `${cdn}/45f6a5c3-ccb8-42c6-bc6b-9d8b15190f62/TBS%2BLaptop+1.jpg?format=1000w`,
  heroAlt: `${cdn}/bea76795-9a73-4002-89df-bcda818547c0/Custom+Website+and+Design.png?format=1000w`,
  blueprint: `${cdn}/4e1b1812-d169-49e7-9de9-dc230fa20a28/The%2BIconic%2BBrand%2BBlueprint.png?format=1000w`,
  blueprintCover: `${cdn}/854cba77-a5d2-4942-8b26-aec4ea11f4e1/The%2BIconic%2BBrand%2BBlueprint.webp?format=750w`,
  iconicBrand: `${cdn}/e58ca6f4-209a-41ec-8b29-7cfdcbbfb23f/The+Iconic+Brand.jpg?format=1000w`,
  personalBrand: `${cdn}/0f731df7-5661-44c8-8c6b-f1dbc3aafa68/The+Iconic+Personal+Brand.png?format=1000w`,
  strategyLine: `${cdn}/4725c73f-afc2-4d4d-bfb5-74580ca758ad/The+Strategy+Line.jpg?format=1000w`,
  impact: `${cdn}/50649937-0210-4f03-b054-0eb576921f81/17.jpg?format=1000w`,
  portfolioOne: `${cdn}/f4953755-2752-4530-84fc-ef31328977ab/rt.jpg?format=750w`,
  portfolioTwo: `${cdn}/d09ab87d-4315-4b32-ac80-99db9d28cc10/Rectangle+40+%283%29.jpg?format=750w`,
  portfolioThree: `${cdn}/f9d14597-20c8-491b-b972-82c52ee1b0d3/Rectangle+41+%281%29.jpg?format=750w`,
  portfolioFour: `${cdn}/89472764-c0da-46ea-b9cd-40c105d4867a/Rectangle+43.jpg?format=750w`,
  founder: `${cdn}/312588b5-3294-4afc-a271-248cdbd8231e/CynthiaMaselli?format=1000w`,
  closing: `${cdn}/1777254325427-PB0YKBYK904BG83NS44Z/image-asset.jpeg?format=1000w`,
};

export const leftNav = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['The Blueprint®', '#blueprint'],
];

export const rightNav = [
  ['The Strategy Line®', '#strategy'],
  ['Contact', '#contact'],
  ['Client Portal', '#contact'],
];

export const navItems = [...leftNav, ...rightNav];

export const seenIn = [
  'E! News',
  'The Zoe Report',
  'Conde Nast Traveler',
  'Byrdie',
  'ABC',
  'CBN',
  'Goop',
  'Vanity Fair',
  'Cosmopolitan',
];

export const pressLogos = [
  {
    label: 'E! News',
    src: `${cdn}/2a3eac9c-95d5-4637-aa20-606f27510ad9/Mask+group+%2811%29.png?format=500w`,
    width: '118px',
  },
  {
    label: 'The Zoe Report',
    src: `${cdn}/ba91f7f7-fa6d-4ad2-9128-c7af4f012ccf/Mask+group+%2812%29.png?format=500w`,
    width: '124px',
  },
  {
    label: 'Conde Nast Traveler',
    src: `${cdn}/6999e9a8-57cd-4cad-92e4-e3824c117a69/Mask+group+%2810%29.png?format=500w`,
    width: '150px',
  },
  {
    label: 'Byrdie',
    src: `${cdn}/7cadd501-d50a-4cbc-8c0c-a40396a22b67/Mask+group+%289%29.png?format=500w`,
    width: '110px',
    position: '21% 47%',
  },
  {
    label: 'ABC',
    src: `${cdn}/19aeb30e-ac7f-4fc6-a8cf-90e99a245226/Mask+group+%2813%29.png?format=500w`,
    width: '92px',
  },
  {
    label: 'CBN',
    src: `${cdn}/10403b58-6ea9-4b8c-a82e-c5c46a1ec83d/CBN.webp?format=500w`,
    width: '120px',
  },
  {
    label: 'Goop',
    src: `${cdn}/4091f2ab-a295-4506-bfaf-fca8f3e53d26/Goop.webp?format=500w`,
    width: '104px',
  },
  {
    label: 'Vanity Fair',
    src: `${cdn}/509b5fdf-fa12-491b-9886-c0779ed81afa/VanityFair.webp?format=500w`,
    width: '142px',
  },
  {
    label: 'Cosmopolitan',
    src: `${cdn}/e617329c-60b9-4a11-bcef-2daaba508bdc/Cosmo.png?format=500w`,
    width: '166px',
  },
];

export const services = [
  {
    title: 'The Iconic Brand',
    eyebrow: 'Identity service',
    image: images.iconicBrand,
    copy: 'A refined brand identity process for founders who need strategy, visuals, and standards that hold together everywhere the business appears.',
    cta: 'Request Initial Consult',
  },
  {
    title: 'The Iconic Personal Brand',
    eyebrow: 'Presence, story, direction',
    image: images.personalBrand,
    copy: 'A full-service experience for leaders ready to align their voice, image, website, and social presence around a clear strategic point of view.',
    cta: 'Request Initial Consult',
  },
  {
    title: 'Website Design & Development',
    eyebrow: 'Digital presence',
    image: images.heroAlt,
    copy: 'Custom web direction, copy structure, and design built to feel elevated on the surface and purposeful underneath.',
    cta: 'Request A Proposal',
  },
  {
    title: 'The Strategy Line',
    eyebrow: '1:1 advisory',
    image: images.strategyLine,
    copy: 'A focused partnership for brand and business decisions, created for entrepreneurs who want a strategist close to the work.',
    cta: 'Learn More + Apply',
  },
];

export const portfolioItems = [
  ['Iconic Logo Designs', images.portfolioOne],
  ['Before & Afters', images.portfolioTwo],
  ['Podcast Branding', images.portfolioThree],
  ['Brand Style Guides', images.portfolioFour],
  ['Website Designs', images.heroAlt],
  ['Personal Branding', images.personalBrand],
];

export const audit = {
  title: 'The Iconic Brand Audit',
  subtitle:
    'A 90-minute strategic review of your existing brand to help you refine and elevate.',
  intro:
    'Think your brand presence is doing the job? This focused review looks at your strategy, visuals, messaging, website, and social presence with a strategist eye.',
  detail:
    'You will leave with a clearer understanding of what is working, what needs refinement, and which visible moves should happen next.',
  includes: [
    'Full website audit with visual, copy, and user-experience notes',
    'Brand consistency review across social platforms and digital presence',
    'Visual design recommendations for cohesion, professionalism, and appeal',
    '90-minute video call to walk through findings, recommendations, and next steps',
  ],
};

export const impact = {
  title: 'The Social Impact',
  subtitle:
    'A dedicated extension of our agency created to serve nonprofits, ministries, and purpose-driven organizations.',
  body: 'We partner with you to share your mission with clarity, creativity, and excellence, helping your work reach more people and gather stronger support.',
  note: 'We bring creativity, strategy, and excellence to every cause. Your work helps communicate with power and purpose.',
  support:
    'We believe in supporting nonprofits with big vision, even when budgets are small. Here, you can choose the cause that resonates with you.',
};

export const testimonials = [
  {
    quote:
      'Working together was a refined, thoughtful experience. The process gave our brand the clarity, direction, and elevated presence we needed.',
    name: 'Ashlee Frazier-Williams',
    brand: 'Anea Hill',
  },
  {
    quote:
      'Our site and brand finally feel aligned with who we are and the clients we want to attract. Every decision felt strategic.',
    name: 'Brianna',
    brand: 'Milk + Honey Travels',
  },
  {
    quote:
      'Cynthia understands how to translate vision into something refined, useful, and timeless. The result gave us confidence and momentum.',
    name: 'Ashley',
    brand: 'The Social Well Creative',
  },
];

export const founder = {
  title: 'The Brand Strategist™',
  intro:
    'If you are new here and wondering who is behind the work, here is a closer look at the strategist guiding the process.',
  strengths: 'Individualization, Developer, Strategic, Achiever and Learner',
  bio: [
    'A highly regarded expert in brand identity, strategic marketing, and modern brand elevation.',
    'Since launching her boutique agency in 2018, Cynthia has built a thriving business through referrals, trust, transformation, and long-term client relationships.',
    'With two decades of experience across marketing, sales, consulting, and early career advising, she brings rare creative direction together with strategic thinking.',
    'Her background in business, communication, advertising, and psychology helps her connect messaging, market, and momentum.',
  ],
};

export const footerLinks = [
  'The Iconic Brand Blueprint',
  'The Iconic Brand Audit',
  'The Strategy Line',
  'Digital Guide Of Services',
  'Blog',
  'Speaking Inquiries',
  'Contact',
];
