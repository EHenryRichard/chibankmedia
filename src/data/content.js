/* ============================================================================
   CHIBANKZ MEDIA — SITE CONTENT
   ----------------------------------------------------------------------------
   This is the ONE file you edit to change anything on the site: words, stats,
   case studies, services, testimonials, links, etc. Each section below maps to
   a block on the page. Edit the text inside the quotes. Don't touch the
   `export const` names — those are wired into the components.
   ============================================================================ */

/* ---------------------------------------------------------------------------
   0. GLOBAL — booking link + brand basics
   Change `booking.href` to your real Calendly / WhatsApp / form link once and
   every "Book a Discovery Call" button across the site updates automatically.
--------------------------------------------------------------------------- */
export const brand = {
  name: 'Chibankz Media',
  trademark: 'Chibankz Media™',
  email: 'hello@chibankmedia.com',
}

export const booking = {
  label: 'Book a Discovery Call',
  // TODO: replace with your real link (Calendly, WhatsApp, or contact form).
  href: '#contact',
}

/* ---------------------------------------------------------------------------
   IMAGES
   Right now these point at elegant placeholder photos. Swap each URL for your
   own image (or drop a file in /public and use '/your-file.png').
--------------------------------------------------------------------------- */
const cdn =
  'https://images.squarespace-cdn.com/content/v1/623364b318b00b6031d1cf18'

export const images = {
  heroPortrait: '/hero_page.png',
  heroPortraitMobile: '/hero-mobile.png',
  blueprint: '/image3.png',
  bankole: '/IMG_5188.JPG.jpeg',
  chidinma: '/IMG_5192.JPG.jpeg',
  impact: '/image.png',
  founder: '/image3.png',
  closing: '/IMG_1063.JPG.jpeg',
  // Case-study / service photos (placeholders — replace with real client work)
  work1: '/image.png',
  work2: '/IMG_5188.JPG.jpeg',
  work3: '/image1.png',
  work4: '/IMG_5190.JPG.jpeg',
  service1: '/IMG_5188.JPG.jpeg',
  service2: '/image.png',
  service3: '/IMG_5189.JPG.jpeg',
  service4: '/IMG_5190.JPG.jpeg',
  service5: '/image3.png',
};

/* ---------------------------------------------------------------------------
   NAVIGATION (header + mobile menu)
--------------------------------------------------------------------------- */
export const leftNav = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['The Blueprint', '#blueprint'],
]

