const STORAGE_KEY = "@USER@";

export const saveAuth = (payload) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export const getAuthDetails = () => {
    const authDetails = localStorage.getItem(STORAGE_KEY);
    if (authDetails) {
        return JSON.parse(authDetails);
    }
    return {};
}

export const clearAuthDetails = () => {
    localStorage.removeItem(STORAGE_KEY);
}