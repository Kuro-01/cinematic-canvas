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
    description: "Edição explorando a nova rework da Shyvana com transições dinâmicas e color grading intenso.",
    tags: ["gaming", "league of legends", "gameplay"],
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
    description: "Compilação dos melhores momentos de streamers brasileiros na televisão.",
    tags: ["compilação", "streamers", "entretenimento"],
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
    slug: "samira-80k-dano",
    title: "80K DE DANO DE SAMIRA! FOMOS CARREGADOS POR UM FERRO ELOJOB?",
    description: "Gameplay absurda de Samira com edição intensa e momentos épicos.",
    tags: ["gaming", "league of legends", "gameplay"],
    youtubeId: "uSgf0So_csM",
    format: "long",
    views: "12K",
    likes: "1.2K",
  },
  {
    id: "7",
    slug: "tristana-riot",
    title: "A TRISTANA ELOGIADA PELO DONO DA RIOT GAMES ESTÁ EM CAMPO!",
    description: "Gameplay de Tristana com destaque especial e edição dinâmica.",
    tags: ["gaming", "league of legends", "gameplay"],
    youtubeId: "y_ZG2-idC18",
    format: "long",
    views: "18K",
    likes: "1.5K",
  },
  {
    id: "8",
    slug: "taliyah-vs-ryze",
    title: "GAMEPLAY EXPLICATIVA de TALIYAH vs RYZE! Pense como um Pro Player!",
    description: "Gameplay explicativa com edição didática e ritmo envolvente.",
    tags: ["gaming", "league of legends", "educacional", "hauz"],
    youtubeId: "lLS-5XXKq58",
    format: "long",
    views: "10K",
    likes: "900",
  },
  {
    id: "9",
    slug: "cyber-atleta-momentos",
    title: "CYBER ATLETA NA STREAM! MELHORES MOMENTOS #2",
    description: "Melhores momentos da stream com edição rápida e cortes divertidos.",
    tags: ["highlights", "stream", "league of legends"],
    youtubeId: "BTo_ozi3bGM",
    format: "long",
    views: "8K",
    likes: "700",
  },
  // Shorts
  {
    id: "10",
    slug: "ficou-feliz",
    title: "Ficou MUITO feliz",
    description: "Short format com edição rápida e impactante.",
    tags: ["shorts", "highlights", "moments"],
    youtubeId: "dZlWOmh6jt0",
    format: "short",
  },
  {
    id: "11",
    slug: "chorou-sem-parar",
    title: "Chorou SEM PARAR",
    description: "Momentos emocionantes em formato curto.",
    tags: ["shorts", "emotional", "moments"],
    youtubeId: "8iGb5apmK-w",
    format: "short",
  },
  {
    id: "12",
    slug: "stompar-suporte",
    title: "STOMPAR 90% DOS JOGOS DE SUPORTE",
    description: "Dicas e gameplay em formato short.",
    tags: ["shorts", "gaming", "tips"],
    youtubeId: "JzavZxu540Y",
    format: "short",
  },
  {
    id: "13",
    slug: "ate-o-fallen",
    title: "ATÉ o FALLEN 😅",
    description: "Momento engraçado com o Fallen em destaque.",
    tags: ["shorts", "alanzoka", "twitch"],
    youtubeId: "1kKQt0pBt5g",
    format: "short",
  },
  {
    id: "14",
    slug: "era-muito-pior",
    title: "Era MUITO pior q eu pensava 🫠",
    description: "Reação inesperada em formato curto.",
    tags: ["shorts", "bistecone", "twitch"],
    youtubeId: "UqA366a6_Ec",
    format: "short",
  },
  {
    id: "15",
    slug: "nem-ferrando",
    title: "Nem FERRANDO q era ISSO 😳",
    description: "Momento surpreendente com loud_coringa.",
    tags: ["shorts", "loud", "twitch"],
    youtubeId: "QBABJbFw9fs",
    format: "short",
  },
  {
    id: "16",
    slug: "ajudem-ele",
    title: "AJUDEM ELE ❤️😢🙏🏻",
    description: "Momento emocionante da stream.",
    tags: ["shorts", "bistecone", "twitch"],
    youtubeId: "nbEn6gbg3FA",
    format: "short",
  },
  {
    id: "17",
    slug: "plot-bizarro",
    title: "PLOT BIZARRO 😳😨",
    description: "Plot twist inesperado durante a live.",
    tags: ["shorts", "cellbit", "twitch"],
    youtubeId: "maeG6zw_SwQ",
    format: "short",
  },
  {
    id: "18",
    slug: "shorts-hauz-teste",
    title: "SHORTS HAUZ TESTE",
    description: "Short de teste do Hauz.",
    tags: ["shorts", "hauz"],
    youtubeId: "_gWk13hTNMM",
    format: "short",
  },
];

export const getFeaturedProjects = () => videoProjects.filter((v) => v.featured);
export const getLongFormatVideos = () => videoProjects.filter((v) => v.format === "long");
export const getShortFormatVideos = () => videoProjects.filter((v) => v.format === "short");
export const getVideoBySlug = (slug: string) => videoProjects.find((v) => v.slug === slug);
export const getSuggestedVideos = (currentSlug: string) =>
  videoProjects.filter((v) => v.slug !== currentSlug).slice(0, 4);
