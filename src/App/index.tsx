import { useState } from "react";
import style from "./App.less";
import Header from "./Header";
import Maps from "./Maps";
import { useSelector } from "react-redux";
import { selectType } from "@/store";
export const App = () => {
    const tabType = useSelector(selectType);
    return (
        <div>
            <Header />
            {tabType == 1 ? <Maps /> : null}
        </div>
    );
};

export default App;
