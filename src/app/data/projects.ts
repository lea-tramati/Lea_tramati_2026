export interface ProjectImage {
  type: 'full' | 'grid2' | 'grid3';
  srcs: string[];
  alts: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  categoryFr: string;
  cover: string;
  heroImage?: string;
  description: string;
  descriptionFr: string;
  images: ProjectImage[];
  prev: { slug: string; name: string } | null;
  next: { slug: string; name: string } | null;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'zaha-hadid',
    title: 'Zaha Hadid,\nthe Box',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Creative Direction',
    categoryFr: 'Direction créative',
    cover: 'img/003.jpg',
    description:
      "This artist's box set dedicated to Zaha Hadid — Iraqi-British architect and urban planner — offers an introduction to her world. It brings together posters, publications, a color chart, postcards, and wooden modules representing the anchor points of the Phaeno Science Center.",
    descriptionFr:
      "Ce coffret d'artiste dédié à Zaha Hadid — architecte et urbaniste irako-britannique — offre une introduction à son univers. Il rassemble des affiches, des publications, un nuancier de couleurs, des cartes postales et des modules en bois représentant les points d'ancrage du Phaeno Science Center.",
    images: [
      { type: 'full', srcs: ['img/019.jpg'], alts: ['Zaha Hadid box detail view'] },
      { type: 'grid2', srcs: ['img/020.jpg', 'img/022.jpg'], alts: ['Box contents view', 'Box overview'] },
      { type: 'full', srcs: ['img/023.jpg'], alts: ['Design details'] },
      { type: 'full', srcs: ['img/024.jpg'], alts: ['Final presentation'] },
    ],
    prev: null,
    next: { slug: 'baskerville', name: 'Baskerville, the specimen' },
  },
  {
    id: 2,
    slug: 'baskerville',
    title: 'Baskerville,\nthe Specimen',
    eyebrow: 'ESAD Amiens — 2024',
    category: 'Typography',
    categoryFr: 'Typographie',
    cover: 'img/038.jpg',
    description:
      "This project focuses on the Libre Baskerville font in three parts: an iconographic edition showcasing the typography in visual compositions; an edition detailing its characteristics; and a poster featuring a visual inspired by Conan Doyle's The Hound of the Baskervilles.",
    descriptionFr:
      "Ce projet porte sur la police Libre Baskerville en trois parties : une édition iconographique mettant en valeur la typographie dans des compositions visuelles ; une édition détaillant ses caractéristiques ; et une affiche avec un visuel inspiré du roman Le Chien des Baskerville de Conan Doyle.",
    images: [
      { type: 'grid2', srcs: ['img/025.jpg', 'img/026.jpg'], alts: ['Baskerville specimen detail view', 'Typography compositions'] },
      { type: 'grid2', srcs: ['img/027.jpg', 'img/028.jpg'], alts: ['Specimen details', 'Poster overview'] },
    ],
    prev: { slug: 'zaha-hadid', name: 'Zaha Hadid, the box' },
    next: { slug: 'haute-couture', name: 'Haute Couture' },
  },
  {
    id: 3,
    slug: 'haute-couture',
    title: 'Haute Couture',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Editorial Design',
    categoryFr: 'Design éditorial',
    cover: 'img/039.jpg',
    description:
      'In collaboration with the documentation center at our institution. This edition serves as an archive and brings together various elements related to haute couture and the fashion industry. It combines photography and documentation in a single collection.',
    descriptionFr:
      "En collaboration avec le centre de documentation de notre établissement. Cette édition sert d'archive et rassemble divers éléments liés à la haute couture et à l'industrie de la mode. Elle combine photographie et documentation dans une seule collection.",
    images: [
      { type: 'grid2', srcs: ['img/016.jpg', 'img/017.jpg'], alts: ['Book detail', 'Book contents view'] },
      { type: 'full', srcs: ['img/018.jpg'], alts: ['Book overview'] },
    ],
    prev: { slug: 'baskerville', name: 'Baskerville, the specimen' },
    next: { slug: 'slash', name: 'Slash' },
  },
  {
    id: 4,
    slug: 'slash',
    title: 'Slash',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Graphic Design',
    categoryFr: 'Design graphique',
    cover: 'img/015.jpg',
    description:
      'This experimental poster is the result of a screen printing workshop inspired by the icon Chappell Roan. As a group, we sought to experiment with typography that resonated with the image of the singer, depicted as Joan of Arc, playing in particular with Gothic letters associated with the Middle Ages.',
    descriptionFr:
      "Cette affiche expérimentale est le fruit d'un atelier de sérigraphie inspiré de l'icône Chappell Roan. En groupe, nous avons cherché à expérimenter une typographie en résonance avec l'image de la chanteuse, représentée en Jeanne d'Arc, en jouant notamment avec des lettres gothiques associées au Moyen Âge.",
    images: [],
    prev: { slug: 'haute-couture', name: 'Haute Couture' },
    next: { slug: 'vinyls', name: 'Vinyls' },
  },
  {
    id: 5,
    slug: 'vinyls',
    title: 'Vinyls',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Art Direction',
    categoryFr: 'Direction artistique',
    cover: 'img/011.jpg',
    description:
      '"Parallel Lines" is a research project on vinyl record covers from the period between the 1960s and 1980s. I drew inspiration from the major artists of this period, paying tribute to them by imagining new visuals.',
    descriptionFr:
      "« Parallel Lines » est un projet de recherche sur les pochettes de disques vinyle de la période entre les années 1960 et 1980. Je me suis inspirée des grands artistes de cette époque, leur rendant hommage en imaginant de nouveaux visuels.",
    images: [
      {
        type: 'grid3',
        srcs: ['img/004.jpg', 'img/005.jpg', 'img/006.jpg', 'img/007.jpg', 'img/009.jpg', 'img/010.jpg'],
        alts: ['Vinyl 1', 'Vinyl 2', 'Vinyl 3', 'Vinyl 4', 'Vinyl 5', 'Vinyl 6'],
      },
    ],
    prev: { slug: 'slash', name: 'Slash' },
    next: { slug: 'metamorphosis', name: 'Metamorphosis' },
  },
  {
    id: 6,
    slug: 'metamorphosis',
    title: 'Metamorphosis',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Illustration',
    categoryFr: 'Illustration',
    cover: 'img/001.jpg',
    description:
      'For this project, I explored the creation of forms through a collage-photomontage made from fashion magazines to form a diorama. The intention was to create a composition that was both organic and hybrid, where the elements blend and transform.',
    descriptionFr:
      "Pour ce projet, j'ai exploré la création de formes à travers un collage-photomontage réalisé à partir de magazines de mode pour former un diorama. L'intention était de créer une composition à la fois organique et hybride, où les éléments se mélangent et se transforment.",
    images: [],
    prev: { slug: 'vinyls', name: 'Vinyls' },
    next: { slug: 'portofino', name: 'Portofino' },
  },
  {
    id: 7,
    slug: 'portofino',
    title: 'Portofino',
    eyebrow: 'Prépa — 2025',
    category: 'Brand Design',
    categoryFr: 'Design de marque',
    cover: 'img/030.jpg',
    description:
      "For this work, I wanted to draw inspiration from Dalida's song \"Love in Portofino\", creating a typography linked to feelings — creating a sense of warmth and elegance. I modulated the letter \"P\" so that it follows the shape of the fabric.",
    descriptionFr:
      "Pour ce travail, je voulais m'inspirer de la chanson de Dalida « Love in Portofino », en créant une typographie liée aux sentiments — créant un sentiment de chaleur et d'élégance. J'ai modulé la lettre « P » pour qu'elle suive la forme du tissu.",
    images: [
      { type: 'full', srcs: ['img/033.jpg'], alts: ['Portofino detail view'] },
      { type: 'grid2', srcs: ['img/040.jpg', 'img/031.jpg'], alts: ['Portofino typography', 'Portofino letter detail'] },
    ],
    prev: { slug: 'metamorphosis', name: 'Metamorphosis' },
    next: { slug: 'portofino-font', name: 'Portofino, font' },
  },
  {
    id: 8,
    slug: 'portofino-font',
    title: 'Portofino,\nFont',
    eyebrow: 'Prépa — 2025',
    category: 'Typography',
    categoryFr: 'Typographie',
    cover: 'img/035.jpg',
    description:
      "Following the first part of the Portofino project, I wanted to develop the typographic concept further by creating a complete font specimen. This extended exploration showcases the versatility and elegance of the custom letterforms inspired by Dalida's iconic song.",
    descriptionFr:
      "Suite à la première partie du projet Portofino, je souhaitais approfondir le concept typographique en créant un spécimen de police complet. Cette exploration étendue met en valeur la polyvalence et l'élégance des formes de lettres personnalisées inspirées de la chanson iconique de Dalida.",
    images: [
      { type: 'full', srcs: ['img/002.jpg'], alts: ['Portofino font specimen'] },
    ],
    prev: { slug: 'portofino', name: 'Portofino' },
    next: { slug: 'slay', name: 'Slay' },
  },
  {
    id: 9,
    slug: 'slay',
    title: 'Slay',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Editorial Design',
    categoryFr: 'Design éditorial',
    cover: 'img/049.jpg',
    description:
      'In this project, we had to choose a word from two lists: commonly used words and words used by Generation Z. I chose the word "slay" and wanted to represent it through three distinct visuals.',
    descriptionFr:
      "Dans ce projet, nous devions choisir un mot parmi deux listes : des mots couramment utilisés et des mots utilisés par la génération Z. J'ai choisi le mot « slay » et je souhaitais le représenter à travers trois visuels distincts.",
    images: [
      { type: 'grid3', srcs: ['img/042.jpg', 'img/043.jpg', 'img/047.jpg'], alts: ['Slay visual 1', 'Slay visual 2', 'Slay visual 3'] },
    ],
    prev: { slug: 'portofino-font', name: 'Portofino, font' },
    next: { slug: 'ia-vs-non-ia', name: 'IA vs Non IA' },
  },
  {
    id: 10,
    slug: 'ia-vs-non-ia',
    title: 'IA vs Non IA',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Research',
    categoryFr: 'Recherche',
    cover: 'img/037.jpg',
    heroImage: 'img/008.jpg',
    description:
      'In this project, we had to work on 4 vinyl covers — 2 AI-generated and 2 non-AI — exploring the differences in design approaches, inspired by the song "Rome" by Solann. I searched to translate the song through visual elements and contrasting styles.',
    descriptionFr:
      "Dans ce projet, nous devions travailler sur 4 pochettes de vinyles — 2 générées par IA et 2 non-IA — explorant les différences d'approches de design, inspirées de la chanson « Rome » de Solann. J'ai cherché à traduire la chanson à travers des éléments visuels et des styles contrastés.",
    images: [
      { type: 'grid2', srcs: ['img/012.jpg', 'img/014.jpg'], alts: ['IA vs Non IA image 2', 'IA vs Non IA image 3'] },
      { type: 'grid3', srcs: ['img/013.jpg', 'img/036.jpg', 'img/037.jpg'], alts: ['IA image 4', 'IA image 5', 'IA image 6'] },
    ],
    prev: { slug: 'slay', name: 'Slay' },
    next: { slug: 'the-stranger', name: 'The Stranger' },
  },
  {
    id: 11,
    slug: 'the-stranger',
    title: 'The Stranger',
    eyebrow: 'Prépa — 2025',
    category: 'Print Design',
    categoryFr: 'Design print',
    cover: 'img/050.jpg',
    description:
      'I wanted for this project to imagine and represent three posters inspired by The Stranger by Albert Camus.',
    descriptionFr:
      "Je souhaitais pour ce projet imaginer et représenter trois affiches inspirées de L'Étranger d'Albert Camus.",
    images: [],
    prev: { slug: 'ia-vs-non-ia', name: 'IA vs Non IA' },
    next: { slug: 'the-passers-by', name: 'The Passers-by' },
  },
  {
    id: 12,
    slug: 'the-passers-by',
    title: 'The Passers-by',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Photography',
    categoryFr: 'Photographie',
    cover: 'img/051.jpg',
    description:
      'In this project, I sought to capture ordinary people — passersby — focusing on their gestures and attitudes. I explore their behavior in front of the camera by juxtaposing two images: one taken without their knowledge.',
    descriptionFr:
      "Dans ce projet, j'ai cherché à capturer des gens ordinaires — des passants — en me concentrant sur leurs gestes et attitudes. J'explore leur comportement face à l'appareil photo en juxtaposant deux images : l'une prise à leur insu.",
    images: [
      { type: 'grid2', srcs: ['img/052.jpg', 'img/053.jpg'], alts: ['Passers-by visual 2', 'Passers-by visual 3'] },
      { type: 'full', srcs: ['img/054.jpg'], alts: ['Passers-by visual 4'] },
    ],
    prev: { slug: 'the-stranger', name: 'The Stranger' },
    next: null,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
