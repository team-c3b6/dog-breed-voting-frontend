export function retrieveBreedName(url: string) {
    return url.slice(url.indexOf("breeds") + 7, url.lastIndexOf("/"))
}
