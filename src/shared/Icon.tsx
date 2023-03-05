import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'

export type IconName =
  | 'add'
  | 'chart'
  | 'clock'
  | 'cloud'
  | 'mangosteen'
  | 'pig'
  | 'menu'
  | 'charts'
  | 'notify'
  | 'export'
  | 'left'
  | 'notes'
  | 'date'
  | 'newpig'
  | '钱包的副本'
  | '经济图表'
  | '钱包收入'
  | '未开通支付方式'
  | '钱包'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})
