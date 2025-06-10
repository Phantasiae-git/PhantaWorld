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
    longDescription: "As seen on @phanta_art!",
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
    name: "Insta-Photography",
    shortDescription: "Post-perfect color correction for your instagram pics",
    longDescription: "Detailed description of the photography service...",
    category: "photo",
    mediaPath: "src/assets/images/je-after.jpg",
    mediaType: "image",
    page: "/instaphoto",
  },
  {
    name: "3D Graphics",
    shortDescription:
      "3D art commissions made in Blender, from models to animations",
    longDescription: "Detailed description of the 3d service...",
    category: "3D",
    mediaPath: "src/assets/images/room.png",
    mediaType: "image",
    page: "/3dgraphics",
  },
  {
    name: "Makeovers",
    shortDescription:
      "For a special occasion or if you need some help cosplaying",
    longDescription: "Detailed description of the makeover service...",
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
    longDescription: "Detailed description of the hair cutting service...",
    category: "hair",
    mediaPath: "src/assets/images/diogoafter2.png",
    mediaType: "image",
    page: "/haircut",
  },
];

export const catOrder = ["video", "art", "hair", "photo", "3D", "beauty"];

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
