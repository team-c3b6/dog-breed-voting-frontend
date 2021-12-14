export default function changeName(name: string): string {
    let fixedName = name;
    if (name.indexOf("-")) {
        fixedName = name.slice(name.indexOf("-") + 1, name.length) + " " + name.slice(0, name.indexOf("-") + 1);
    }
    return fixedName[0].toUpperCase() + fixedName.slice(1, -1)
}