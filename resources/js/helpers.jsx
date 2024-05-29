export const formatMessageDateLong = (date) => {
    const now = new Date();
    const inputDate = new Date(date);

    if (isToday(inputDate)) {
        return inputDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else if (isYesterday(inputDate)) {
        return (
            "Yesterday" +
                inputDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })
        );
    } else if (inputDate.getFullYear() === now.getFullYear()) {
        return inputDate.toLocaleDateString([], {
            day: "2-digit",
            month: "short",
        });
    }
    return inputDate.toLocaleDateString();
};

export const formatMessageDateShort = (date) => {
    const now = new Date();
    const inputDate = new Date(date);

    if (isToday(inputDate)) {
        return inputDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else if (isYesterday(inputDate)) {
        return "Yesterday";
    } else if (inputDate.getFullYear() === now.getFullYear()) {
        return inputDate.toLocaleDateString([], {
            day: "2-digit",
            month: "short",
        });
    }
    return inputDate.toLocaleDateString();
};

export const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

export const isYesterday = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    );
};

export const isImage = (file) => {
    let mime = file.mime || file.type;
    mime = mime.split("/");
    return mime[0].toLowerCase() === "image";
};
export const isVideo = (file) => {
    let mime = file.mime || file.type;
    mime = mime.split("/");
    return mime[0].toLowerCase() === "video";
};
export const isAudio = (file) => {
    let mime = file.mime || file.type;
    mime = mime.split("/");
    return mime[0].toLowerCase() === "audio";
};
export const isPDF = (file) => {
    let mime = file.mime || file.type;
    return mime === "application/pdf";
}

export const isPreviewable = (file) => {
    return (
        isImage(file)
        || isVideo(file)
        || isAudio(file)
        || isPDF(file)
    );
};
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];

    let i = 0;
    let size = bytes;
    while (size >= k) {
        size /= k; i++;
    }
    return parseFloat(size.toFixed(dm)) + " " + sizes[i];
};
