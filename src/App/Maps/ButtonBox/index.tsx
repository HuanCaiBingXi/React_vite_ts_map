import React from "react";
import style from "./ButtonBox.module.less";
interface Props {
    setisShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const index: React.FC<Props> = ({ setisShow }) => {
    return (
        <div className={style["buttonBox"]}>
            <button
                onClick={() => {
                    setisShow(true);
                }}
            >
                现有确诊
            </button>
            <button
                onClick={() => {
                    setisShow(false);
                }}
            >
                累计确诊
            </button>
        </div>
    );
};

export default index;
