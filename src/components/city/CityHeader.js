import React from 'react'
import style from './css/style.css'
import BackIcon from './css/back.png'

export const CityHeader = (props) => (
    <div className={style.headerContainer} onClick={()=>props.history.goBack()}>
        <img src={BackIcon}/>
        <span>
            选择城市
        </span>
    </div>
);
