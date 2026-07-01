const photographer = {
  name: "Aria Smith Photography",
  tagline: "Photographer Tagline",
};

const portfolioCategories = {
  all: {
    filter: "All",
  },
  portraits: {
    filter: "Portraits",
    detail: "Portrait",
  },
  nature: {
    filter: "Nature",
    detail: "Nature",
  },
  travel: {
    filter: "Travel",
    detail: "Travel",
  },
  events: {
    filter: "Events",
    detail: "Event",
  },
  weddings: {
    filter: "Weddings",
    detail: "Wedding",
  },
};

const portfolioPhotos = [
  {
    id: 1,
    title: "Ben",
    category: "portraits",
    image: "portraits/portrait4.jpg",
    description:
      "A side profile rendered in soft natural light. The restrained composition draws attention to shape, texture, and expression.",
    date: "March 2026",
  },
  {
    id: 2,
    title: "Ferris Wheel",
    category: "events",
    image: "events/event7.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "May 2024",
  },
  {
    id: 3,
    title: "Untitled",
    category: "portraits",
    image: "portraits/portrait1.jpg",
    description: "A portrait focusing on expression, light, and composition.",
    date: "June 2026",
  },
  {
    id: 4,
    title: "Untitled",
    category: "travel",
    image: "travel/travel1.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "February 2026",
  },
  {
    id: 5,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding1.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "January 2023",
  },
  {
    id: 6,
    title: "Untitled",
    category: "events",
    image: "events/event2.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "March 2021",
  },
  {
    id: 7,
    title: "Untitled",
    category: "nature",
    image: "nature/nature2.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "January 2026",
  },
  {
    id: 8,
    title: "Untitled",
    category: "portraits",
    image: "portraits/portrait2.jpg",
    description: "A portrait focusing on expression, light, and composition.",
    date: "January 2023",
  },
  {
    id: 9,
    title: "Untitled",
    category: "travel",
    image: "travel/travel2.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "May 2022",
  },
  {
    id: 10,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding2.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "April 2021",
  },
  {
    id: 11,
    title: "Untitled",
    category: "events",
    image: "events/event3.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "May 2020",
  },
  {
    id: 12,
    title: "Untitled",
    category: "events",
    image: "events/event1.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "March 2025",
  },
  {
    id: 13,
    title: "Untitled",
    category: "portraits",
    image: "portraits/portrait3.jpg",
    description: "A portrait focusing on expression, light, and composition.",
    date: "August 2022",
  },
  {
    id: 14,
    title: "Untitled",
    category: "travel",
    image: "travel/travel3.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "March 2021",
  },
  {
    id: 15,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding3.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "August 2021",
  },
  {
    id: 16,
    title: "Untitled",
    category: "events",
    image: "events/event4.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "January 2021",
  },
  {
    id: 17,
    title: "Fly Agaric",
    category: "nature",
    image: "nature/nature7.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "May 2025",
  },
  {
    id: 18,
    title: "Deer",
    category: "nature",
    image: "nature/nature1.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "August 2023",
  },
  {
    id: 19,
    title: "Untitled",
    category: "travel",
    image: "travel/travel4.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "April 2026",
  },
  {
    id: 20,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding4.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "August 2024",
  },
  {
    id: 21,
    title: "Untitled",
    category: "events",
    image: "events/event5.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "June 2025",
  },
  {
    id: 22,
    title: "Untitled",
    category: "nature",
    image: "nature/nature5.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "August 2022",
  },
  {
    id: 23,
    title: "Untitled",
    category: "travel",
    image: "travel/travel6.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "January 2024",
  },
  {
    id: 24,
    title: "Untitled",
    category: "travel",
    image: "travel/travel5.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "January 2022",
  },
  {
    id: 25,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding5.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "January 2021",
  },
  {
    id: 26,
    title: "Untitled",
    category: "events",
    image: "events/event6.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "June 2021",
  },
  {
    id: 27,
    title: "Untitled",
    category: "nature",
    image: "nature/nature6.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "May 2022",
  },
  {
    id: 28,
    title: "Untitled",
    category: "portraits",
    image: "portraits/portrait6.jpg",
    description: "A portrait focusing on expression, light, and composition.",
    date: "April 2025",
  },
  {
    id: 29,
    title: "Untitled",
    category: "nature",
    image: "nature/nature3.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "January 2020",
  },
  {
    id: 30,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding6.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "February 2025",
  },
  {
    id: 31,
    title: "Untitled",
    category: "portraits",
    image: "portraits/portrait5.jpg",
    description: "A portrait focusing on expression, light, and composition.",
    date: "April 2021",
  },
  {
    id: 32,
    title: "Untitled",
    category: "nature",
    image: "nature/nature4.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "April 2022",
  },
  {
    id: 33,
    title: "Untitled",
    category: "travel",
    image: "travel/travel9.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "June 2020",
  },
  {
    id: 34,
    title: "Untitled",
    category: "travel",
    image: "travel/travel7.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "July 2025",
  },
  {
    id: 35,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding7.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "February 2021",
  },
  {
    id: 36,
    title: "Untitled",
    category: "events",
    image: "events/event8.jpg",
    description: "A candid moment captured as it naturally unfolded.",
    date: "October 2024",
  },
  {
    id: 37,
    title: "Untitled",
    category: "nature",
    image: "nature/nature8.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "June 2026",
  },
  {
    id: 38,
    title: "Untitled",
    category: "nature",
    image: "nature/nature10.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "June 2026",
  },
  {
    id: 39,
    title: "Untitled",
    category: "travel",
    image: "travel/travel8.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "January 2022",
  },
  {
    id: 40,
    title: "Untitled",
    category: "weddings",
    image: "weddings/wedding8.jpg",
    description: "Preserving a meaningful moment in a single frame.",
    date: "September 2022",
  },
  {
    id: 41,
    title: "Untitled",
    category: "nature",
    image: "nature/nature9.jpg",
    description:
      "Exploring atmosphere, texture, and the beauty of the natural world.",
    date: "May 2024",
  },
  {
    id: 42,
    title: "Untitled",
    category: "travel",
    image: "travel/travel10.jpg",
    description: "Capturing a sense of place and atmosphere.",
    date: "April 2021",
  },
];

// set category-based default descriptions
portfolioPhotos.forEach((photo) => {
  if (!photo.description || photo.description === "description placeholder") {
    switch (photo.category) {
      case "portraits":
        photo.description =
          "A portrait focusing on expression, light, and composition.";
        break;

      case "nature":
        photo.description =
          "Exploring atmosphere, texture, and the beauty of the natural world.";
        break;

      case "events":
        photo.description =
          "A candid moment captured as it naturally unfolded.";
        break;

      case "travel":
        photo.description = "Capturing a sense of place and atmosphere.";
        break;

      case "weddings":
        photo.description = "Preserving a meaningful moment in a single frame.";
        break;
    }
  }
});
