export interface VideoProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  youtubeId: string;
  format: "long" | "short";
  featured?: boolean;
  views?: string;
  likes?: string;
  behindTheEdit?: string;
}

export const videoProjects: VideoProject[] = [
  {
    id: "1",
    slug: "nova-shyvana",
    title: "NEM O HOTFIX DA RIOT FOI SUFICIENTE PARA A NOVA SHYVANA",
    description: "Edição cinematográfica explorando a nova rework da Shyvana com transições dinâmicas e color grading intenso.",
    tags: ["gaming", "league of legends", "cinematic", "gameplay"],
    youtubeId: "zUwvMSWfiXo",
    format: "long",
    featured: true,
    views: "37K",
    likes: "3.1K",
    behindTheEdit: "Utilizei transições rápidas sincronizadas com momentos de ação, color grading com tons quentes para momentos épicos e frios para gameplay tático.",
  },
  {
    id: "2",
    slug: "gnar-gameplay",
    title: "TIVE QUE JOGAR DE GNAR",
    description: "Gameplay intensa de Gnar com edição dinâmica e efeitos visuais marcantes.",
    tags: ["gaming", "league of legends", "gameplay", "edição"],
    youtubeId: "EhugG-LIqX4",
    format: "long",
    featured: true,
    views: "25K",
    likes: "2.1K",
    behindTheEdit: "Foco em zoom cuts e motion blur nos momentos de teamfight, com trilha sonora sincronizada.",
  },
  {
    id: "3",
    slug: "streamers-tv",
    title: "Vezes que STREAMERS BRASILEIROS apareceram na TV",
    description: "Compilação cinematográfica dos melhores momentos de streamers brasileiros na televisão.",
    tags: ["compilação", "streamers", "entretenimento", "storytelling"],
    youtubeId: "Ap1p1CH8L0M",
    format: "long",
    views: "50K",
    likes: "4.2K",
  },
  {
    id: "4",
    slug: "melhores-momentos-hauz",
    title: "MELHORES MOMENTOS DA STREAM #1 - HAUZ",
    description: "Highlights da stream do Hauz com edição rápida e cortes precisos.",
    tags: ["highlights", "stream", "hauz", "entretenimento"],
    youtubeId: "Y1ppJ-vxZTY",
    format: "long",
    views: "15K",
    likes: "1.8K",
  },
  {
    id: "5",
    slug: "duo-com-ex",
    title: "Joguei Duo com a Minha Ex",
    description: "Edição com storytelling emocional e momentos engraçados.",
    tags: ["gaming", "storytelling", "entretenimento"],
    youtubeId: "FM93OmrhEFI",
    format: "long",
    featured: true,
    views: "80K",
    likes: "9.8K",
  },
  {
    id: "6",
    slug: "ficou-feliz",
    title: "Ficou MUITO feliz",
    description: "Short format com edição rápida e impactante.",
    tags: ["shorts", "highlights", "moments"],
    youtubeId: "dZlWOmh6jt0",
    format: "short",
  },
  {
    id: "7",
    slug: "chorou-sem-parar",
    title: "Chorou SEM PARAR",
    description: "Momentos emocionantes em formato curto.",
    tags: ["shorts", "emotional", "moments"],
    youtubeId: "8iGb5apmK-w",
    format: "short",
  },
  {
    id: "8",
    slug: "stompar-suporte",
    title: "STOMPAR 90% DOS JOGOS DE SUPORTE",
    description: "Dicas e gameplay em formato short.",
    tags: ["shorts", "gaming", "tips"],
    youtubeId: "JzavZxu540Y",
    format: "short",
  },
];

export const getFeaturedProjects = () => videoProjects.filter((v) => v.featured);
export const getLongFormatVideos = () => videoProjects.filter((v) => v.format === "long");
export const getShortFormatVideos = () => videoProjects.filter((v) => v.format === "short");
export const getVideoBySlug = (slug: string) => videoProjects.find((v) => v.slug === slug);
export const getSuggestedVideos = (currentSlug: string) =>
  videoProjects.filter((v) => v.slug !== currentSlug).slice(0, 4);
