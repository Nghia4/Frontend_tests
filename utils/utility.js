function replaceNumber(str, index, char) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + char + str.substr(index + 1);
}

export {replaceNumber}