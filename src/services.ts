export const services: Array<{
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  mediaPath: string;
  mediaType: "image" | "video";
  page: string;
}> = [
  {
    name: "Edits",
    shortDescription:
      "Commissions for edits such as the ones I post on my Instagram page",
    longDescription:
      "As seen on my instagram page, i make all styles of edits for several fandoms. Want yours? Hit me up with a prompt and/or a character for an edit! ",
    category: "video",
    mediaPath: "src/assets/video/shinobu.mp4",
    mediaType: "video",
    page: "/edits",
  },
  {
    name: "Art Commissions",
    shortDescription:
      "Digital art commissions from sketch to full render. Choose between several different artstyles",
    longDescription: "",
    category: "art",
    mediaPath: "src/assets/images/rei.png",
    mediaType: "image",
    page: "/art",
  },
  {
    name: "Video Editing",
    shortDescription:
      "Video editing commissions from motion graphics to visualizers, trailers, etc.",
    longDescription: "Want me to make a visualizer for your music, a meme with your friends' faces, a trailer for your project, edit your plays or literally anything else that envolves moving pixels? You're in the right place",
    category: "video",
    mediaPath: "/src/assets/video/42cut.mp4",
    mediaType: "video",
    page: "/video",
  },
  {
    name: "Hair Dying",
    shortDescription:
      "Hairdresser is in the house! Set a date and pick some colors",
    longDescription: "Vibrant to pastel, simple solid to complicated highlights and splits, i'm the expert",
    category: "hair",
    mediaPath: "src/assets/images/bea.jpg",
    mediaType: "image",
    page: "/hairdying",
  },
  {
    name: "Photo Editing",
    shortDescription: "Post-perfect color correction for your instagram pics",
    longDescription: "Color correction, visuals, banners, anything that can be photoshopped will be",
    category: "photo",
    mediaPath: "src/assets/images/je_after.png",
    mediaType: "image",
    page: "/photo",
  },
  {
    name: "3D Graphics",
    shortDescription:
      "3D art commissions made in Blender, from models to animations",
    longDescription: "3D modelling, architecture and environment graphics, or material transformations!",
    category: "3D",
    mediaPath: "src/assets/images/room.png",
    mediaType: "image",
    page: "/3dgraphics",
  },
  {
    name: "Makeovers",
    shortDescription:
      "For a special occasion or if you need some help cosplaying",
    longDescription: "Wanna get ready for a big occasion? Or need some help cosplaying? You're in the right place!",
    category: "beauty",
    mediaPath: "src/assets/images/charlie1sqr.jpg",
    mediaType: "image",
    page: "/makeovers",
  },
  {
    name: "Pixel Art",
    shortDescription:
      "Pixel art commissions that can range from sprites to backgrounds to full animations",
    longDescription: "Cute and cheap pixel art icons, sprites, backgrounds, and anything else you want!",
    category: "art",
    mediaPath: "src/assets/images/misato.png",
    mediaType: "image",
    page: "/pixelart",
  },
  {
    name: "Hair Cutting",
    shortDescription:
      "Get your hair cut by someone who understands the modern trends and WILL listen to you",
    longDescription: "Want a really specific haircut but don't trust hairdressers? This page is for you!",
    category: "hair",
    mediaPath: "src/assets/images/diogoafter2.png",
    mediaType: "image",
    page: "/haircut",
  },
  {
    name: "Programming",
    shortDescription:
      "Software commissions and programming tutoring",
    longDescription: "Code is actually what I do academically and have done/will do for a living, so programs, apps, web development, scripts, or the knowledge to make them all are just a few of the things I have to offer, as the limits of code are non-existent (even though mine may currently not be)",
    category: "code",
    mediaPath: "src/assets/images/C++.png",
    mediaType: "image",
    page: "/code",
  },
    {
    name: "About Me",
    shortDescription:
      "",
    longDescription: "Who the hell is Phanta?",
    category: "other",
    mediaPath: "src/assets/images/rainbow_hair2.png",
    mediaType: "image",
    page: "/about",
  },
    {
    name: "Reviews",
    shortDescription:
      "",
    longDescription: "For the skepticals",
    category: "other",
    mediaPath: "",
    mediaType: "image",
    page: "/reviews",
  },
  {
    name: "Contacts",
    shortDescription:
      "",
    longDescription: "☎️☎️☎️",
    category: "other",
    mediaPath: "",
    mediaType: "image",
    page: "/contacts",
  },
];

export const catOrder = ["video", "art", "hair", "photo", "3D", "code", "beauty"];

export const groupedServices = services.reduce((cat, service) => {
  if (!cat[service.category]) {
    cat[service.category] = [];
  }
  cat[service.category].push(service);
  return cat;
}, {} as Record<string, typeof services>);

export function findService(name: string) {
  const service = services.find((s) => s.page === name);
  if (!service) throw new Error(`Service not found for path: ${name}`);
  return service;
}
