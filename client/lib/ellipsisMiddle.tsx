export const ellipsisMiddle = (text: string) => {
  const resut = text.substring(0, 4) + '...' + text.substring(text.length - 4);
  return resut;
};
