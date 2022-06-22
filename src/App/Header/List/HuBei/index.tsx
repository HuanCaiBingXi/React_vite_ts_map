import React from "react";
import style from "../List.module.less";
import { IDdata } from "@/api/ChinaList";

interface Props {
    hbData: IDdata["hbData"];
}
const index: React.FC<Props> = ({ hbData }) => {
    return (
        <div className={style["cover-info"]}>
            <div>
                <h4>累计确诊</h4>
                <p className={style["bigNumber"]}>{hbData.total.confirm}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{hbData.today.confirm}
                    </span>
                </p>
            </div>
            <div>
                <h4>累计死亡</h4>
                <p className={style["bigNumber"]}>{hbData.total.dead}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{hbData.today.dead}
                    </span>
                </p>
            </div>
            <div>
                <h4>累计治愈</h4>
                <p className={style["bigNumber"]}>{hbData.total.heal}</p>
                <p>
                    <span>较昨日</span>
                    <span className={style["smallNumber"]}>
                        +{hbData.today.heal}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default index;
