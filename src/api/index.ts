import { responseType } from "./responseType";
export const apiFetch = async <T>(
    url: string,
    option?: RequestInit
): Promise<responseType<T> | undefined> => {
    try {
        return fetch(url, {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            ...option,
        }).then((res) => res.json());
    } catch (error) {
        console.log("Request Failed", error);
    }
};
