import { defineComponent, PropType, ref } from "vue";
import { RouterLink } from "vue-router";
import { Button } from "../../shared/Button";
import { http } from "../../shared/Http";
import { Icon } from "../../shared/Icon";
import { useTags } from "../../shared/useTags";
import s from "./Tags.module.scss";
export const Tags = defineComponent({
  props: {
    kind: {
      type: String as PropType<string>,
      required: true,
    },
    selected: Number,
  },
  emits: ["update:selected"],
  setup: (props, context) => {
    const { hasMore, tags, fetchTags } = useTags((page) => {
      return http.get<Resources<Tag>>("/tags", {
        kind: props.kind,
        _mock: "tagIndex",
        page: (page + 1).toString(),
      });
    });
    const onSelect = (tag: Tag) => {
      context.emit("update:selected", tag.id);
    };

    const timer = ref<number>();
    const currentTag = ref<HTMLDivElement>();
    // let timer: number | undefined = undefined;
    const onTouchstart = (e: TouchEvent) => {
      currentTag.value = e.currentTarget as HTMLDivElement;
      timer.value = setTimeout(() => {
        onLongPress();
      }, 1000);
    };
    const onTouchend = (e: TouchEvent) => {
      clearTimeout(timer.value);
    };
    const onLongPress = () => {
      console.log("长安");
    };
    const onTouchmove = (e: TouchEvent) => {
      const pointedElement = document.elementFromPoint(
        e.touches[0].clientX,
        e.touches[0].clientY
      );
      if (
        currentTag.value !== pointedElement &&
        currentTag.value?.contains(pointedElement) === false
      ) {
        clearTimeout(timer.value);
      }
    };
    return () => (
      <>
        <div class={s.tags_wrapper} onTouchmove={onTouchmove}>
          <RouterLink to={`/tags/create?kind=${props.kind}`} class={s.tag}>
            <div class={s.sign}>
              <Icon name="add" class={s.createTag} />
            </div>
            <div class={s.name}>新增</div>
          </RouterLink>
          {tags.value.map((tag) => (
            <div
              onClick={() => onSelect(tag)}
              class={[s.tag, props.selected === tag.id ? s.selected : ""]}
              onTouchstart={onTouchstart}
              onTouchend={onTouchend}
            >
              <div class={s.sign}>{tag.sign}</div>
              <div class={s.name}>{tag.name}</div>
            </div>
          ))}
        </div>
        <div class={s.load_wrapper}>
          {hasMore.value ? (
            <Button
              onClick={() => {
                fetchTags();
              }}
              class={s.laodMore}
            >
              加载更多
            </Button>
          ) : (
            <span class={s.noMore}>没有更多</span>
          )}
        </div>
      </>
    );
  },
});
