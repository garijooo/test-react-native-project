const formatDate = (date) => {
    const hours = Math.floor(date.getHours() / 10) ? date.getHours() : `0${date.getHours()}`;
    const minutes = Math.floor(date.getMinutes() / 10) ? date.getMinutes() : `0${date.getMinutes()}`;
    return `${hours}:${minutes}`;
}

export default formatDate;