import { FileUser, Images, Music2 } from "lucide-react";

export const githubProfile = "https://github.com/sydabdulbasit123";
export const linkedinProfile ="https://www.linkedin.com/in/sydabdulbasit/";
export const emailID ="https://mail.google.com/mail/?view=cm&fs=1&to=sydabdulbasit@gmail.com";

export const projects = [
  {
    name: "AI Resume Builder",
    category: "AI + Full stack",
    description: "An AI-powered resume and interview assistant that works from a resume PDF and a target job description.",
    stack: ["React", "Express", "MongoDB", "AI"],
    icon: FileUser,
    tone: "from-violet-500/20 via-indigo-500/10 to-transparent",
    repo: `${githubProfile}/Backend_4`,
    live: "https://ai-job-support-alpha.vercel.app/",
    file: "resume-assistant.js",
    code: [
      ["01", "const", " report = await generateWithAI({"],
      ["02", "  resume:", " uploadedPdfText,"],
      ["03", "  jobDescription:", " targetRole,"],
      ["04", "  output:", ' "interview + ATS resume",'],
      ["05", "});", "", ""],
    ],
  },
  {
    name: "Post Project",
    category: "Full stack",
    description: "A full-stack social posting app: upload an image, add a caption, and browse the feed.",
    stack: ["React", "Express", "MongoDB", "ImageKit"],
    icon: Images,
    tone: "from-cyan-400/20 via-teal-500/10 to-transparent",
    repo: `${githubProfile}/Backend_2`,
    file: "create-post.js",
    code: [
      ["01", "const", " form = new FormData();"],
      ["02", "form.append(", '"image", selectedFile);'],
      ["03", "form.append(", '"caption", caption);'],
      ["04", "await", " api.post('/create-post', form);"],
      ["05", "// image → ImageKit", "", ""],
      ["06", "// post  → MongoDB", "", ""],
    ],
  },
  {
    name: "Spotify-like",
    category: "Backend",
    description: "A music-app backend project with authentication and dedicated music API routes.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    icon: Music2,
    tone: "from-amber-400/20 via-orange-500/10 to-transparent",
    repo: `${githubProfile}/Spotify-like`,
    file: "music.routes.js",
    code: [
      ["01", "router", ".post('/register', registerUser);"],
      ["02", "router", ".get('/all', getAllMusic);"],
      ["03", "router", ".post('/upload', uploadMusic);"],
      ["04", "// auth + music routes", "", ""],
      ["05", "export", " default router;"],
    ],
  },
  {
    name: "Photo Gallery",
    category: "React",
    description: "A paginated image gallery built while learning React effects and external API requests.",
    stack: ["React", "Axios", "Picsum API"],
    icon: Images,
    tone: "from-fuchsia-400/20 via-pink-500/10 to-transparent",
    repo: `${githubProfile}/Gallery-App`,
    file: "use-gallery.js",
    code: [
      ["01", "useEffect", "(() => {"],
      ["02", "  setLoading", "(true);"],
      ["03", "  axios.get", "(`/photos?page=${page}`)"],
      ["04", "    .then(setPhotos)", "", ""],
      ["05", "    .finally", "(() => setLoading(false));"],
      ["06", "}, [page]);", "", ""],
    ],
  },
];

export const projectFilters = ["All", "AI + Full stack", "Full stack", "Backend", "React"];

export const skillGroups = [
  { title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "React Router"] },
  { title: "Backend & data", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { title: "AI & integrations", items: ["LLM APIs", "LangChain", "PDF parsing", "ImageKit"] },
  { title: "Learning every day", items: ["Git & GitHub", "Vite", "Auth & JWT", "Full-stack apps"] },
];

export const toolbox = ["JavaScript","React", "Node.js", "MongoDB", "AI APIs", "Tailwind CSS", "LangChain", "Agentic-AI"];
