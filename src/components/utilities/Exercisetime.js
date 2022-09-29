const getStoredTime = (exerciseTime, breakTime) => {
    let details = {};
    details['exercise-time'] = exerciseTime;
    details['break-time'] = breakTime;
    const storedDetails = localStorage.getItem('exercise-details');
    if(storedDetails){
        details = JSON.parse(storedDetails);
    }
    localStorage.setItem('exercise-details', JSON.stringify(details))
}
// const getBreakStoredTime = (breakTime) => {
//     let details = {};
//     details['break-time'] = breakTime;
//     const storedDetails = localStorage.getItem('exercise-details');
//     if(storedDetails){
//         details = JSON.parse(storedDetails);
//     }
//     localStorage.setItem('exercise-details', JSON.stringify(details))
// }


export {
    getStoredTime
};