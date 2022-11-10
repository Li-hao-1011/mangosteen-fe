import { faker } from "@faker-js/faker";
import { AxiosRequestConfig } from "axios";

type Mock = (config: AxiosRequestConfig) => [number, any];

faker.setLocale("zh_CN");

let id = 0;

const createId = () => {
  return id++;
};

export const mockSession: Mock = (config) => {
  return [
    200,
    {
      jwt: faker.random.word(),
    },
  ];
};

export const mockTagIndex: Mock = (config) => {
  const { kind, page } = config.params;
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

export const mockItemCreate: Mock = (config) => {
  /*   return [
    422,
    {
      errors: {
        tags_id: ["必须填写"],
        amount: ["123333333333334"],
      },
    },
  ]; */
  return [
    200,
    {
      resource: {
        id: 469,
        user_id: 254,
        amount: 9900,
        note: null,
        tags_id: [370, 371],
        happen_at: "2020-10-29T16:00:00.000Z",
        created_at: "2022-06-16T16:17:48.559Z",
        updated_at: "2022-06-16T16:17:48.559Z",
        kind: "expenses",
      },
    },
  ];
};

export const mockTagCreate: Mock = (config) => {
  return [200, config.data];
};

export const mockTagShow: Mock = (config) => {
  let id = 10;
  const createId = () => {
    return id++;
  };
  const createTag = (n = 1, attrs?: any) => ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: "expenses",
    ...attrs,
  });
  return [200, { resources: createTag() }];
};

export const mockItemIndex: Mock = (config) => {
  const { kind, page } = config.params;
  const per_page = 25;
  const count = 26;
  const createPaper = (page = 1) => ({
    page,
    per_page,
    count,
  });
  const createTag = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      name: faker.lorem.word(),
      sign: faker.internet.emoji(),
      kind: config.params.find,
      ...attrs,
    }));
  const createItem = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      user_id: createId(),
      amount: Math.floor(Math.random() * 10000),
      tags_id: [createId()],
      tags: createTag(),
      happen_at: faker.date.past().toISOString(),
      kind: kind,
    }));
  const createBody = (n = 1, attrs?: any) => ({
    resources: createItem(n),
    pager: createPaper(page),
  });
  if (!page || page === "1") {
    return [200, createBody(25)];
  } else if (page === "2") {
    return [200, createBody(1)];
  } else {
    return [200, {}];
  }
};

export const mockItemIndexBalance: Mock = (config) => {
  return [
    200,
    {
      expenses: 9900,
      income: 9900,
      balance: 0,
    },
  ];
};

/* export const mockItemSummary: Mock = (config) => {
  return [
    200,
    {
      groups: [
        { happen_at: '2022-11-18T00:00:00.000+0800', amount: 100 },
        { happen_at: '2022-11-22T00:00:00.000+0800', amount: 300 },
        { happen_at: '2022-11-29T00:00:00.000+0800', amount: 200 }
      ],
      summary: 600
    }
  ]
};
 */

export const mockItemSummary: Mock = (config) => {
  if (config.params.group_by === 'happend_at') {
    return [
      200,
      {
        groups: [
          { happen_at: '2022-07-18T00:00:00.000+0800', amount: 100 },
          { happen_at: '2022-07-22T00:00:00.000+0800', amount: 300 },
          { happen_at: '2022-07-29T00:00:00.000+0800', amount: 200 }
        ],
        summary: 600
      }
    ]
  } else {
    return [
      200,
      {
        groups: [
          { tag_id: 1, tag: { id: 1, name: '交通' }, amount: 100 },
          { tag_id: 2, tag: { id: 2, name: '吃饭' }, amount: 300 },
          { tag_id: 3, tag: { id: 3, name: '购物' }, amount: 200 }
        ],
        summary: 600
      }
    ]
  }
}