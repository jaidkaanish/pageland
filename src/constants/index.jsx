import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#feature" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />, 
    text: "Intuitive Code Editor", 
    description: "Write and edit code seamlessly with an intuitive code editor featuring syntax highlighting, autocompletion, and code formatting."
  },
  {
    icon: <Fingerprint />, 
    text: "Language Support", 
    description: "Support for a wide range of programming languages, allowing you to build applications using your preferred technologies."
  },
  {
    icon: <ShieldHalf />, 
    text: "Code Snippets and Templates", 
    description: "Access pre-built code snippets and templates to accelerate your development process and improve code quality."
  },
  {
    icon: <BatteryCharging />, 
    text: "Real-time Feedback", 
    description: "Instant feedback on your code with features like error highlighting, linting, and code analysis."
  },
  {
    icon: <PlugZap />, 
    text: "Version Control Integration", 
    description: "Seamlessly integrate with popular version control systems like Git for easy collaboration and code management."
  },
  {
    icon: <GlobeLock />, 
    text: "Debugging Tools", 
    description: "Powerful debugging tools to help you identify and fix issues in your code quickly and efficiently."
  }
]

export const checklistItems = [
  {
    title: "Blazing Fast Performance",
    description: "Experience lightning-fast code editing with our optimized engine. Enjoy smooth and responsive typing, instant code completion, and no lag, even with large files."
  },
  {
    title: "Intelligent Code Completion",
    description: "Write code faster and more accurately with our advanced code completion engine. Get instant suggestions for variables, functions, and entire code blocks, based on your code context."
  },
  {
    title: "Seamless Syntax Highlighting", 
    description: "Easily spot errors and improve code readability with our sophisticated syntax highlighting. Our editor accurately recognizes and color-codes different languages, making your code visually appealing and easier to understand." 
  },
  {
    title: "Multi-File Editing",
    description: "Effortlessly navigate and edit multiple files within a single project. Our editor provides a smooth and intuitive experience for working with complex projects, enhancing your productivity."
  }
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  
];

export const platformLinks = [
  
];

export const communityLinks = [
 
];
