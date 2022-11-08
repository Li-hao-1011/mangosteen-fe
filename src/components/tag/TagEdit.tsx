import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { BackIcon } from "../../shared/BackIcon";
import { Button } from "../../shared/Button";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
export const TagEdit = defineComponent({
  setup: (props) => {
    const route = useRoute();
    console.log("route");
    console.log(route);

    const numberId = parseInt(route.params.id.toString());
    if (Number.isNaN(numberId)) {
      return <div>Id 不存在</div>;
    }
    return () => (
      <MainLayout>
        {{
          title: () => "编辑标签",
          icon: () => <BackIcon />,
          default: () => (
            <>
              <TagForm id={numberId} />
              <div class={s.actions}>
                <Button level="danger" class={s.removeTags}>
                  删除标签
                </Button>
                <Button level="danger" class={s.removeTagsAndItems}>
                  删除标签和记账
                </Button>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
