import { Divider } from 'vant'
import { computed, defineComponent, PropType, reactive } from 'vue'
import { FormItem } from '../../shared/Form'
import { Money } from '../../shared/Money'
import s from './Bars.module.scss'
export const Bars = defineComponent({
  props: {
    data: {
      type: Array as PropType<{ tag: Tag; percent: number; amount: number }[]>,
      requried: true
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        {props.data ? (
          props.data.map(({ tag, amount, percent }) => {
            return (
              <div class={s.topItem}>
                <div class={s.sign}>{tag.sign}</div>
                <div class={s.bar_wrapper}>
                  <div class={s.bar_text}>
                    <span>
                      {tag.name} - {percent}%
                    </span>
                    <Money value={amount} />
                  </div>
                  <div class={s.bar}>
                    <div class={s.bar_inner} style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div>没有数据</div>
        )}
      </div>
    )
  }
})
