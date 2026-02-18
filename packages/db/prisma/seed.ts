import { prismaClient } from "../src";

const USER_ID = "4";

async function seed() {
  const user = await prismaClient.user.create({
    data: {
      id: "2",
      email: "test@test.com",
    },
  });

  const website = await prismaClient.website.create({
    data: {
      id: "2",
      url: "https://test.com",
      userId: user.id,
    },
  });

  const validator = await prismaClient.validator.create({
    data: {
      publicKey: "0x12341223123",
      location: "Delhi",
      ip: "127.0.0.1",
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      status: "Good",
      createdAt: new Date(),
      latency: 100,
      validatorId: validator.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      status: "Good",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      latency: 100,
      validatorId: validator.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      status: "Bad",
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
      latency: 100,
      validatorId: validator.id,
    },
  });
}

seed();
