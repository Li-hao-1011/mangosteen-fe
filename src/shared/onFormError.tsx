import { AxiosError } from "axios";

export const onFormError = (
  error: AxiosError<ResourceErrors>,
  fn: (errors: ResourceErrors) => void
) => {
  if (error.response?.status === 422) {
    fn(error.response.data);
  }
  throw error;
};
