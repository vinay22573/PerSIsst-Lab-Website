export interface Position {
    id: number;
    title: string;
    learnMoreLink: string;
    description: string;
    qualification: string;
  }
  
export const AvailablePositions: Position[] = [
    {
        id: 1,
        title: "BTech Project",
        learnMoreLink: "https://drive.google.com/file/d/1Hk_zx5W58bCjbFnN-SOfZC8PzwJ-JFen/view?usp=sharing",
        description: "Interested candidates may send their applications, along with their resumes, to persisst@iiitd.ac.in or visit https://www.iiitd.ac.in/careers/index.html for regular updates.",
        qualification: "BTech students in their 3rd or 4th year. Knowledge of AI, programming languages, Human Computer Interaction(HCI), Design, or tech concepts preferred. Strong analytical skills and interest in tech are beneficial."
    },
    {
        id: 2,
        title: "Research Assistant",
        learnMoreLink: "https://www.iiitd.ac.in/careers/",
        description: "Interested candidates may send their applications, along with their resumes, to persisst@iiitd.ac.in or visit https://www.iiitd.ac.in/careers/index.html for regular updates.",
        qualification: "Bachelor's/Master's degree in Computer Science, Engineering, Circuital Branches, Human Computer Interaction, Design, or related fields. Strong background in AI/ML and research experience is required for this role."

    },
    {
        id: 3,
        title: "PhD Scholar",
        learnMoreLink: "https://www.iiitd.ac.in/careers/",
        description: "Interested candidates may send their applications, along with their resumes, to persisst@iiitd.ac.in or visit https://www.iiitd.ac.in/careers/index.html for regular updates.",
        qualification: "Bachelor's/Master's degree in Computer Science, Engineering, Circuital Branches, Human Computer Interaction, Design, or related fields. Strong background in AI/ML and research experience is required for this role."
    },
    {
        id: 4,
        title: "Research Internship",
        learnMoreLink: "https://www.iiitd.ac.in/placement/internship-details",
        description: "Join our Research Team to explore advanced projects in AI, Data Science, and Machine Learning. Focus on novel algorithms and real-world applications, collaborating with experts on innovative solutions and gaining valuable research experience.",
        qualification: "Undergraduate/Graduate students with strong analytical and problem-solving skills. Knowledge of Machine Learning, AI, or statistical methods is a plus."
    }
  ]



export  const OurPrpose = [
    {
      iconSrc: "/images/purpoes/Mission.svg",
      title: "Mission",
      description:
        "Transforming lives through smart innovations - people face challenges from basic issues like cognition and health to advanced needs like interactivity and smart assistance.",
    },
    {
      iconSrc: "/images/purpoes/Vision.svg",
      title: "Vision",
      description:
        "Weaving a smarter tomorrow for all - curating a world where intelligent and smart technology can seamlessly integrate with and enhance the quality of daily living through PerSIsst Lab.",
    },
    {
      iconSrc: "/images/purpoes/Value.svg",
      title: "Value",
      description:
        "Assist to innovate, innovate to assist - valuing innovations that involve creative and free-thinking, individual as well as team effort, and a spirit to bring a positive transformation to lives.",
    },
  ];
  
