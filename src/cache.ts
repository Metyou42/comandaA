export const setStorage = (key: string, value: string | unknown): void => {
    if (typeof value === "string") {
        localStorage.setItem(`PRIM-${key}`, value);
    } else {
        const data = JSON.stringify(value);
        localStorage.setItem(`PRIM-${key}`, data);
    }
};

export const getStorage = <T = unknown>(key: string): T => {
    const value = localStorage.getItem(`PRIM-${key}`) || "";

    try {
        const data = JSON.parse(value) as T;
        return data;
        // eslint-disable-next-line no-empty
    } catch {}

    return value as unknown as T;
};

export const delStorage = (key: string): void => {
    localStorage.removeItem(`PRIM-${key}`);
};

export const clearStorage = (): void => {
    localStorage.clear();
};
