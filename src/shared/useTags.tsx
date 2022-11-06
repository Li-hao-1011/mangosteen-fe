import { AxiosResponse } from "axios";
import { onMounted, ref } from "vue";

type Fetcher = (page: number) => Promise<AxiosResponse<Resources<Tag>>>;

export const useTags = (fetcher: Fetcher) => {
  const hasMore = ref(false);
  const page = ref(0);
  const tags = ref<Tag[]>([]);
  const fetchTags = async () => {
    const res = await fetcher(page.value);
    const { resources, pager } = res.data;
    tags.value.push(...resources);
    hasMore.value =
      (pager.page - 1) * pager.per_page + resources.length < pager.count;
    page.value += 1;
  };

  onMounted(fetchTags);

  return {
    page,
    hasMore,
    tags,
    fetchTags,
  };
};
