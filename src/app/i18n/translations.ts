export const translations = {
  en: {
    nav: {
      work: "Selected Work",
      workBack: "← Works",
      cv: "CV",
      contact: "Contact",
      lang: "FR",
    },
    hero: {
      sub: "GRAPHIC DESIGNER • ESAD AMIENS",
      cta: "EXPLORE WORK",
    },
    home: {
      sectionLabel: "Selected Work",
      sectionTitle: "SELECTED\nPROJECTS",
    },
    project: {
      description: "Description.",
      prev: "Previous Project",
      next: "Next Project",
      back: "Back",
      allWorks: "All Works",
    },
    footer: {
      tagline:
        "Have a project in mind? Let's discuss how we can transform your vision into reality.",
      copyright: "© 2026 Léa Tramati",
    },
    cv: {
      contact: "Contact",
      software: "Software",
      languages: "Languages",
      skills: "Key Skills",
      tag: "Graphic Design Student",
      profile:
        "Passionate about graphic design, I am continuing my studies at the Amiens School of Art and Design. My practice combines typography, editorial design, and visual identity — always informed by a close attention to material and conceptual rigour.",
      experiences: "Experiences",
      education: "Education",
      exp: [
        {
          year: "2024 — 2025",
          title: "Social Media Manager, ESAD Amiens",
          items: ["Managing Instagram", "Event coverage", "Newsletter creation"],
        },
        {
          year: "2018 — 2025",
          title: "Theater Center Facilitator",
          items: ["Workshop support", "Creative activities", "Supervision of children"],
        },
        {
          year: "2023",
          title: "Seasonal Staff — Municipal Swimming Pool",
          items: ["Reception", "Changing rooms management", "Maintenance"],
        },
      ],
      edu: [
        { year: "2024", title: "Graphic Design", institution: "ESAD Amiens" },
        { year: "2023", title: "Artistic Preparation", institution: "Prép'art" },
        { year: "2023", title: "General Baccalaureate", institution: "Lycée" },
        { year: "2020", title: "Diplôme National du Brevet", institution: "Collège" },
      ],
      softwareList: ["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "After Effects", "HTML & CSS"],
      languageList: [
        { lang: "French", level: "Native" },
        { lang: "English", level: "B2" },
        { lang: "Spanish", level: "B2" },
      ],
      skillList: [
        "Communication design",
        "Web & print mock-ups",
        "Social media management",
        "Teamwork",
        "Creativity & adaptability",
      ],
    },
  },

  fr: {
    nav: {
      work: "Travaux sélectionnés",
      workBack: "← Travaux",
      cv: "CV",
      contact: "Contact",
      lang: "EN",
    },
    hero: {
      sub: "DESIGNER GRAPHIQUE • ESAD AMIENS",
      cta: "VOIR LES PROJETS",
    },
    home: {
      sectionLabel: "Travaux sélectionnés",
      sectionTitle: "PROJETS\nSÉLECTIONNÉS",
    },
    project: {
      description: "Description.",
      prev: "Projet précédent",
      next: "Projet suivant",
      back: "Retour",
      allWorks: "Tous les travaux",
    },
    footer: {
      tagline:
        "Vous avez un projet en tête ? Discutons de comment transformer votre vision en réalité.",
      copyright: "© 2026 Léa Tramati",
    },
    cv: {
      contact: "Contact",
      software: "Logiciels",
      languages: "Langues",
      skills: "Compétences clés",
      tag: "Étudiante en design graphique",
      profile:
        "Passionnée par le design graphique, je poursuis mes études à l'École Supérieure d'Art et de Design d'Amiens. Ma pratique combine typographie, design éditorial et identité visuelle — toujours guidée par une attention particulière à la rigueur matérielle et conceptuelle.",
      experiences: "Expériences",
      education: "Formation",
      exp: [
        {
          year: "2024 — 2025",
          title: "Responsable réseaux sociaux, ESAD Amiens",
          items: ["Gestion Instagram", "Couverture d'événements", "Création de newsletters"],
        },
        {
          year: "2018 — 2025",
          title: "Animatrice de centre théâtre",
          items: ["Soutien aux ateliers", "Activités créatives", "Encadrement d'enfants"],
        },
        {
          year: "2023",
          title: "Personnel saisonnier — Piscine municipale",
          items: ["Accueil", "Gestion des vestiaires", "Entretien"],
        },
      ],
      edu: [
        { year: "2024", title: "Design Graphique", institution: "ESAD Amiens" },
        { year: "2023", title: "Préparation artistique", institution: "Prép'art" },
        { year: "2023", title: "Baccalauréat général", institution: "Lycée" },
        { year: "2020", title: "Diplôme National du Brevet", institution: "Collège" },
      ],
      softwareList: ["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "After Effects", "HTML & CSS"],
      languageList: [
        { lang: "Français", level: "Natif" },
        { lang: "Anglais", level: "B2" },
        { lang: "Espagnol", level: "B2" },
      ],
      skillList: [
        "Design de communication",
        "Maquettes web & print",
        "Gestion des réseaux sociaux",
        "Travail en équipe",
        "Créativité & adaptabilité",
      ],
    },
  },
} as const;

export type Translations = typeof translations.en;
