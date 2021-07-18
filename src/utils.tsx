export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const capitalize = (string: string) =>
  [string.charAt(0).toUpperCase(), string.slice(1)].join("");
