import React from "react";
import Tab from "./Tab";
interface ItabArray {
    type: 1 | 2;
    content: string;
}

const index = () => {
    const tabArray: ItabArray[] = [
        {
            type: 1,
            content: " 全国疫情数据系统",
        },
        {
            type: 2,
            content: " 湖北疫情数据",
        },
    ];
    return (
        <>
            {tabArray.map((tab) => {
                return (
                    <Tab type={tab.type} content={tab.content} key={tab.type} />
                );
            })}
        </>
    );
};

export default index;
