const key = 'mytoken'

export const getToken = () => {
    return sessionStorage.getItem(key)
}

export const setToken = (val) => {
    sessionStorage.setItem(key,val)
}

export const removeToken = ()=> {
    sessionStorage.removeItem(key)
}