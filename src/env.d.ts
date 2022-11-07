/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

type JSONValue =
  | string
  | number
  | null
  | boolean
  | JSONValue[]
  | { [key: string]: JSONValue };

type Tag = {
  id: number;
  user_id: number;
  name: string;
  sign: string;
  kind: "expenses" | "income";
};

type Resources<T = any> = {
  pager: {
    page: number;
    per_page: number;
    count: number;
  };
  resources: T[];
};

type Resource<T> = {
  resources: T;
};

type Item = {
  resource: {
    id: number;
    user_id: number;
    amount: number;
    // note: null;
    tags_id: number[];
    happen_at: string;
    created_at: string;
    updated_at: string;
    kind: "expenses" | "income";
  };
};

type ResourceErrors = { errors: Record<string, string[]> };
