export default [
  // Admin
  { id: 1, name: "George Armistead", role: 3, verified: 1 },
  { id: 2, name: "Dylan Westerhold", role: 3, verified: 1 },

  // Casting
  { id: 3, name: "Jordan Peele", role: 2, verified: 1 },
  { id: 4, name: "Denis Villeneuve", role: 2, verified: 1 },
  { id: 5, name: "Pierre Coffin", role: 2, verified: 1 },
  { id: 6, name: "Stanley Kubrick", role: 2, verified: 1 },
  { id: 7, name: "Francis Ford Coppola", role: 2, verified: 1 },
  { id: 8, name: "Martin Scorsese", role: 2, verified: 1 },
  { id: 9, name: "David Lynch", role: 2, verified: 0 },

  // Talent
  {
    id: 10,
    name: "Steve Carell",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/10/headshots/07aaab14bb29f0207a8a7e3e4d4c0475.jpg" },
      { isProfilePicture: false, image: "users/10/headshots/85814b1b10faa5396cc9a7c47c104d6e.jpg" },
      { isProfilePicture: false, image: "users/10/headshots/4ad4c054f1c4843608bdfb52b4f1d493.jpg" },
      { isProfilePicture: false, image: "users/10/headshots/6990349068154aadf3fdc0b82ea27352.jpg" },
    ],
    questionnaireAnswers: [
      { id: 1, questionId: 1, answer: "1" },
      { id: 2, questionId: 2, answer: JSON.stringify([9, 10, 11]) },
      { id: 3, questionId: 3, answer: JSON.stringify([18]) },
      { id: 4, questionId: 4, answer: "Skateboarding" },
    ],
  },
  {
    id: 11,
    name: "Toni Collette",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/11/headshots/f4aa8ccb237199a23995c53517dbf22c.jpg" },
      { isProfilePicture: false, image: "users/11/headshots/9b70a537b861962d29237cdbaa70462a.jpg" },
      { isProfilePicture: false, image: "users/11/headshots/e78fc67285a841d23a0d7c0b859be883.jpg" },
      { isProfilePicture: false, image: "users/11/headshots/c67dafc39b0d9ad21eac5d3c915e6b49.jpg" },
    ],
    questionnaireAnswers: [
      { id: 5, questionId: 1, answer: "2" },
      { id: 6, questionId: 2, answer: JSON.stringify([8, 9]) },
      { id: 7, questionId: 3, answer: JSON.stringify([16, 17]) },
      { id: 8, questionId: 4, answer: "Crying on Command" },
    ],
  },
  {
    id: 12,
    name: "Abigail Breslin",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/12/headshots/1b873082967a3c3b66a0410104b0b228.jpg" },
      { isProfilePicture: false, image: "users/12/headshots/bd81c2f3f2722e24f7cda54d9f54c45e.jpg" },
      { isProfilePicture: false, image: "users/12/headshots/2d2f3e065b024fc564ba1cfd12b0ae1c.jpg" },
      { isProfilePicture: false, image: "users/12/headshots/5e5e6e27ad14bcd1912ac618d3fecb5e.jpg" },
    ],
    questionnaireAnswers: [
      { id: 9, questionId: 1, answer: "2" },
      { id: 10, questionId: 2, answer: JSON.stringify([6, 7]) },
      { id: 11, questionId: 3, answer: JSON.stringify([16, 17]) },
      { id: 12, questionId: 4, answer: "" },
    ],
  },
  {
    id: 13,
    name: "Idris Elba",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/13/headshots/b223509aba4a6411c1a999564b80e9c7.jpg" },
    ],
    questionnaireAnswers: [
      { id: 13, questionId: 1, answer: "1" },
      { id: 14, questionId: 2, answer: JSON.stringify([10, 11]) },
      { id: 15, questionId: 3, answer: JSON.stringify([18]) },
      { id: 16, questionId: 4, answer: "" },
    ],
  },
  {
    id: 14,
    name: "Emma Stone",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/14/headshots/7571e4d6e859f8103252bd83151656e0.jpg" },
    ],
    questionnaireAnswers: [
      { id: 17, questionId: 1, answer: "2" },
      { id: 18, questionId: 2, answer: JSON.stringify([8, 9]) },
      { id: 19, questionId: 3, answer: JSON.stringify([17]) },
      { id: 20, questionId: 4, answer: "" },
    ],
  },
  {
    id: 15,
    name: "Chris Evans",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/15/headshots/8cc021c1d63aac3b84246ea50cf7a384.jpg" },
    ],
    questionnaireAnswers: [
      { id: 21, questionId: 1, answer: "1" },
      { id: 22, questionId: 2, answer: JSON.stringify([8, 9]) },
      { id: 23, questionId: 3, answer: JSON.stringify([17]) },
      { id: 24, questionId: 4, answer: "" },
    ],
  },
  {
    id: 16,
    name: "Robert Downey Jr.",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/16/headshots/fe3ae9b11ca11500a0ba48c0e038a46a.jpg" },
    ],
    questionnaireAnswers: [
      { id: 25, questionId: 1, answer: "1" },
      { id: 26, questionId: 2, answer: JSON.stringify([10, 11]) },
      { id: 27, questionId: 3, answer: JSON.stringify([]) },
      { id: 28, questionId: 4, answer: "Coolness" },
    ],
  },
  {
    id: 17,
    name: "Whoopi Goldberg",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: false, image: "users/17/headshots/ebc88536d14b98fa1243c4b850851260.jpg" },
      { isProfilePicture: true, image: "users/17/headshots/449038520718600d1dbe229afbb75759.jpg" },
    ],
    questionnaireAnswers: [
      { id: 29, questionId: 1, answer: "2" },
      { id: 30, questionId: 2, answer: JSON.stringify([12, 13]) },
      { id: 31, questionId: 3, answer: JSON.stringify([16]) },
      { id: 32, questionId: 4, answer: "" },
    ],
  },
  {
    id: 18,
    name: "Scarlett Johansson",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/18/headshots/7ea6ef4631348fea78933b2ecde6d5e1.jpg" },
    ],
    questionnaireAnswers: [
      { id: 33, questionId: 1, answer: "2" },
      { id: 34, questionId: 2, answer: JSON.stringify([7, 8]) },
      { id: 35, questionId: 3, answer: JSON.stringify([]) },
      { id: 36, questionId: 4, answer: "" },
    ],
  },
  {
    id: 19,
    name: "Jamie Foxx",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/19/headshots/fb886c82becd7c7e8571ef1b6825fafe.jpg" },
    ],
    questionnaireAnswers: [
      { id: 37, questionId: 1, answer: "1" },
      { id: 38, questionId: 2, answer: JSON.stringify([9, 10]) },
      { id: 39, questionId: 3, answer: JSON.stringify([16, 17, 18]) },
      { id: 40, questionId: 4, answer: "" },
    ],
  },
  {
    id: 20,
    name: "Will Smith",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/20/headshots/56db0ac8f952e1600cb068e69a73e87f.jpg" },
    ],
    questionnaireAnswers: [
      { id: 41, questionId: 1, answer: "1" },
      { id: 42, questionId: 2, answer: JSON.stringify([11, 12]) },
      { id: 43, questionId: 3, answer: JSON.stringify([16, 17]) },
      { id: 44, questionId: 4, answer: "" },
    ],
  },
  {
    id: 21,
    name: "Jennifer Lawrence",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/21/headshots/cfad3cf292cc274e45b31b541cd575ee.jpg" },
    ],
    questionnaireAnswers: [
      { id: 45, questionId: 1, answer: "2" },
      { id: 46, questionId: 2, answer: JSON.stringify([9, 10]) },
      { id: 47, questionId: 3, answer: JSON.stringify([16]) },
      { id: 48, questionId: 4, answer: "" },
    ],
  },
  {
    id: 22,
    name: "Dwayne Johnson",
    role: 1,
    verified: 1,
    headshots: [
      { isProfilePicture: true, image: "users/22/headshots/ecfbb7dd16c26cabc02445f26b41dd4c.jpg" },
    ],
    questionnaireAnswers: [
      { id: 49, questionId: 1, answer: "1" },
      { id: 50, questionId: 2, answer: JSON.stringify([9, 10]) },
      { id: 51, questionId: 3, answer: JSON.stringify([18]) },
      { id: 52, questionId: 4, answer: "" },
    ],
  },
  {
    id: 23,
    name: "Timothee Chalamet",
    role: 1,
    verified: 1,
    headshots: [],
    questionnaireAnswers: [
      { id: 53, questionId: 1, answer: "1" },
      { id: 54, questionId: 2, answer: JSON.stringify([5, 6]) },
      { id: 55, questionId: 3, answer: JSON.stringify([]) },
      { id: 56, questionId: 4, answer: "" },
    ],
  },
  {
    id: 24,
    name: "Zendaya",
    role: 1,
    verified: 1,
    headshots: [],
    questionnaireAnswers: [
      { id: 57, questionId: 1, answer: "2" },
      { id: 58, questionId: 2, answer: JSON.stringify([5, 6]) },
      { id: 59, questionId: 3, answer: JSON.stringify([]) },
      { id: 60, questionId: 4, answer: "" },
    ],
  },
  {
    id: 25,
    name: "Florence Pugh",
    role: 1,
    verified: 1,
    headshots: [],
    questionnaireAnswers: [
      { id: 61, questionId: 1, answer: "2" },
      { id: 62, questionId: 2, answer: JSON.stringify([5, 6]) },
      { id: 63, questionId: 3, answer: JSON.stringify([16]) },
      { id: 64, questionId: 4, answer: "" },
    ],
  },
  {
    id: 26,
    name: "Tom Holland",
    role: 1,
    verified: 1,
    headshots: [],
    questionnaireAnswers: [],
  },
  {
    id: 27,
    name: "Anya Taylor-Joy",
    role: 1,
    verified: 0,
    headshots: [],
    questionnaireAnswers: [],
  },
  {
    id: 28,
    name: "Victoria Pedretti",
    role: 1,
    verified: 0,
    headshots: [],
    questionnaireAnswers: [],
  },
];
