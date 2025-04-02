type SocialLink = {
  href: string;
  icon: string;
};

type TeamMember = {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  bgImage: string;
  socialLinks: SocialLink[];
};




export const teamMembers = [
  {
    name: 'Pragma Kar',
    title: 'Lab Director',
    description: 'Lab director PerSisst | Professor IIITD | PhD, Jadavpur',
    bgImageFront: '/assets/prof_with_bg.png',
    bgImageBack: '/assets/prof_without_bg.png',
    views: 'Loves to solve Problems HCI Domains which impacts millions positively',
    socialLinks: [
      { href: 'https://www.linkedin.com/in/pragma-kar-9419143a/', icon: '/assets/in-filled.svg' },
      { href: 'https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en', icon: '/googlescholar.png' },
      { href: 'https://iiitd.irins.org/profile/554054', icon: '/irins.png' },
      { href: 'https://www.iiitd.ac.in/pragma', icon: '/website.png' },
    ],
  },
  {
    name: 'Debadatta Sethy',
    title: 'PhD Scholar',
    description: 'PhD@ IIITD | IIT Madras (Post Grad) | Mechanical Design Engineer(IIT Dhanbad)',
    bgImageFront: '/assets/Debdutta_Padded.png',
    bgImageBack: '/assets/Debdutta_Masked.png',
    views: 'Passionate about Machine Design, CAD Modeling, and Engineering Simulation',
    socialLinks: [
      { href: 'https://www.linkedin.com/in/debadatta-sethy-7312b035/', icon: '/assets/in-filled.svg' },
      { href: 'https://behance.net', icon: '/assets/behance-fill.svg' },
      { href: 'https://x.com', icon: '/assets/x-filled.svg' },
      { href: 'https://github.com', icon: '/assets/githubfilled.svg' },
    ]
  },
  {
    name: 'Param Pratibha',
    title: 'PhD Scholar',
    description: 'PhD @ IIITD (HCI) | M.Tech (JNU) | B.Tech (MACET,Patna)',
    bgImageFront: '/assets/Pratibha_Padded.png',
    bgImageBack: '/assets/Pratibha_Masked.png',
    views: 'Researching Human-Computer Interaction with expertise in Data Science',
    socialLinks: [
      { href: 'https://www.linkedin.com/in/param-pratibha-b99485155', icon: '/assets/in-filled.svg' },
      { href: 'https://github.com', icon: '/assets/githubfilled.svg' },
      { href: 'https://x.com', icon: '/assets/x-filled.svg' },
      { href: 'https://behance.net', icon: '/assets/behance-fill.svg' }
    ]
  },
  {
    name: 'Siddhant Bali',
    title: 'Backend Developer',
    description: 'Student | BTech 3rd Year ',
    bgImageFront: '/assets/Bali_Padded.png',
    bgImageBack: '/assets/Baali masked.png',
    views: 'Excited about Backend Development and creating scalable solutions',
    socialLinks: [
      { href: 'https://linkedin.com', icon: '/assets/in-filled.svg' },
      { href: 'https://behance.net', icon: '/assets/behance-fill.svg' },
      { href: 'https://x.com', icon: '/assets/x-filled.svg' },
      { href: 'https://github.com', icon: '/assets/githubfilled.svg' },
    ],
  },
  {
    name: 'Vinay Kumar Dubey',
    title: 'Frontend Developer',
    description: 'Student | BTech 3rd Year ',
    bgImageFront: '/assets/Vinay_Padded.png',
    bgImageBack: '/assets/Vinay_Masked.png',
    views: 'Excited about Frontend Development and creating impactful UI/UX',
    socialLinks: [
      { href: 'https://www.linkedin.com/in/vinay-kumar22573', icon: '/assets/in-filled.svg' },
      { href: 'https://www.instagram.com/vinay22573/', icon: '/assets/instagram-line.svg' },
      { href: 'https://github.com/vinay22573', icon: '/assets/githubfilled.svg' },
      { href: 'https://www.behance.net/vinaykumardubey1', icon: '/assets/behance-fill.svg' },
    ],
  },
  {
    name: 'Daksh Tongaria',
    title: 'UI/UX Designer',
    description: 'Student | BTech 3rd Year ',
    bgImageFront: '/assets/Daksh_Padded.png',
    bgImageBack: '/assets/Daksh_Masked.png',
    views: 'Passionate about creating impactful designs and solving real-world problems',
    socialLinks: [
      { href: 'https://www.linkedin.com/in/daksh-tongaria-1295a6258/', icon: '/assets/in-filled.svg' },
      { href: 'https://www.behance.net/dakshtongaria', icon: '/assets/behance-fill.svg' },
      { href: 'https://www.instagram.com/dkshluvsducks', icon: '/assets/instagram-line.svg' },
      { href: 'https://github.com', icon: '/assets/githubfilled.svg' },
    ],
  },
  // Add more team members here...
];
