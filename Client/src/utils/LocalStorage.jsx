
const getLocalData = (key)=>{
    if (key) {
        const data = localStorage.getItem(key);
        return data;
    }
}

const saveLocalData = (key, value) => {
    console.log(key,value)
    if (key && value) {
        localStorage.setItem(key, value);
    }
};
export { getLocalData, saveLocalData };