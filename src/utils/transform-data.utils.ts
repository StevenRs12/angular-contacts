export function getImgLetters(name: string): string {
  const nameArray = name.split(' ');

  const initialLetterName = nameArray[0].charAt(0).toUpperCase();
  const initialLetterLastName = nameArray[1].charAt(0).toUpperCase();

  return initialLetterName + initialLetterLastName;
}
