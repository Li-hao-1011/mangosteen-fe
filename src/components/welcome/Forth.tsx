import s from './welcome.module.scss';
export const Forth = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#钱包收入'></use>
    </svg>
    <h2>云上备份<br />不怕账单丢失</h2>
  </div>
)

Forth.displayName = 'Forth'