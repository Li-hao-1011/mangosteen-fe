import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = {
  x: number;
  y: number;
};
type Options = {
  beforeStart?: (e: TouchEvent) => void;
  afterStart?: (e: TouchEvent) => void;
  beforeMove?: (e: TouchEvent) => void;
  afterMove?: (e: TouchEvent) => void;
  beforeEnd?: (e: TouchEvent) => void;
  afterEnd?: (e: TouchEvent) => void;
};

export const useSwipe = (
  el: Ref<HTMLElement | undefined>,
  options?: Options
) => {
  const start = ref<Point>();
  const end = ref<Point>();
  const swiping = ref(false);
  // 移动的距离
  const distance = computed(() => {
    if (!end.value || !start.value) {
      return undefined;
    }
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y,
    };
  });
  const direction = computed(() => {
    if (!distance.value) {
      return "";
    }
    const { x, y } = distance.value;
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? "right" : "left";
    } else {
      return y > 0 ? "down" : "up";
    }
  });
  const onStart = (e: TouchEvent) => {
    options?.beforeStart?.(e);
    start.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    end.value = undefined;
    swiping.value = true;
    options?.afterStart?.(e);
  };
  const onMove = (e: TouchEvent) => {
    options?.beforeMove?.(e);
    end.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    options?.afterMove?.(e);
  };
  const onEnd = (e: TouchEvent) => {
    options?.beforeEnd?.(e);
    swiping.value = false;
    start.value = undefined;
  options?.afterEnd?.(e);
  };
  onMounted(() => {
    if (!el.value) {
      return;
    }
    el.value.addEventListener("touchstart", onStart);

    el.value.addEventListener("touchmove", onMove);

    el.value.addEventListener("touchend", onEnd);
  });
  onUnmounted(() => {
    if (!el.value) {
      return;
    }
    el.value.removeEventListener("touchstart", onStart);
    el.value.removeEventListener("touchmove", onMove);
    el.value.removeEventListener("touchend", onEnd);
  });
  return {
    swiping,
    direction,
    distance,
    start,
    end,
  };
};
