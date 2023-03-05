import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from './Button'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import { Icon } from './Icon'

export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (_props, _context) => {
    const router = useRouter()
    const onClick = () => {
      router.back()
    }
    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          {/* <Icon name="未开通支付方式" class={s.pig} /> */}

          <svg>
            <use xlinkHref="#赢得奖品卡"></use>
          </svg>
        </Center>
        <p class={s.text}>敬请期待</p>
        <p class={s.link}>
          <Button onClick={onClick}>返回</Button>
        </p>
      </div>
    )
  }
})

export default ComingSoon
