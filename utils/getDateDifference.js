const getDateDifference = (date) => {
    const currentDate = new Date();
    const dayDiff = currentDate.getDate() - date.getDate();
    const hoursDiff = currentDate.getHours() - date.getHours();
    const minutesDiff = currentDate.getMinutes() - date.getMinutes();

    if (currentDate.getDate() > date.getDate())
        return dayDiff === 1 ? `${dayDiff} day` : `${dayDiff} days`;
    if (currentDate.getHours() > date.getHours())
        return hoursDiff === 1 ? `${hoursDiff} hour` : `${hoursDiff} hours`;
    if (currentDate.getMinutes() > date.getMinutes())
        return minutesDiff === 1 ? `${minutesDiff} minute` : `${minutesDiff} minutes`;
    return null;
}

export default getDateDifference;