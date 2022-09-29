const getBreakStoredTime = (breakTime) => {
    let details = {};
    details['break-time'] = breakTime;
    localStorage.setItem('exercise-details', JSON.stringify(details))
}


export {
    getBreakStoredTime
};