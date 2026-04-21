export const getAssetPath = (path: string): string => {
  const baseUrl = import.meta.env.BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  if (path.startsWith('/')) {
    return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) + path : baseUrl + path;
  }
  return path;
};
