import React, { useEffect, useRef, useState } from "react";
import chinaJson from "@/../public/china.json";
import { ImapData } from "@/api/ChinaList";
import * as echarts from "echarts";
export const InitEcharts = (DataArr: ImapData[]) => {
    const Mapdom = useRef<HTMLDivElement>(null);
    const [AllOptionSeries, setAllOptionSeries] = useState<any>({
        type: "map",
        map: "china",
        colorBy: "series",
        zoom: 1.3,
        top: 80,
        label: {
            show: true,
            color: "#333",
            fontSize: 10,
        },
    });
    const [AllMapOption, setAllMapOption] = useState<any>({
        title: {
            subtext: "单击省份课可查看病例数",
        },
        tooltip: {
            trigger: "item",
            formatter: "现有确诊病例<br />{b}:{c}",
        },
        visualMap: [
            {
                show: false,
            },
        ],
    });
    useEffect(() => {
        const Mymap = echarts.init(Mapdom.current!);
        echarts.registerMap("china", chinaJson as any);
        Mymap.setOption({
            ...AllMapOption,
            series: [{ ...AllOptionSeries, data: DataArr }],
        });
    }, []);

    return { Mapdom };
};
