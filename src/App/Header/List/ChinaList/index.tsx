import React from "react";
import style from "../List.module.less";

import { IDdata } from "@/api/ChinaList";
interface Props {
    chinaTotal: IDdata["chinaTotal"];
}
const index: React.FC<Props> = ({ chinaTotal }) => {
    return (
        <div className={style["cover-info"]}>
            <div>
                <h4>境外输入</h4>
                <p className={style["bigNumber"]}>{chinaTotal.total.input}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{chinaTotal.today.input}
                    </span>
                </p>
            </div>
            <div>
                <h4>无症状感染者</h4>
                <p className={style["bigNumber"]}>
                    {chinaTotal.extData.noSymptom}
                </p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{chinaTotal.extData.incrNoSymptom}
                    </span>
                </p>
            </div>
            <div>
                <h4>现有确诊</h4>
                <p className={style["bigNumber"]}>
                    {chinaTotal.total.confirm -
                        chinaTotal.today.dead -
                        chinaTotal.today.heal}
                </p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{chinaTotal.today.storeConfirm}
                    </span>
                </p>
            </div>
            <div>
                <h4>累计确诊</h4>
                <p className={style["bigNumber"]}>{chinaTotal.total.confirm}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{chinaTotal.today.confirm}
                    </span>
                </p>
            </div>
            <div>
                <h4>累计死亡</h4>
                <p className={style["bigNumber"]}>{chinaTotal.total.dead}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{chinaTotal.today.dead}
                    </span>
                </p>
            </div>
            <div>
                <h4>累计治愈</h4>
                <p className={style["bigNumber"]}>{chinaTotal.total.heal}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{chinaTotal.today.heal}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default index;
