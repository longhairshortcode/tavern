import style from './StartOrder.module.css'
import { useState } from 'react';

function StartOrder({bgColor, hoverBgColor}) {

  const [hover, setHover] = useState(false)


  const changeBg = {
    backgroundColor: hover ? hoverBgColor : bgColor
  }
  return (
    <button style={changeBg} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className={style.startOrderButton}>
      Start An Order
    </button>
  );
}

export default StartOrder
