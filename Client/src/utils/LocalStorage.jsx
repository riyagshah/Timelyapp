
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
const handlelogout=(key)=>{
    console.log(key)
    window.location.reload(false)
localStorage.setItem(key,"")

}
export { getLocalData, saveLocalData ,handlelogout};