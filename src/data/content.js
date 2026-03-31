// --- DATOS REALES DE BARÜ ---

export const CREATOR = {
  name: "BÁRBARA OBREQUE",
  alias: "BARÜ",
  ig: "@siendobarbara",
  tiktok: "@siendomuybarbara",
  tagline: "CREADORA UGC • LIFESTYLE & BEAUTY",
  bio: "¡Hola! Soy Bárbara. Me apasiona crear contenido auténtico que no parezca un anuncio, sino una recomendación de tu mejor amiga. Ayudo a las marcas a conectar genuinamente con su audiencia a través de storytelling real y estética visual.",
  linktree: "https://linktr.ee/barbaraobreque",
  tiktokLink: "https://www.tiktok.com/@siendomuybarbara",
  igLink: "https://www.instagram.com/siendobarbara/",
  email: "baru2025@gmail.com",
  stats: {
    tiktokLikes: "2.2M",
    tiktokFollowers: "32.7K",
    igFollowers: "8.073",
    topIgComments: "140",
    topView: "4.9M",
    engagement: "~67x",
    totalRedes: "40.8K",
  },
};

export const PORTFOLIO = [
  {
    id: 1,
    client: "Secret Desodorantes",
    category: "Brand Deal · UGC Orgánico",
    views: "4.9M Vistas",
    platform: "TikTok + Instagram",
    badge: "🔥 Viral",
    // TODO: Reemplazar con imagen real del contenido de Bárbara
    image: "/images/img2.jpeg",
    video: "/videos/secret_ad.mp4",
    color: "from-orange-400 to-orange-500",
  },
  {
    id: 2,
    client: "Ekos Fusión",
    category: "Reseña Gastronómica · Lifestyle",
    views: "99.5K Vistas",
    platform: "TikTok + Instagram",
    badge: "📍 Providencia",
    // TODO: Reemplazar con imagen real del contenido de Bárbara
    image: "/images/img1.jpeg",
    color: "from-rose-400 to-orange-400",
  },
];

export const TOP_VIDEOS = [
  {
    label: "ChatGPT carísimo",
    views: "140 Cmnts",
    desc: "Post orgánico más viral, humor y tips",
  },
  {
    label: "Viral Máximo · ChrisHSC",
    views: "4.9M",
    desc: "Su mayor carta de presentación para marcas",
  },
  {
    label: "Campaña Secret",
    views: "1.2M",
    desc: "Contenido orgánico para marca reconocida",
  },
  {
    label: "Reseña Ekos",
    views: "99.5K",
    desc: "Estética y recomendación gastronómica",
  },
  {
    label: "Rutina Skincare",
    views: "45K",
    desc: "Lifestyle y Beauty aesthetic",
  },
];

export const BRANDS = [
  {
    name: "Secret Desodorantes",
    tag: "#tecuentomisecreto",
    type: "Colaboración Pagada",
  },
  { name: "Ekos Fusión", tag: "Reseña Gastro", type: "Canje/Invitación" },
  {
    name: "Canva / CapCut / ChatGPT",
    tag: "Tech & Creación",
    type: "Orgánico",
  },
];

// --- ANIMACIONES BASE ---

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
