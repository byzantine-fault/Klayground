export const ellipsisMiddle = (text: string) => {
  if (!text) return '';
  const resut = text.substring(0, 4) + '...' + text.substring(text.length - 4);
  return resut;
};
