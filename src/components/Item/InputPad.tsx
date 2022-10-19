import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import { time } from "../../shared/time";
import s from "./InputPad.module.scss";
import { DatetimePicker, Popup } from "vant";

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<String>,
    },
  },
  setup: (props, context) => {
    const now = new Date();
    const refDate = ref<Date>(now);
    const refTempDate = ref<Date>(now);
    const refDatePickerVisible = ref(false);
    const showDatePicker = () => {
      refTempDate.value = refDate.value;
      refDatePickerVisible.value = true;
    };
    const hideDatePicker = () => {
      refDatePickerVisible.value = false;
    };
    const setDate = (date: Date) => {
      refDate.value = date;
      hideDatePicker();
    };
    const btnMap = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: "删除", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    return () => (
      <>
        <div class={s.date_and_amount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span>
              <span onClick={() => showDatePicker()}>
                {time(refDate.value).format()}
              </span>
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  v-model={refTempDate.value}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>1999.99</span>
        </div>
        <div class={s.buttons}>
          {btnMap.map((button) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))}
        </div>{" "}
      </>
    );
  },
});
