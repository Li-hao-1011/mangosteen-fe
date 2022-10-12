import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./App.module.scss";

export const App = defineComponent({
  setup() {
    return () => <RouterView />;
  },
});
