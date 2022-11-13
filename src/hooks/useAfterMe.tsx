import { onMounted } from 'vue'
import { useMeStore } from '../stores/useMeStore'

export const useAfterMe = (fn: () => void) => {
  const meStore = useMeStore()
  onMounted(async () => {
    // omMounted 中不允许有未处理的error
    // 写法一
    /*    try {
      await meStore.mePromise
    } catch (error) {
      return
    } */
    // 写法二
    /*    const res = await meStore.mePromise?.catch((error) => new Error())
    if (res instanceof Error) {
      return
    }
    fn() */
    // 写法三
    meStore.mePromise?.then(
      (res) => {
        fn()
      },
      (error) => undefined
    )
  })
}
