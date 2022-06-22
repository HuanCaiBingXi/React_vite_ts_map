import React, { useState } from "react";
import style from "./Maps.module.less";
import FisrtMap from "./FirstMap";
import TwiceMap from "./TwiceMap";
import ButtonBox from "./ButtonBox";
import { RequestList } from "@/api/ChinaList";
const index = () => {
    const { isLoading, mapData } = RequestList();
    const [isShow, setisShow] = useState(true);
    return (
        <div className={style["Maps"]}>
            {!isLoading ? (
                <div className={style["MapsContainer"]}>
                    <FisrtMap DataArr={mapData} isShow={isShow} />
                    <TwiceMap DataArr={mapData} isShow={!isShow} />
                </div>
            ) : null}
            <ButtonBox setisShow={setisShow} />
        </div>
    );
};

export default index;
