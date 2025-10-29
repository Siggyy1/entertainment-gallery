export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  more?: string;
}

export const items: GalleryItem[] = [
  {
    id: "1",
    title: "The Last Kingdom",
    image: "https://picsum.photos/seed/tlk/300/450",
    description: "Epic drama of kingdoms, loyalty, and identity.",
    more: "https://en.wikipedia.org/wiki/The_Last_Kingdom"
  },
  {
    id: "2",
    title: "Arcane",
    image: "https://picsum.photos/seed/arcane/300/450",
    description: "Stunning animation set in the League universe.",
    more: "https://en.wikipedia.org/wiki/Arcane_(TV_series)"
  },
  {
    id: "3",
    title: "Dune",
    image: "https://picsum.photos/seed/dune/300/450",
    description: "Spice, politics, prophecy — a sci-fi classic.",
    more: "https://en.wikipedia.org/wiki/Dune_(franchise)"
  },
  {
    id: "4",
    title: "Cyberpunk 2077",
    image: "https://picsum.photos/seed/cp2077/300/450",
    description: "Neon nights and choices with consequences.",
    more: "https://www.cyberpunk.net/"
  },
  {
    id: "5",
    title: "Dark",
    image: "https://picsum.photos/seed/dark/300/450",
    description: "Time loops, secrets, and tangled families.",
    more: "https://en.wikipedia.org/wiki/Dark_(TV_series)"
  },
  {
    id: "6",
    title: "Interstellar",
    image: "https://picsum.photos/seed/interstellar/300/450",
    description: "Love, physics, and a mission beyond Earth.",
    more: "https://en.wikipedia.org/wiki/Interstellar_(film)"
  }
];
