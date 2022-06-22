import React, { useContext, useEffect, useState } from "react";
import style from "./index.module.less";
import img from "/image/崩坏学园2九霄.jpeg";
import ChinaList from "./List/ChinaList";
import HubeiList from "./List/HuBei";
import Tabs from "./Tabs";
import { RequestList } from "@/api/ChinaList";
import { useSelector } from "react-redux";
import { selectType } from "@/store";
const index = () => {
    const tabType = useSelector(selectType);
    const { isLoading, List } = RequestList();

    return (
        <div className={style["box"]}>
            <div className={style["top-box"]}>
                <img className={style["bg-img"]} src={img} alt="" />
                <div className={style["title-text"]}>
                    <h1>科学防护,共渡难关</h1>
                    <h2>肺炎疫情实时动态播报</h2>
                </div>
                <div className={style["cover-cards"]}>
                    <div className={style["cover-tab"]}>
                        <Tabs />
                    </div>

                    {!isLoading ? (
                        tabType === 1 ? (
                            <ChinaList chinaTotal={List?.chinaTotal!} />
                        ) : (
                            <HubeiList hbData={List?.hbData!} />
                        )
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default index;