export const rightNav = [
  ['Case Studies', '#work'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export const navItems = [...leftNav, ...rightNav]

/* ---------------------------------------------------------------------------
   1. HERO
--------------------------------------------------------------------------- */
export const hero = {
  // Each array item is one line of the big headline. The last word "connects"
  // is rendered in the script font for the signature look.
  headlineLines: ['Your Business', 'Deserves More', 'Than Random'],
  headlineScript: 'Posting',
  introParagraphs: [
    'Your business isn’t struggling because people don’t need what you offer.',
    'It’s struggling because your online presence doesn’t reflect the quality of your business.',
    'We fix that through content, social media management, and Meta advertising that turns attention into customers.',
  ],
}

/* ---------------------------------------------------------------------------
   2. TRUST BAR (logo marquee strip under the hero)
   The logos are placeholders. Replace with real client logos when you have
   permission, or keep as a "trusted by brands worldwide" visual.
--------------------------------------------------------------------------- */
export const trustHeading = 'Trusted by businesses across 25+ countries'

export const clientLogos = [
  { label: 'Client One', src: `${cdn}/2a3eac9c-95d5-4637-aa20-606f27510ad9/Mask+group+%2811%29.png?format=500w`, width: '118px' },
  { label: 'Client Two', src: `${cdn}/ba91f7f7-fa6d-4ad2-9128-c7af4f012ccf/Mask+group+%2812%29.png?format=500w`, width: '124px' },
  { label: 'Client Three', src: `${cdn}/6999e9a8-57cd-4cad-92e4-e3824c117a69/Mask+group+%2810%29.png?format=500w`, width: '150px' },
  { label: 'Client Four', src: `${cdn}/7cadd501-d50a-4cbc-8c0c-a40396a22b67/Mask+group+%289%29.png?format=500w`, width: '110px', position: '21% 47%' },
  { label: 'Client Five', src: `${cdn}/19aeb30e-ac7f-4fc6-a8cf-90e99a245226/Mask+group+%2813%29.png?format=500w`, width: '92px' },
  { label: 'Client Six', src: `${cdn}/10403b58-6ea9-4b8c-a82e-c5c46a1ec83d/CBN.webp?format=500w`, width: '120px' },
  { label: 'Client Seven', src: `${cdn}/4091f2ab-a295-4506-bfaf-fca8f3e53d26/Goop.webp?format=500w`, width: '104px' },
  { label: 'Client Eight', src: `${cdn}/509b5fdf-fa12-491b-9886-c0779ed81afa/VanityFair.webp?format=500w`, width: '142px' },
]

/* ---------------------------------------------------------------------------
   3. THE BLUEPRINT — your signature framework (the secret weapon)
   4 stages, each maps to a real service. This makes you look like a system,
   not a freelancer. Reword the stage names/copy to match how you actually work.
--------------------------------------------------------------------------- */
export const teamRoles = {
  kicker: 'The people behind Chibankz Media',
  title: ['Two specialists.', 'One growth team.'],
  intro:
    'Great content earns attention. Smart performance marketing turns it into action. Chibankz Media brings both disciplines together, so your brand can show up clearly and grow intentionally.',
  members: [
    {
      number: '01',
      name: 'Bankole James',
      role: 'Performance & Digital Growth',
      image: images.bankole,
      copy: 'Bankole focuses on the systems that move people from interest to action, combining paid media, conversion thinking, and practical digital strategy.',
      services: [
        'Meta advertising',
        'Campaign strategy',
        'Landing pages & funnels',
        'Shopify growth',
      ],
    },
    {
      number: '02',
      name: 'Chidinma Eunice Obada',
      role: 'Content & Brand Growth',
      image: images.chidinma,
      copy: 'Chidinma shapes how brands show up online, creating the clarity, consistency, and content that help businesses build trust with the right audience.',
      services: [
        'Social media management',
        'Content strategy',
        'Brand storytelling',
        'Audience growth',
      ],
    },
  ],
  together:
    'Chidinma builds the presence. Bankole amplifies the performance. Together we run the Chibankz Media Team.',
}

export const blueprint = {
  title: ['The Chibankz Media', 'Growth Blueprint'],
  byline: 'Our signature 4-stage growth system',
  lead: 'Most agencies sell you one piece, a few posts, a quick ad. We run the whole engine: from who you are, to what you post, to what you spend. The Chibankz Media Growth Blueprint™ is the proven system we use to turn quiet social accounts into a presence your audience actually remembers and buys from.',
  stages: [
    {
      no: '01',
      name: 'Position',
      copy: 'We define who you are, who you are for, and why you are the obvious choice, so every post has a job to do.',
    },
    {
      no: '02',
      name: 'Create',
      copy: 'We produce scroll-stopping content built for your specific audience. No more random posting and hoping.',
    },
    {
      no: '03',
      name: 'Distribute',
      copy: 'We show up consistently and grow the right followers, real, engaged people, not vanity numbers.',
    },
    {
      no: '04',
      name: 'Amplify',
      copy: 'We put specialized Meta advertising behind what is already working to scale reach, leads, and sales.',
    },
  ],
  outro: 'One system. From your brand, to your content, to your ad spend, handled.',
}

/* ---------------------------------------------------------------------------
   4. SERVICES
--------------------------------------------------------------------------- */
export const servicesHeading = {
  kicker: 'What we do',
  title: ['How We Help You', 'Grow'],
  intro:
    'Full-service social media built to do one thing, turn attention into customers. Pick a single service or let us run the whole Blueprint.',
}

export const services = [
  {
    title: 'Social Media Management',
    eyebrow: 'Done-for-you',
    image: images.service1,
    copy: 'We run your accounts end to end, planning, posting, captions, community management, and reporting, so you stay consistent without lifting a finger.',
  },
  {
    title: 'Content Creation',
    eyebrow: 'Reels, graphics & social content',
    image: images.service2,
    copy: 'Content your audience actually wants to watch, save, and share. From engaging reels to branded graphics and social media creatives that captures attention, builds trust, and moves people to take action.',
  },
  {
    title: 'Instagram Growth',
    eyebrow: 'Real, engaged followers',
    image: images.service3,
    copy: 'A proven organic system that grows the right followers, people who actually engage and buy, not bots or vanity numbers.',
  },
  {
    title: 'Paid Advertising',
    eyebrow: 'Specialized Meta ads',
    image: images.service4,
    copy: 'Meta (Instagram & Facebook) ad funnels engineered for return on ad spend, the right offer, to the right people, at the right cost.',
  },
  {
    title: 'Brand Positioning',
    eyebrow: 'Strategy first',
    image: images.service5,
    copy: 'We sharpen who you are and why you matter, so your whole presence feels intentional, premium, and impossible to scroll past.',
  },
]

/* ---------------------------------------------------------------------------
   5. CASE STUDIES (your real client work)
   👉 THIS IS THE MOST IMPORTANT SECTION. Replace the placeholders below with
   your REAL clients and REAL numbers. Keep the 5-field shape:
     client   – the brand name
     industry – their category
     challenge– the problem in one line
     action   – what you did
     result   – the headline win (a NUMBER works best)
     metric   – the single biggest stat, shown large
--------------------------------------------------------------------------- */
export const caseStudiesHeading = {
  kicker: 'Selected work',
  title: ['Real Brands.', 'Real Results.'],
}

export const caseStudies = [
  {
    client: 'Lumi Apparel',
    industry: 'Fashion & Apparel · Lagos',
    image: images.work1,
    challenge: 'Inconsistent posting and an Instagram that looked good but sold nothing.',
    action: 'Rebuilt their content system around a clear brand voice, shifting to a reels-led calendar with weekly product storytelling.',
    result: 'Grew from 0 to 48,000 followers, getting at least 100 new organic followers each month, and lifted reach 2518% in 90 days.',
    metric: { value: '+2518%', label: 'Reach in 90 days' },
  },
  {
    client: 'Tatasha Café',
    industry: 'Food & Hospitality · United Kingdom',
    image: images.work2,
    challenge: 'Inconsistent posting and a lack of strategy for ads.',
    action: 'Rebuilt the funnel with UGC-style creative, retargeting, and a tightened offer aimed at first-time buyers.',
    result: 'Expanded the café’s reach to more local customers, resulting in increased visibility and a steady flow of new faces visiting the café.',
    metric: { value: '4.7x', label: 'Return on ad spend' },
  },
  {
    client: 'The Yard Kitchen',
    industry: 'Food & Hospitality · Toronto',
    image: images.work3,
    challenge: 'Busy weekends, empty weekdays, and no presence locals could find.',
    action: 'Paired mouth-watering content with geo-targeted Meta ads pushing midweek offers to people nearby.',
    result: 'Drove a 220% jump in weekday reservations and 1.2M local impressions.',
    metric: { value: '+220%', label: 'Weekday bookings' },
  },
  {
    client: 'Coach Daniel',
    industry: 'Health & Fitness · United States',
    image: images.work4,
    challenge: 'Struggling to consistently attract the right audience and turn Instagram into a source of coaching enquiries.',
    action: 'Built a content strategy centered on educational short-form videos, consistent posting, and a clear path for followers to become coaching leads.',
    result: 'Increased audience growth, improved engagement, and generated a steady flow of qualified coaching enquiries.',
    metric: { value: '17x', label: 'Audience growth' },
  },
]

/* ---------------------------------------------------------------------------
   6. BY THE NUMBERS (stats band)
--------------------------------------------------------------------------- */
export const stats = {
  heading: ['The Numbers', 'Behind The Work'],
  intro:
    'A track record built across industries and countries, and the discipline to repeat it for your brand.',
  items: [
    { value: '25+', label: 'Countries served' },
    { value: '200+', label: 'Clients served' },
    { value: '500+', label: 'Projects completed' },
  ],
  cta: 'Where will your brand land?',
}

/* ---------------------------------------------------------------------------
   7. TESTIMONIALS
   Text quotes for now. When you have review screenshots, we can swap these for
   image frames — just say the word.
--------------------------------------------------------------------------- */
export const testimonials = [
  {
    quote:
      'Amazing work as usual and very dedicated to his craft. Working with Bankole has been great, and my business is getting the exposure it needs to thrive.',
    name: '@morgan1942',
    brand: 'Fiverr client / Canada',
  },
  {
    quote:
      'It has been a pleasure to work with you. Strategic thinking, easy communication, and delivery that exceeded expectations.',
    name: '@honeyojo',
    brand: 'Fiverr client / United Kingdom',
  },
  {
    quote:
      'He did a wonderful job with the content and design. I will definitely be back. Keep up the good work.',
    name: '@turlylovely',
    brand: 'Fiverr client / United States',
  },
  {
    quote:
      'Working with Bankole was very easy. He is knowledgeable, works hard to understand your product, and understands what you are trying to do. I 100% recommend him.',
    name: '@ricky53',
    brand: 'Fiverr client / United States',
  },
  {
    quote:
      'James continues to demonstrate a great understanding of our brand, and we are seeing our social media following grow thanks to him.',
    name: '@craigcmartin',
    brand: 'Fiverr client / United States',
  },
  {
    quote:
      'James has been with us for almost a year now. We would not swap him for anybody else. Highly recommended.',
    name: '@bob_bert',
    brand: 'Fiverr client / Australia',
  },
  {
    quote:
      'James totally understood my brand and delivered great content that boosted my engagement fast. Super professional, creative, and easy to work with.',
    name: '@scottytee99',
    brand: 'Fiverr client / United Kingdom',
  },
  {
    quote:
      'Fantastic operator who is flexible and maintains a positive attitude. Very easy to work with, and I am glad to have found someone I can collaborate with ongoing.',
    name: '@anthonybray697',
    brand: 'Fiverr client / Australia',
  },
  {
    quote:
      'Definitely my go-to for all things creative for social media.',
    name: '@drjerisa',
    brand: 'Fiverr client / United States',
  },
  {
    quote:
      'James crafts engaging posts that amplify our brand. Highly recommended!',
    name: '@odesignin',
    brand: 'Fiverr client / United Kingdom',
  },
]

export const reviewsLink =
  'https://www.fiverr.com/jookab?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnbfHwzEu1ni2eeudbeXhrpVtY49gqpmboTkAs8I8OBy6ZIYcQdha_pRyLOeQ_aem_1sAH5Q7Z7wszJyPLTgDC6g'

/* ---------------------------------------------------------------------------
   8. WHY CLIENTS WORK WITH US
--------------------------------------------------------------------------- */
export const whyUs = {
  title: 'Why Clients Work With Us',
  subtitle:
    'Strategy backed by execution, and an experience that feels effortless on your end.',
  intro:
    'Plenty of people will post for you. Few will treat your growth like a business problem to be solved. Here is what working with Chibankz Media actually feels like.',
  detail:
    'You get a partner who communicates clearly, moves fast, and ties every piece of content back to a result you can measure.',
  points: [
    'Consistent, proactive communication, you are never left wondering',
    'Content tailored to your exact audience, not recycled templates',
    'Proven experience across industries, from fashion to fitness to food',
    'International client experience across 25+ countries',
    'Strategy backed by execution, we plan it and we deliver it',
  ],
}

/* ---------------------------------------------------------------------------
   9. ABOUT — Meet the mind behind Chibankz Media
--------------------------------------------------------------------------- */
export const about = {
  script: 'Meet the founders',
  title: ['The Minds Behind', 'Chibankz Media'],
  intro:
    'If you are wondering who is behind the work, here is a closer look at the people guiding your growth.',
  name: 'James Bankole & Obada Chidinma Eunice',
  highlight: 'Strategy · Content · Paid Media',
  bio: [
    'We are James Bankole and Obada Chidinma Eunice, the founders of Chibankz Media.',
    'Between us, we bring over a decade of combined experience in digital marketing and social media management, helping businesses across different industries and countries build stronger brands online.',
    'James is a digital marketer with over 8 years of experience, while Chidinma has spent almost 6 years managing social media for businesses, helping them communicate clearly, stay consistent, and grow with intention.',
    'We started Chibankz Media because we realized many businesses don’t struggle because they have bad products or services. They struggle because they’re not visible enough.',
    'Good businesses deserve to be seen, trusted, and remembered. That’s why we do what we do.',
    'Through strategy, content, and marketing, our goal is to help businesses build an online presence that reflects the quality of what they offer.',
    'Whether we’re managing a brand, running advertising campaigns, or creating content, we bring the same strategy and intention to everything we do.',
  ],
}

/* ---------------------------------------------------------------------------
   10. FINAL CTA
--------------------------------------------------------------------------- */
export const closing = {
  title: ['Ready To Stop Guessing', 'And Start Growing'],
  titleScript: 'Online?',
  body: "Let's build a social media presence your audience remembers.",
}

/* ---------------------------------------------------------------------------
   FOOTER
--------------------------------------------------------------------------- */
export const footerLinks = [
  'The Chibankz Media Growth Blueprint',
  'Social Media Management',
  'Content Creation',
  'Instagram Growth',
  'Paid Advertising',
  'Case Studies',
  'About',
  'Contact',
]

export const footerBio =
  'Chibankz Media helps businesses build a stronger online presence through social media management, content creation, and specialized Meta advertising, strategy backed by execution, for brands across 25+ countries.'

// Social handle used by the footer Instagram feed row.
export const social = {
  // 👉 Replace with your real Instagram URL.
  instagram: 'https://instagram.com/chibankmedia',
}

// Instagram feed thumbnails shown in a row near the bottom of the footer.
// Placeholders for now — swap for your real post images.
export const footerFeed = [
  '/image4.jpeg',
  '/image.png',
  '/IMG_5188.JPG.jpeg',
  '/image1.png',
  '/IMG_5190.JPG.jpeg',
];
