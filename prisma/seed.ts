import prisma from "../source/config/prisma";
import seeds from "./seeds";

const main = async () => {
  await Promise.all(seeds.categories.map(async ({ id, name }) => {
    await prisma.category.upsert({
      where: { id },
      update: { name, },
      create: { id, name },
    });
  }));

  await Promise.all(seeds.sections.map(async ({
    id,
    castingTitle,
    actorTitle,
    castingSubtitle,
    actorSubtitle,
    castingHint,
    actorHint,
    questions,
  }) => {
    await prisma.section.upsert({
      where: { id },
      update: {},
      create: {
        id,
        castingTitle,
        actorTitle,
        castingSubtitle,
        actorSubtitle,
        castingHint,
        actorHint,
        questions: {
          create: questions.map(({ id, type, definition, required, answers }) => ({
            id,
            type,
            definition,
            required,
            differentialPoints: 0,
            importanceRequired: 0,
            answers: {
              create: answers.map(({ id, definition, order }) => ({ id, definition, order })),
            },
          })),
        }
      },
    });
  }));

  await Promise.all(seeds.users.map((async ({
    id,
    name,
    role,
    verified,
    headshots = [],
    questionnaireAnswers = [],
  }) => {
    const email = `${name.split(" ")[0].toLowerCase()}@reelcall.com`;
    const password = "$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm"; // secret
    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        id,
        name,
        email,
        role,
        verified,
        password,
        headshots: {
          create: headshots.map(({ image, isProfilePicture }) => ({ image, isProfilePicture })),
        },
        questionnaireAnswers: {
          create: questionnaireAnswers.map(({ id, questionId, answer }) => ({
            id,
            questionId,
            answer,
          })),
        },
      },
    });
  })));

  await Promise.all(seeds.projects.map(async ({
    id,
    userId,
    name,
    description,
    categoryId,
    location,
    startDate,
    director,
    writer,
    producer,
    castingDirector,
    workerType,
    status,
    roles = [],
  }) => {
    await prisma.project.upsert({
      where: { id },
      update: {},
      create: {
        id,
        userId,
        name,
        description,
        categoryId,
        location,
        startDate,
        director,
        writer,
        producer,
        castingDirector,
        workerType,
        status,
        roles: {
          create: roles.map(({
            id,
            name,
            description,
            createdAt,
            requirements = [],
            applicants = [],
          }) => ({
            id,
            name,
            description,
            createdAt,
            requirements: {
              create: requirements.map(({ id, questionId, importance, answer}) => ({
                id,
                questionId,
                importance,
                answer,
              })),
            },
            applicants: {
              create: applicants.map(({ userId, seen, starred }) => ({
                userId,
                seen,
                starred,
              })),
            },
          })),
        }
      },
    });
  }));
};

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
