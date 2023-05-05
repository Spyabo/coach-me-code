export default function stringToArray(str: string) {
    return str ? str.trim().split(/[^a-zA-Z]+/) : [];
}
