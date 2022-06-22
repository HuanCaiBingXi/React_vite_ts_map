import React, { useEffect, useRef, useState } from "react";
import style from "../AllMaps.module.less";
import { ImapData } from "@/api/ChinaList";
import { InitEcharts } from "../InitEcharts";
interface Props {
    DataArr: ImapData[];
    isShow: boolean;
}
const index: React.FC<Props> = ({ DataArr, isShow }) => {
    const { Mapdom } = InitEcharts(DataArr);
    return (
        <div
            ref={Mapdom}
            className={style["MapCharts"]}
            style={{
                transform: isShow ? `translateX(0%)` : `translateX(-100%)`,
            }}
        ></div>
    );
};

export default index;
