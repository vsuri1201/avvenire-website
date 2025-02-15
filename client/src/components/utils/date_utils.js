function convertDateFormat(dateStr) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [month, day, year] = dateStr.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    return `${months[monthIndex]} ${year}`;
}

export default convertDateFormat;