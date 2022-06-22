import { apiFetch } from "@/api/index";
import React, { useEffect, useState } from "react";

interface todayTotal {
    confirm: number;
    dead: number;
    heal: number;
    input: number;
    severe: number;
    suspect: number;
}
interface areaOneTree {
    children: Omit<areaOneTree, "children">[];
    id: string;
    lastUpdateTime: string;
    name: string;
    today: todayTotal;
    total: todayTotal;
}
export interface IDdata {
    name: string;
    areaTree: areaOneTree[];
    chinaDaylist: [];
    chinaTotal: {
        extData: {
            noSymptom: number;
            incrNoSymptom: number;
        };
        today: {
            input: number;
            dead: number;
            heal: number;
            storeConfirm: number;
            confirm: number;
        };
        total: {
            heal: number;
            confirm: number;
            input: number;
            dead: number;
        };
    };
    china: areaOneTree;
    hbData: Omit<areaOneTree, "children">;
    lastUpdateTime: string;
}

export interface ImapData {
    name: string;
    value: number;
}
export const RequestList = () => {
    const [isLoading, setisLoading] = useState(true);
    const [List, setList] = useState<Partial<IDdata>>();
    const [mapData, setMapData] = useState<ImapData[]>([]);
    useEffect(() => {
        const startrequest = async () => {
            const list = await apiFetch<IDdata>(
                "/api/ug/api/wuhan/app/data/list-total"
            );

            const newList = { ...list?.data };
            newList.chinaTotal = list?.data.chinaTotal;
            newList.china = list?.data.areaTree.find((v) => v.id === "0");
            newList.hbData = newList.china?.children.find((v) => {
                return v.id === "420000";
            });
            setList(newList);
            const newMapData: ImapData[] = [];
            newList.china?.children.map((v) => {
                newMapData.push({
                    name: v.name + "省",
                    value: v.total.confirm - v.total.dead - v.total.heal || 0,
                });
            });

            setMapData(newMapData);
            setisLoading(false);
        };
        startrequest();
    }, []);

    return { isLoading, List, mapData };
};
