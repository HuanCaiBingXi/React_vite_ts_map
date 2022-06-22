import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Tab.module.less";
import { AppDispatch, changeType, selectType } from "@/store";
interface Props {
    type: 1 | 2;
    content: string;
}
const index: React.FC<Props> = ({ type, content }) => {
    const tabType = useSelector(selectType);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div
            className={tabType == type ? style["active"] : ""}
            onClick={() => {
                dispatch(changeType(type));
            }}
        >
            {content}
        </div>
    );
};

export default index;
