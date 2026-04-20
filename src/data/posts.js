// To add a new post: paste a new object at the TOP of this array (highest id = newest).
// content is an array of strings — one string per paragraph. No JSX, no imports needed.

const posts = [
  {
    id: 1,
    title: "Why I Built My Portfolio Website First",
    date: "12 March 2026",
    excerpt:
      "My portfolio website became my first serious project and the starting point of my developer journey.",
    searchText:
      "portfolio website developer journey react structure layout design reusable components learn by building",
    content: [
      "Building my portfolio website first was an important decision in my developer journey. Instead of waiting until I felt ready, I decided to create something real that represented me.",
      "This project helped me understand how a website is structured, how sections connect, and how design affects the way people view my work.",
      "More than just a website, it became a practical learning experience. I started improving my React structure, layout design, reusable components, and styling choices.",
      "This portfolio is not only a place to showcase my work. It also represents my mindset: learn by building.",
    ],
  },
];

export default posts;
