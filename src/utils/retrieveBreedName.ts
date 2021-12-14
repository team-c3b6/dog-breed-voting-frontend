export function retrieveBreedName(url: string | undefined): string {
  return url ? url.slice(url.indexOf("breeds") + 7, url.lastIndexOf("/")): "";
}

//url can possibly be undefined