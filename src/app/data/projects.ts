export interface AsymmetricItem {
  placeholder?: boolean;
  src?: string;
  video?: string;
  alt: string;
}

export interface ProjectImage {
  type: 'full' | 'video-full' | 'grid2' | 'grid3' | 'asymmetric' | 'asymmetric-mirror' | 'asymmetric-hero' | 'asymmetric-overlap';
  srcs: string[];
  alts: string[];
  items?: AsymmetricItem[];
  cellAspect?: string;
  gapClass?: string;
  frameClass?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  titleFr: string;
  eyebrow: string;
  category: string;
  categoryFr: string;
  cover: string;
  coverPlaceholder?: boolean;
  /** When set, the homepage tile plays this video on loop instead of showing the static cover image. */
  coverVideo?: string;
  heroImage?: string;
  description: string;
  descriptionFr: string;
  images: ProjectImage[];
  prev: { slug: string; name: string; nameFr: string } | null;
  next: { slug: string; name: string; nameFr: string } | null;
  /** Draft projects are only visible when running locally (`npm run dev`) — hidden from the public build. */
  draft?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'zaha-hadid',
    title: 'Zaha Hadid,\nthe Box',
    titleFr: 'Zaha Hadid,\nla Boîte',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Creative Direction',
    categoryFr: 'Direction créative',
    cover: 'img/003.jpg',
    description:
      "This artist's box set is a curated introduction to the work of Zaha Hadid, the Iraqi-British architect and urban planner known for her fluid, unapologetically futurist forms. Conceived as a small archive rather than a single object, it brings together posters, printed publications, a custom color chart, postcards, and a series of wooden modules abstracting the structural anchor points of the Phaeno Science Center. Each element was designed to be handled independently, so the collection reads less like a monograph and more like a physical index of Hadid's design language — proportion, material, and movement translated into print and volume.",
    descriptionFr:
      "Ce coffret d'artiste propose une introduction à l'univers de Zaha Hadid, architecte et urbaniste irako-britannique reconnue pour ses formes fluides et résolument futuristes. Conçu comme une petite archive plutôt que comme un objet unique, il rassemble des affiches, des publications imprimées, un nuancier de couleurs sur mesure, des cartes postales et une série de modules en bois qui abstraient les points d'ancrage structurels du Phaeno Science Center. Chaque élément a été pensé pour être manipulé indépendamment, de sorte que l'ensemble se lit moins comme une monographie que comme un index physique du langage de Hadid — proportion, matière et mouvement traduits en impression et en volume.",
    images: [
      {
        type: 'asymmetric-hero',
        srcs: [],
        alts: [],
        items: [
          { src: 'img/019.jpg', alt: "Zaha Hadid artist's box set — open view showing posters and printed materials" },
          { src: 'img/020.jpg', alt: 'Zaha Hadid box set — wooden modules representing the Phaeno Science Center anchor points' },
          { src: 'img/022.jpg', alt: 'Zaha Hadid box set — full contents laid out, including color chart and postcards' },
        ],
      },
      { type: 'full', srcs: ['img/023.jpg'], alts: ['Zaha Hadid box set — close-up of print and material details'] },
      { type: 'full', srcs: ['img/024.jpg'], alts: ['Zaha Hadid box set — final presentation of the complete collection'] },
    ],
    prev: null,
    next: { slug: 'baskerville', name: 'Baskerville, the Specimen', nameFr: 'Baskerville, le Spécimen' },
  },
  {
    id: 2,
    slug: 'baskerville',
    title: 'Baskerville,\nthe Specimen',
    titleFr: 'Baskerville,\nle Spécimen',
    eyebrow: 'ESAD Amiens — 2024',
    category: 'Typography',
    categoryFr: 'Typographie',
    cover: 'img/baskerville-cover.jpg',
    description:
      "This project is a three-part study of the Libre Baskerville typeface, approached as both a design object and a piece of typographic research. The first edition is iconographic, staging the letterforms within visual compositions that foreground their historical character; the second is analytical, documenting the typeface's construction, proportions, and defining details; the third is a standalone poster built around a visual drawn from Conan Doyle's The Hound of the Baskervilles, tying the specimen back to the literary reference embedded in its name.",
    descriptionFr:
      "Ce projet propose une étude en trois volets de la police Libre Baskerville, envisagée à la fois comme objet de design et comme travail de recherche typographique. La première édition, iconographique, met en scène les lettres au sein de compositions visuelles qui soulignent leur caractère historique ; la seconde, analytique, documente la construction, les proportions et les détails caractéristiques de la police ; la troisième prend la forme d'une affiche autonome construite autour d'un visuel inspiré du Chien des Baskerville de Conan Doyle, reliant ainsi le spécimen typographique à la référence littéraire inscrite dans son nom.",
    images: [
      { type: 'grid2', srcs: ['img/025.jpg', 'img/026.jpg'], alts: ['Baskerville type specimen — iconographic edition detail', 'Baskerville type specimen — typographic compositions using Libre Baskerville'] },
      { type: 'grid2', srcs: ['img/027.jpg', 'img/028.jpg'], alts: ["Baskerville type specimen — edition detailing the font's characteristics", 'Baskerville poster inspired by The Hound of the Baskervilles'] },
    ],
    prev: { slug: 'zaha-hadid', name: 'Zaha Hadid, the Box', nameFr: 'Zaha Hadid, la Boîte' },
    next: { slug: 'haute-couture', name: 'Haute Couture', nameFr: 'Haute Couture' },
  },
  {
    id: 3,
    slug: 'haute-couture',
    title: 'Haute Couture',
    titleFr: 'Haute Couture',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Editorial Design',
    categoryFr: 'Design éditorial',
    cover: 'img/haute-couture-cover.jpg',
    description:
      "Produced in collaboration with the school's documentation center, this editorial project takes the form of an archive dedicated to haute couture and the wider fashion industry. Photography and primary documentation — clippings, references, and printed matter drawn from the center's collection — are brought together into a single bound edition, structured to read as both a research tool and a visual object in its own right.",
    descriptionFr:
      "Réalisée en collaboration avec le centre de documentation de l'école, cette édition prend la forme d'une archive consacrée à la haute couture et, plus largement, à l'industrie de la mode. Photographies et documents de premier ordre — coupures, références et imprimés issus des fonds du centre — sont rassemblés en une seule édition reliée, pensée pour se lire à la fois comme un outil de recherche et comme un objet visuel à part entière.",
    images: [
      { type: 'grid2', srcs: ['img/016.jpg', 'img/017.jpg'], alts: ['Haute Couture edition — detail of the printed archive', 'Haute Couture edition — spread combining photography and documentation'] },
      { type: 'full', srcs: ['img/018.jpg'], alts: ['Haute Couture edition — full book overview'] },
    ],
    prev: { slug: 'baskerville', name: 'Baskerville, the Specimen', nameFr: 'Baskerville, le Spécimen' },
    next: { slug: 'slash', name: 'Slash', nameFr: 'Slash' },
  },
  {
    id: 4,
    slug: 'slash',
    title: 'Slash',
    titleFr: 'Slash',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Graphic Design',
    categoryFr: 'Design graphique',
    cover: 'img/slash-cover.jpg',
    description:
      "This experimental poster grew out of a screen-printing workshop built around the pop icon Chappell Roan. Working as a group, we explored typography that could carry the singer's visual language — cast here as Joan of Arc — drawing in particular on Gothic blackletter forms associated with the Middle Ages to bridge a contemporary pop persona with a historical register.",
    descriptionFr:
      "Cette affiche expérimentale est née d'un atelier de sérigraphie construit autour de l'icône pop Chappell Roan. En groupe, nous avons exploré une typographie capable de porter l'univers visuel de la chanteuse — représentée ici en Jeanne d'Arc — en nous appuyant notamment sur des lettres gothiques associées au Moyen Âge, pour faire dialoguer une figure pop contemporaine avec un registre historique.",
    images: [
      { type: 'full', srcs: ['img/015.jpg'], alts: ['Slash screen-printed poster — Chappell Roan as Joan of Arc, Gothic blackletter typography'] },
    ],
    prev: { slug: 'haute-couture', name: 'Haute Couture', nameFr: 'Haute Couture' },
    next: { slug: 'vinyls', name: 'Vinyls', nameFr: 'Vinyles' },
  },
  {
    id: 5,
    slug: 'vinyls',
    title: 'Vinyls',
    titleFr: 'Vinyles',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Art Direction',
    categoryFr: 'Direction artistique',
    cover: 'img/011.jpg',
    description:
      "\"Parallel Lines\" is a research and design project centered on vinyl record covers from the 1960s through the 1980s. Rather than reproducing existing artwork, I studied the visual language of major artists from that period — their typography, color, and composition — and used it as a starting point to imagine a new set of covers in tribute to their work.",
    descriptionFr:
      "« Parallel Lines » est un projet de recherche et de design centré sur les pochettes de disques vinyle des années 1960 à 1980. Plutôt que de reproduire des visuels existants, j'ai étudié le langage visuel des grands artistes de cette période — typographie, couleur, composition — pour m'en servir de point de départ et imaginer un nouvel ensemble de pochettes en hommage à leur travail.",
    images: [
      {
        type: 'grid3',
        srcs: ['img/004.jpg', 'img/005.jpg', 'img/006.jpg', 'img/007.jpg', 'img/009.jpg', 'img/010.jpg'],
        alts: [
          'Parallel Lines — reimagined vinyl record cover, visual 1',
          'Parallel Lines — reimagined vinyl record cover, visual 2',
          'Parallel Lines — reimagined vinyl record cover, visual 3',
          'Parallel Lines — reimagined vinyl record cover, visual 4',
          'Parallel Lines — reimagined vinyl record cover, visual 5',
          'Parallel Lines — reimagined vinyl record cover, visual 6',
        ],
      },
    ],
    prev: { slug: 'slash', name: 'Slash', nameFr: 'Slash' },
    next: { slug: 'metamorphosis', name: 'Metamorphosis', nameFr: 'Métamorphose' },
  },
  {
    id: 6,
    slug: 'metamorphosis',
    title: 'Metamorphosis',
    titleFr: 'Métamorphose',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Illustration',
    categoryFr: 'Illustration',
    cover: 'img/001.jpg',
    description:
      "For this project I explored form-making through collage and photomontage, building a diorama entirely from cut fashion-magazine imagery. The aim was a composition that felt at once organic and hybrid, where figures, textures, and fragments bleed into one another and resist a single, stable reading.",
    descriptionFr:
      "Pour ce projet, j'ai exploré la création de formes par le collage et le photomontage, en construisant un diorama entièrement à partir de découpes de magazines de mode. L'objectif était une composition à la fois organique et hybride, où figures, textures et fragments se mêlent les uns aux autres et résistent à une lecture unique et stable.",
    images: [],
    prev: { slug: 'vinyls', name: 'Vinyls', nameFr: 'Vinyles' },
    next: { slug: 'portofino', name: 'Portofino', nameFr: 'Portofino' },
  },
  {
    id: 7,
    slug: 'portofino',
    title: 'Portofino',
    titleFr: 'Portofino',
    eyebrow: 'Prépa — 2025',
    category: 'Brand Design',
    categoryFr: 'Design de marque',
    cover: 'img/030.jpg',
    description:
      "This piece takes its starting point from Dalida's song \"Love in Portofino\", translating its emotional register — warmth, elegance, nostalgia — into a custom typographic treatment. The letter \"P\" was specifically reworked to follow the draped movement of fabric, anchoring the whole composition in a feeling rather than a literal illustration.",
    descriptionFr:
      "Ce travail prend pour point de départ la chanson de Dalida « Love in Portofino », dont il traduit le registre émotionnel — chaleur, élégance, nostalgie — en un traitement typographique sur mesure. La lettre « P » a été spécifiquement retravaillée pour suivre le mouvement drapé d'un tissu, ancrant l'ensemble de la composition dans un sentiment plutôt que dans une illustration littérale.",
    images: [
      { type: 'full', srcs: ['img/033.jpg'], alts: ['Portofino typography — detail of the custom lettering'] },
      { type: 'grid2', srcs: ['img/040.jpg', 'img/031.jpg'], alts: ['Portofino typography — full composition', 'Portofino typography — detail of the modulated letter P'] },
    ],
    prev: { slug: 'metamorphosis', name: 'Metamorphosis', nameFr: 'Métamorphose' },
    next: { slug: 'portofino-font', name: 'Portofino, Font', nameFr: 'Portofino, Police' },
  },
  {
    id: 8,
    slug: 'portofino-font',
    title: 'Portofino,\nFont',
    titleFr: 'Portofino,\nPolice',
    eyebrow: 'Prépa — 2025',
    category: 'Typography',
    categoryFr: 'Typographie',
    cover: 'img/035.jpg',
    description:
      "Building on the first Portofino piece, this project develops the typographic concept into a complete font specimen. The extended exploration pushes the custom letterforms — originally inspired by Dalida's song — across a fuller range of compositions, testing their versatility and confirming the elegance of the original concept at a larger scale.",
    descriptionFr:
      "Prolongeant le premier volet du projet Portofino, ce travail développe le concept typographique jusqu'à un spécimen de police complet. Cette exploration étendue déploie les lettres personnalisées — initialement inspirées de la chanson de Dalida — à travers un éventail plus large de compositions, mettant à l'épreuve leur polyvalence et confirmant, à plus grande échelle, l'élégance du concept d'origine.",
    images: [
      { type: 'full', srcs: ['img/002.jpg'], alts: ['Portofino font specimen — complete typeface showcase'] },
    ],
    prev: { slug: 'portofino', name: 'Portofino', nameFr: 'Portofino' },
    next: { slug: 'slay', name: 'Slay', nameFr: 'Slay' },
  },
  {
    id: 9,
    slug: 'slay',
    title: 'Slay',
    titleFr: 'Slay',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Graphic Design',
    categoryFr: 'Design graphique',
    cover: 'img/049.jpg',
    description:
      "For this project we were asked to choose a word from two lists — everyday vocabulary and Generation Z slang — and build a visual response around it. I chose the word \"slay\" and developed it across three distinct visuals, exploring how a single piece of contemporary slang can be given very different graphic identities.",
    descriptionFr:
      "Pour ce projet, nous devions choisir un mot parmi deux listes : vocabulaire courant et expressions de la génération Z, puis construire une réponse visuelle autour de ce mot. J'ai choisi « slay » et l'ai développé à travers trois visuels distincts, en explorant la manière dont une même expression contemporaine peut recevoir des identités graphiques radicalement différentes.",
    images: [],
    prev: { slug: 'portofino-font', name: 'Portofino, Font', nameFr: 'Portofino, Police' },
    next: { slug: 'ia-vs-non-ia', name: 'IA vs Non IA', nameFr: 'IA vs Non IA' },
  },
  {
    id: 10,
    slug: 'ia-vs-non-ia',
    title: 'IA vs Non IA',
    titleFr: 'IA vs Non IA',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Research',
    categoryFr: 'Recherche',
    cover: 'img/037.jpg',
    heroImage: 'img/008.jpg',
    description:
      "This project set out to compare AI-assisted and traditional design processes side by side, through four vinyl record covers — two generated with AI, two built entirely by hand — all inspired by Solann's song \"Rome\". I used the pairing to translate the song into two contrasting visual languages, testing where each approach felt strongest and where it fell short.",
    descriptionFr:
      "Ce projet visait à confronter processus de création assistée par IA et processus traditionnel, à travers quatre pochettes de vinyle — deux générées par IA, deux entièrement réalisées à la main — toutes inspirées de la chanson « Rome » de Solann. Je me suis appuyée sur cette confrontation pour traduire la chanson en deux langages visuels contrastés, et pour interroger les forces et les limites de chaque approche.",
    images: [
      { type: 'grid2', srcs: ['img/012.jpg', 'img/014.jpg'], alts: ['IA vs Non IA — vinyl cover exploring AI vs traditional design, visual 1', 'IA vs Non IA — vinyl cover exploring AI vs traditional design, visual 2'] },
      { type: 'grid3', srcs: ['img/013.jpg', 'img/036.jpg', 'img/037.jpg'], alts: ['IA vs Non IA — vinyl cover exploring AI vs traditional design, visual 3', 'IA vs Non IA — vinyl cover exploring AI vs traditional design, visual 4', 'IA vs Non IA — vinyl cover exploring AI vs traditional design, visual 5'] },
    ],
    prev: { slug: 'slay', name: 'Slay', nameFr: 'Slay' },
    next: { slug: 'the-stranger', name: 'The Stranger', nameFr: "L'Étranger" },
  },
  {
    id: 11,
    slug: 'the-stranger',
    title: 'The Stranger',
    titleFr: "L'Étranger",
    eyebrow: 'Prépa — 2025',
    category: 'Print Design',
    categoryFr: 'Design print',
    cover: 'img/050.jpg',
    description:
      "For this project I imagined and designed three posters inspired by Albert Camus's The Stranger, each one translating a different facet of the novel's tone — detachment, heat, and absurdity — into a distinct visual composition. The deliberately clumsy typography — the missing accent on the É in \"L'ÉTRANGER,\" the apostrophe that seems almost detached from the \"e\" — visually echoes the novel's absurdism: like Meursault, a stranger to the world around him, the lettering itself seems to come slightly unmoored from the words it carries. On the first poster, the word \"camus,\" placed at the top, points to the sun, but also to the turn the story takes and the scale it eventually reaches.",
    descriptionFr:
      "Pour ce projet, j'ai imaginé et conçu trois affiches inspirées de L'Étranger d'Albert Camus, chacune traduisant une facette différente du ton du roman — détachement, chaleur, absurde — en une composition visuelle distincte. Le jeu typographique volontairement maladroit — l'accent absent sur le É de « L'ÉTRANGER », l'apostrophe presque détachée du « e » — traduit visuellement l'absurde : comme Meursault, étranger au monde qui l'entoure, la typographie semble elle aussi se désolidariser des mots qu'elle porte. Sur la première affiche, le mot « camus » placé en haut renvoie au soleil, mais aussi au tournant que prend le récit et à l'ampleur qu'il finit par prendre.",
    images: [],
    prev: { slug: 'ia-vs-non-ia', name: 'IA vs Non IA', nameFr: 'IA vs Non IA' },
    next: { slug: 'the-passers-by', name: 'The Passers-by', nameFr: 'Les Passants' },
  },
  {
    id: 12,
    slug: 'the-passers-by',
    title: 'The Passers-by',
    titleFr: 'Les Passants',
    eyebrow: 'ESAD Amiens — 2025',
    category: 'Photography',
    categoryFr: 'Photographie',
    cover: 'img/051.jpg',
    description:
      "This photographic series focuses on ordinary people — passersby — observed through their gestures and unguarded attitudes. Each subject is presented through two juxtaposed images: one captured candidly, without their knowledge, and one taken with their awareness and cooperation, turning the work into a study of how presence in front of a camera changes behavior.",
    descriptionFr:
      "Cette série photographique s'intéresse à des gens ordinaires — des passants — observés à travers leurs gestes et leurs attitudes spontanées. Chaque sujet est présenté à travers deux images juxtaposées : l'une saisie à son insu, l'autre prise avec sa conscience et sa participation, faisant de ce travail une étude sur la manière dont la présence face à un appareil photo modifie le comportement.",
    images: [
      { type: 'grid2', srcs: ['img/052.jpg', 'img/053.jpg'], alts: ['The Passers-by — candid and posed portrait juxtaposition, subject 1', 'The Passers-by — candid and posed portrait juxtaposition, subject 2'] },
      { type: 'full', srcs: ['img/054.jpg'], alts: ['The Passers-by — full series overview'] },
    ],
    prev: { slug: 'the-stranger', name: 'The Stranger', nameFr: "L'Étranger" },
    next: { slug: 'nomadic-workplace', name: 'Nomadic Workplace', nameFr: 'Nomadic Workplace' },
  },
  {
    id: 13,
    slug: 'nomadic-workplace',
    title: 'Nomadic Workplace',
    titleFr: 'Nomadic Workplace',
    eyebrow: 'Personal Project — 2026',
    category: 'Graphic Design',
    categoryFr: 'Design graphique',
    cover: 'img/nomadic-workplace-cover.jpg',
    coverVideo: 'video/untitled-preview.mp4',
    description:
      "Made during an Erasmus semester at KISD in Cologne, Germany, this group project examines the idea of the workspace and how each person comes to define it for themselves. Following a tour of the school, we selected a handful of rooms and spaces that had caught our attention, using them as landmarks for a narrative built to connect with the rest of the class. The result takes the form of a guided-tour video conceived as a mixed-media piece, blending several visual and narrative approaches. Its soundtrack combines original audio recordings — captured and edited by the group — with a music excerpt.",
    descriptionFr:
      "Réalisé lors d'un semestre Erasmus à la KISD de Cologne, en Allemagne, ce projet de groupe interroge la notion d'espace de travail et la manière dont chacun se l'approprie. À la suite d'une visite de l'école, nous avons sélectionné plusieurs salles et espaces qui avaient particulièrement retenu notre attention, pour en faire les repères d'un parcours capable de créer un lien avec le reste de la classe. Le projet prend la forme d'une visite guidée en vidéo, pensée comme un mixed media mêlant plusieurs approches visuelles et narratives. La bande sonore associe des prises de son originales, enregistrées et montées par nos soins, à un extrait musical.",
    images: [
      { type: 'video-full', srcs: ['video/untitled-preview.mp4'], alts: ['Nomadic Workplace — AR experience preview'] },
    ],
    prev: { slug: 'the-passers-by', name: 'The Passers-by', nameFr: 'Les Passants' },
    next: { slug: 'untitled-02', name: 'Feed your Head', nameFr: 'Feed your Head' },
  },
  {
    id: 14,
    slug: 'untitled-02',
    title: 'Feed your Head',
    titleFr: 'Feed your Head',
    eyebrow: 'Untitled Project — 2026',
    category: 'Editorial Design',
    categoryFr: 'Design éditorial',
    cover: 'img/untitled-02-mockup.jpg',
    description:
      "During an Erasmus exchange at KISD in Cologne, Germany, I had the chance to dig deeper into the music and culture of the 1960s and 70s. We were invited to choose a topic to present, and I chose to talk about this song — noticing how closely its themes echoed those of Jefferson Airplane's \"White Rabbit\": drug use, counterculture, and the wider social and cultural movements of the era. That reflection went on to inspire a poster responding to these themes.",
    descriptionFr:
      "Lors de mon séjour Erasmus à Cologne, en Allemagne, j'ai eu l'occasion d'approfondir mes connaissances sur les années 60 et 70. Nous étions invités à choisir un sujet de discussion, j'ai alors choisi de parler de cette chanson et j'ai remarqué que les thèmes abordés faisaient écho à White Rabbit de Jefferson Airplane : la consommation de drogues, la contre-culture, ainsi que les mouvements sociaux et culturels de cette époque. Cette réflexion m'a ensuite inspiré la création d'une affiche en réponse à ces thématiques.",
    images: [],
    prev: { slug: 'nomadic-workplace', name: 'Nomadic Workplace', nameFr: 'Nomadic Workplace' },
    next: { slug: 'untitled-03', name: 'Business Card, CT.', nameFr: 'Carte de visite, CT.' },
  },
  {
    id: 15,
    slug: 'untitled-03',
    title: 'Business Card,\nCT.',
    titleFr: 'Carte de visite,\nCT.',
    eyebrow: 'Untitled Project — 2026',
    category: 'Typography',
    categoryFr: 'Typographie',
    cover: 'img/untitled-03-business-card.jpg',
    description:
      "This project was conceived as a branding exercise built around business cards for my father, developing a visual identity of his own tailored to his line of work.",
    descriptionFr:
      "Ce projet a été pensé comme un exercice de branding autour de cartes de visite pour mon père, avec la volonté de lui créer une identité visuelle propre, pensée pour son activité.",
    images: [],
    prev: { slug: 'untitled-02', name: 'Feed your Head', nameFr: 'Feed your Head' },
    next: null,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
