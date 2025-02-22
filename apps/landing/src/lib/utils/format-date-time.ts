const formatDateTime = (dateString: string) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedDate = `${day}/${months.indexOf(month) + 1
        }/${year} | ${formattedHours}:${formattedMinutes} ${ampm}`;

    return formattedDate;
}

export { formatDateTime };

// dateString example: "2024-05-09T01:08:33.271Z";
