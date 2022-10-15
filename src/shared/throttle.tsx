// 节流函数
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  time: number
) => {
  let result: ReturnType<T>;
  let timer: number | undefined = undefined;
  return (...args: Parameters<T>) => {
    if (timer) {
      return result;
    } else {
      result = fn(...args);
      timer = setTimeout(() => {
        timer = undefined;
      }, time);
      return result;
    }
  };
};
