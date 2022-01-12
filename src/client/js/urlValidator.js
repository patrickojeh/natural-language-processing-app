export function validateUrl(url) {
  return /^(http[s]?:\/\/)?(\w+\.)?[\w\d_\-\/\?]+\.(\w)+([\w\d_\-\/\?])+?$/i.test(url);
}