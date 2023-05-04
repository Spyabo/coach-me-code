export default function stringToArray(str: string) {
    return str.trim().split(/[^a-zA-Z]+/);
}
