import s from './welcome.module.scss';
export const Third = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#经济图表'></use>
      </svg>
      <h2>数据可视化<br />数据一目了然</h2>
    </div>
  )
}

Third.displayName = 'Third'