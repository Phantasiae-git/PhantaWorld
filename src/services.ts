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
      shortDescription: "Commissions for edits such as the ones I post on my Instagram page.",
      longDescription: "Detailed description of the edits service...",
      category: "video",
      mediaPath: "src/assets/video/shinobu.mp4",
      mediaType: "video",
      page: "/edits",
    },
    {
      name: "Art Commissions",
      shortDescription: "Digital art commissions from sketch to full render. Choose between several different artstyles",
      longDescription: "Detailed description of the art commissions service...",
      category: "art",
      mediaPath: "src/assets/images/rei.png",
      mediaType: "image",
      page: "/art",
    },
    {
      name: "Video Editing",
      shortDescription: "Video editing commissions from motion graphics to visualizers, trailers, etc.",
      longDescription: "Detailed description of the video editing service...",
      category: "video",
      mediaPath: "/src/assets/video/42cut.mp4",
      mediaType: "video",
      page: "/video",
    },
    {
      name: "Hair Dying",
      shortDescription: "Hairdresser is in the house! Set a date and pick some colors.",
      longDescription: "Detailed description of the hair dying service...",
      category: "hair",
      mediaPath: "src/assets/images/rainbow hair square.png",
      mediaType: "image",
      page: "/hairdying",
    },
    {
      name: "Photography",
      shortDescription: "Professional photography services for events, portraits, and more.",
      longDescription: "Detailed description of the photography service...",
      category: "photo",
      mediaPath: "src/assets/img/photo.png",
      mediaType: "image",
      page: "/photography",
    },
  ];