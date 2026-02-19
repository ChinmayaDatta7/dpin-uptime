import { prismaClient } from "../src";

const USER_ID = "4";

async function seed() {
  const user = await prismaClient.user.create({
    data: {
      id: "2",
      email: "test@test.com",
    },
  });

  const website1 = await prismaClient.website.create({
    data: {
      id: "2",
      url: "https://test.com",
      userId: user.id,
    },
  });

  const website2 = await prismaClient.website.create({
    data: {
      id: "3",
      url: "https://test2.com",
      userId: user.id,
    },
  });

  const validator1 = await prismaClient.validator.create({
    data: {
      publicKey: "0x12341223123",
      location: "Delhi",
      ip: "127.0.0.1",
    },
  });

  const validator2 = await prismaClient.validator.create({
    data: {
      publicKey: "0x12341223121",
      location: "Hyderabad",
      ip: "127.0.0.2",
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website1.id,
      status: "Good",
      createdAt: new Date(),
      latency: 100,
      validatorId: validator1.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website2.id,
      status: "Bad",
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
      latency: 100,
      validatorId: validator1.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website2.id,
      status: "Good",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      latency: 100,
      validatorId: validator1.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website1.id,
      status: "Bad",
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
      latency: 100,
      validatorId: validator2.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website1.id,
      status: "Good",
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
      latency: 100,
      validatorId: validator2.id,
    },
  });
}

seed();
