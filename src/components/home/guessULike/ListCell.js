import React from 'react'
import style from './main.css'

export const ListCell = (props) => (
  // console.log(props.skipToDetail),
    <div className={style.listCellContainer} onClick={()=>props.skipToDetail(new Date().getMilliseconds())}>
        <div className={style.listCellLeftDiv}>
            <img className={style.listCellImgStyle} src={props.item.thumbnail} />
        </div>
        <div className={style.listCellRightDiv}>
            <p className={style.listCellName}>{props.item.name}</p>
            <p className={style.listCellDesc}>{props.item.desc}</p>
            <div className={style.listCellBottomDiv}>
                <div>
                    <span className={style.listCellPrice}>{props.item.price}</span>
                    <span className={style.listCellExPrice}>{props.item.exPrice}</span>
                </div>
                <span className={style.hasSolied}>已售 {props.item.cell}</span>
            </div>
        </div>
    </div>
);
