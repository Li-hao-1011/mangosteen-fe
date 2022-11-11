import { AxiosError } from 'axios'
import { Dialog } from 'vant'
import { defineComponent, PropType, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { BackIcon } from '../../shared/BackIcon'
import { http } from '../../shared/Http'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'
import { Tags } from './Tags'
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      kind: '支出',
      tag_id: [],
      amount: 0,
      happen_at: new Date().toISOString()
    })
    const onUpdateSelected = (name: string) => (formData.kind = name)
    const reouter = useRouter()
    const onError = (error: AxiosError<ResourceErrors>) => {
      if (error.response?.status === 422) {
        Dialog.alert({
          title: '出错',
          message: Object.values(error.response.data.errors).join('\n')
        })
      }
      throw error
    }
    const onSubmit = async () => {
      await http
        .post<Resource<Item>>('/items', formData, {
          _mock: 'itemCreate',
          _autoLoading: true
        })
        .catch(onError)
      reouter.push('/items')
    }
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => '记一笔',
          icon: () => <BackIcon class={s.navIcon} />,
          default: () => (
            <div class={s.wrapper}>
              <Tabs selected={formData.kind} onUpdate:selected={onUpdateSelected} class={s.tabs}>
                {/* <Tabs v-model:selected={refkind.value}> */}
                <Tab name="支出">
                  <Tags kind="expenses" v-model:selected={formData.tag_id[0]} />
                </Tab>
                <Tab name="收入">
                  <Tags kind="income" v-model:selected={formData.tag_id[0]} />
                </Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad v-model:happenAt={formData.happen_at} v-model:amount={formData.amount} onSubmit={onSubmit} />
              </div>
            </div>
          )
        }}
      </MainLayout>
    )
  }
})
