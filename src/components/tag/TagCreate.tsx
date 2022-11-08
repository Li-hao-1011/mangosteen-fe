import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { BackIcon } from "../../shared/BackIcon";
import { TagForm } from "./TagForm";

export const TagCreate = defineComponent({
  setup: () => {
    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <BackIcon />,
          default: () => (
            <>
              <TagForm></TagForm>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
