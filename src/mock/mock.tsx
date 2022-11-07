import { faker } from "@faker-js/faker";
import { AxiosRequestConfig } from "axios";

type Mock = (config: AxiosRequestConfig) => [number, any];

faker.setLocale("zh_CN");

export const mockSession: Mock = (config) => {
  return [
    200,
    {
      jwt: faker.random.word(),
    },
  ];
};

let id = 0;
export const mockTagIndex: Mock = (config) => {
  const { kind, page } = config.params;
  console.log("mockTagIndex", page);

  const per_page = 25;
  const count = 26;
  const createId = () => {
    return id++;
  };
  const createTag = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      name: faker.lorem.word(),
      sign: faker.internet.emoji(),
      kind: config.params.find,
      ...attrs,
    }));
  const createParper = (page = 1) => ({
    page,
    per_page,
    count,
  });

  const createBody = (n = 1, attrs?: any) => ({
    resources: createTag(n),
    pager: createParper(page),
  });

  if (kind === "expenses" && (!page || page === "1")) {
    return [200, createBody(25)];
  } else if (kind === "expenses" && page === "2") {
    return [200, createBody()];
  } else if (kind === "income" && (!page || page === "1")) {
    return [200, createBody(25)];
  } else if (kind === "income" && page === "2") {
    return [200, createBody()];
  } else {
    return [200, createBody(25)];
  }

  // return config;
};
