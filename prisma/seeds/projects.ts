import dayjs from "dayjs";

const CREATED_AT_FORMAT = "YYYY-MM-DDThh:mm:ss.sssZ";

export default [
  {
    id: 1,
    userId: 3,
    name: "Get Out",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    location: "New York, NY",
    startDate: dayjs().add(1, "month").format(CREATED_AT_FORMAT),
    castingDirector: "Terri Taylor",
    producer: "Jason Blum",
    categoryId: 5,
    workerType: 1,
    status: 1,
    roles: [
      {
        id: 1,
        name: "Chris Washington",
        description: "Chris is a African-American photographer who has been dating a Caucasian girl named Rose Armitage for the past 5 months, then Rose decides to bring Chris down to her family's estate in the middle of nowhere to meet her parents, Dean and Missy.",
        createdAt: dayjs().subtract(1, "hour").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 1, questionId: 1, importance: 1, answer: "1" },
          { id: 2, questionId: 2, importance: 1, answer: JSON.stringify([6, 7]) },
          { id: 3, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [],
      },
      {
        id: 2,
        name: "Rose Armitage",
        description: "Rose is the eldest child of Dean and Missy Armitage, the older sister to Jeremy and the granddaughter of Roman and Marianne Armitage. Rose grew up on her family's estate and was raised to share their beliefs about using African Americans as vessels to achieve immortality.",
        createdAt: dayjs().subtract(4, "hours").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 4, questionId: 1, importance: 1, answer: "2" },
          { id: 5, questionId: 2, importance: 1, answer: JSON.stringify([6, 7]) },
          { id: 6, questionId: 3, importance: 1, answer: JSON.stringify([16]) },
        ],
        applicants: [
          { userId: 14, seen: 1, starred: 1, },
          { userId: 21, seen: 0, starred: 0, },
        ],
      },
      {
        id: 3,
        name: "Dean Armitage",
        description: "Dean's father, Roman Armitage was a track star but when he competed in the 1936 Berlin Olympics, he was defeated by Jesse Owens which led his father to believe that African-Americans are genetically and physically better than Caucasians.",
        createdAt: dayjs().subtract(2, "days").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 7, questionId: 1, importance: 1, answer: "1" },
          { id: 8, questionId: 2, importance: 1, answer: JSON.stringify([11, 12, 13]) },
          { id: 9, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 10, seen: 1, starred: 1, },
          { userId: 16, seen: 1, starred: 0, },
        ],
      },
    ],
  },
  {
    id: 2,
    userId: 4,
    name: "Dune",
    description: "Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.",
    location: "Los Angeles, CA",
    startDate: dayjs().add(6, "month").format(CREATED_AT_FORMAT),
    writer: "Jon Spaihts",
    director: "Denis Villeneuve",
    producer: "Mary Parent",
    castingDirector: "Francine Maisler",
    categoryId: 5,
    workerType: 1,
    status: 1,
    roles: [
      {
        id: 5,
        name: "Paul Atreides",
        description: "The protagonist of Dune. Paul is the son of Duke Leto Atreides and is the heir to the House of the Atreides.",
        createdAt: dayjs().subtract(3, "hours").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 13, questionId: 1, importance: 1, answer: "1" },
          { id: 14, questionId: 2, importance: 1, answer: JSON.stringify([]) },
          { id: 15, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 15, seen: 1, starred: 0, },
          { userId: 23, seen: 1, starred: 0, },
        ],
      },
      {
        id: 6,
        name: "Jessica",
        description: "Paul’s mother. Jessica is the concubine of Duke Leto Atreides. Though she acts like a wife to Leto and he has no other concubines, she is not married to Leto. Jessica is a member of the Bene Gesserit, a school that teaches and practices what many others think of as witchcraft. An orphan who never knew her parents, Jessica is tall and slender, with bronze-colored hair and green eyes.",
        createdAt: dayjs().subtract(5, "hours").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 16, questionId: 1, importance: 1, answer: "2" },
          { id: 17, questionId: 2, importance: 1, answer: JSON.stringify([]) },
          { id: 18, questionId: 3, importance: 1, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 11, seen: 1, starred: 1, },
        ],
      },
      {
        id: 7,
        name: "Duke Leto Atreides",
        description: "Paul’s father. Duke Leto Atreides is the head of the House of Atreides and the rightful ruler of Arrakis. The duke received Arrakis from the emperor in exchange for Leto’s own planet of Caladan, which was given to the duke’s mortal enemy, Baron Harkonnen. The duke is a wise, intelligent, and compassionate man, but he is ruthless when it comes to dealing with his enemies. He cares very much for his concubine, Jessica, and their son, Paul.",
        createdAt: dayjs().subtract(6, "days").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 19, questionId: 1, importance: 1, answer: "1" },
          { id: 20, questionId: 2, importance: 1, answer: JSON.stringify([]) },
          { id: 21, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 10, seen: 1, starred: 0, },
          { userId: 16, seen: 1, starred: 0, },
          { userId: 22, seen: 1, starred: 0, },
        ],
      },
      {
        id: 8,
        name: "Baron Vladimir Harkonnen",
        description: "Leader of the House of Harkonnen. The baron is the mortal enemy of the House of Atreides. The baron is very fat, and his bulk is supported by electronic suspenders.",
        createdAt: dayjs().subtract(10, "days").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 22, questionId: 1, importance: 1, answer: "1" },
          { id: 23, questionId: 2, importance: 1, answer: JSON.stringify([]) },
          { id: 24, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 10, seen: 1, starred: 0, },
          { userId: 16, seen: 1, starred: 0, },
          { userId: 20, seen: 0, starred: 0, },
          { userId: 22, seen: 0, starred: 0, },
        ],
      },
      {
        id: 9,
        name: "Chani",
        description: "Daughter of Liet-Kynes. Chani is one of the Fremen and has some of the skills of the Bene Gesserit. She is Paul’s age and gives birth to his first child.",
        createdAt: dayjs().subtract(24, "days").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 25, questionId: 1, importance: 1, answer: "2" },
          { id: 26, questionId: 2, importance: 1, answer: JSON.stringify([]) },
          { id: 27, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 24, seen: 0, starred: 0, },
          { userId: 25, seen: 0, starred: 0, },
        ],
      },
    ],
  },
  {
    id: 3,
    userId: 4,
    name: "Cleopatra",
    description: "A political thriller about the life of Cleopatra.",
    location: "Los Angeles, CA",
    startDate: dayjs().add(2, "year").format(CREATED_AT_FORMAT),
    categoryId: 5,
    workerType: 1,
    status: 1,
    roles: [],
  },
  {
    id: 4,
    userId: 5,
    name: "Despicable Me",
    description: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
    location: "Remote",
    startDate: dayjs().add(6, "week").format(CREATED_AT_FORMAT),
    director: "Chris Renaud",
    writer: "Cinco Paul",
    producer: "Chris Meledandri",
    categoryId: 6,
    workerType: 2,
    status: 1,
    roles: [
      {
        id: 4,
        name: "Gru",
        description: "Gru comes from a long lineage of villains",
        createdAt: dayjs().subtract(2, "months").format(CREATED_AT_FORMAT),
        requirements: [
          { id: 10, questionId: 1, importance: 1, answer: "1" },
          { id: 11, questionId: 2, importance: 0, answer: JSON.stringify([7, 8, 9, 10, 11, 12]) },
          { id: 12, questionId: 3, importance: 0, answer: JSON.stringify([]) },
        ],
        applicants: [
          { userId: 10, seen: 0, starred: 0, },
          { userId: 13, seen: 0, starred: 0, },
          { userId: 15, seen: 0, starred: 0, },
          { userId: 16, seen: 0, starred: 0, },
          { userId: 19, seen: 0, starred: 0, },
          { userId: 20, seen: 0, starred: 0, },
          { userId: 22, seen: 0, starred: 0, },
          { userId: 23, seen: 0, starred: 0, },
        ],
      },
    ],
  },
];