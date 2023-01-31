import env from "./env";

export const get = async <T>(path: string) => {
    const response = await fetch(`${env.REACT_APP_BACKEND_URL}/${path}`);
    const jsonObj = await response.json() as T;
    return jsonObj;
};

export const remove = async (path: string, resourceId: string) => {
    return fetch(`${env.REACT_APP_BACKEND_URL}/${path}/${resourceId}`, { method: "DELETE" });
};

export const post = async<T>(path: string, body: T) => {
    return fetch(`${env.REACT_APP_BACKEND_URL}/${path}`, {
        method: "POST", body: JSON.stringify(body), headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
};
