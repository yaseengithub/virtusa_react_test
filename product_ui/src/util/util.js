export const setLocalStore = (name, value) => {
    localStorage.setItem(name, value);
}

export const getLocalStore = (name) => {
    return localStorage.getItem(name)
}