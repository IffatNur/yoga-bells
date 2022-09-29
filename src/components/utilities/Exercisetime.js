const setBreakStoredTime = (breakTime) => {
    let details = {};
    details['time'] = breakTime;
    localStorage.setItem('break-time', JSON.stringify(details))
}

const getBreakStoredTime = ()=>{
    let details = {};
    const storedTime = localStorage.getItem('break-time');
    if(storedTime){
        details = JSON.parse(storedTime);
    } 
    return details;
}
export {
    setBreakStoredTime,
    getBreakStoredTime
};