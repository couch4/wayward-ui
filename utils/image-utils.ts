export const getQueryByName = (str: string, key: string) => {
  const queryString = str;
  const regex = new RegExp('[?&]' + key + '=([^&#]*)');
  const matched = queryString.match(regex);
  return matched ? matched[1] : '';
};

export const stripQueryString = (
  str: string = '',
  andRemoveFirstSlash = false,
) => {
  const urlWithoutParams = str.replace(/\?.*$/, '');
  let url = urlWithoutParams;
  if (andRemoveFirstSlash && urlWithoutParams[0] === '/') {
    url = urlWithoutParams.substring(1);
  }
  return url;
};
