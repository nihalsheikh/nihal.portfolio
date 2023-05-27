import {
    mobile,
    pyton,
    aws,
    gcp,
    azure,
    linux,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    frt,
    salesforce,
    cisco,
    carrent,
    jobit,
    tripguide,
    amazonclone,
    androidapp,
    cloudproject,
    cryptoexchange,
    game,
    devopsproject,
    dataanalytics,
    itautomation,
    itsupport,
    threejs,
    github,
    github1,
    github2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: creator,
    },
    {
      title: "Cloud",
      icon: backend,
    },
    {
      title: "DevOps",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Pyton",
      icon: pyton,
    },
    {
      name: "Ubuntu",
      icon: linux,
    },
    {
      name: "GitHub",
      icon: github1,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "GCP",
      icon: gcp,
    },
  ];
  
  const experiences = [
    {
      title: "FRT Intern",
      company_name: "Microsoft",
      icon: frt,
      iconBg: "#E6DEDD",
      date: "January 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Salesforce Developer",
      company_name: "Salesforce",
      icon: salesforce,
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Cisco Cyber Security",
      company_name: "Cisco",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "May 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const certificates = [
    {
      certificate: "Google Data Analytics Certificate",
      company_name: "Google",
      date: "March 2023 - May 2023",
      platform: "Coursera",
      image: dataanalytics,
    },
    {
      certificate: "Google IT Automation Certificate",
      company_name: "Google",
      date: "March 2023 - May 2023",
      platform: "Coursera",
      image: itautomation,
    },
    {
      certificate: "Google IT Support Certificate",
      company_name: "Google",
      date: "March 2023 - May 2023",
      platform: "Coursera",
      image: itsupport,
      source_code_link: "https://github.com/nihalsheikh",
    },
  ];
  
  const projects = [
    {
      name: "Amazon Clone",
      description:
        "Full-Stack Project on Amazon E-commerce.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: amazonclone,
      source_code_link: "https://github.com/nihalsheikh",
    },
    {
      name: "Crypto Plartform",
      description:
        "Cryptocurrency exchange platform.",
      tags: [
        {
          name: "blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "crypto",
          color: "green-text-gradient",
        },
        {
          name: "rust",
          color: "pink-text-gradient",
        },
      ],
      image: cryptoexchange,
      source_code_link: "https://github.com/nihalsheikh",
    },
    {
      name: "To Do List",
      description:
        "Android App - keep track of your schedule.",
      tags: [
        {
          name: "android_studio",
          color: "blue-text-gradient",
        },
        {
          name: "kotlin",
          color: "green-text-gradient",
        },
        {
          name: "playstore",
          color: "pink-text-gradient",
        },
      ],
      image: androidapp,
      source_code_link: "https://github.com/nihalsheikh",
    },
    {
      name: "2D-3D Games",
      description:
        "making games with Unity & Unreal Engine",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "unreal",
          color: "green-text-gradient",
        },
        {
          name: "visual_studio",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/nihalsheikh",
    },
    {
      name: "Cloud",
      description:
        "deploying serverless application on cloud.",
      tags: [
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "databses",
          color: "pink-text-gradient",
        },
      ],
      image: cloudproject,
      source_code_link: "https://github.com/nihalsheikh",
    },
    {
      name: "DevOps",
      description:
        "Integrating apps using Devops",
      tags: [
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "kubernetes",
          color: "green-text-gradient",
        },
        {
          name: "jenkins",
          color: "pink-text-gradient",
        },
      ],
      image: devopsproject,
      source_code_link: "https://github.com/nihalsheikh",
    },
  ];
  
  export { services, technologies, experiences, certificates, projects };