export const getInputNameByTitle = (title: string) => {
  return title.replace(/\s/g, '').toLowerCase();
};