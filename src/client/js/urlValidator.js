export function validateUrl(url) {
  return /^(http[s]?:\/\/)?(www\.)?[\w\d_\-\/\?]+\.(\w)+([\w\d_\-\/\?])+?$/i.test(url);
}