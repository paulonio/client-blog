export const parseName = (capitalized: string) => {
  return capitalized.toLocaleLowerCase().split(' ').join('-');
};
