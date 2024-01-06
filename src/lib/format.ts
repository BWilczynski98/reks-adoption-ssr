import dayjs from "dayjs";

function formatGender(gender: string, type: string): string {
  if (type === "PIES") {
    return gender === "SAMIEC" ? "Pies" : "Suczka";
  } else {
    return gender === "SAMIEC" ? "Kocur" : "Kotka";
  }
}

function formatAge(dateOfBirth: string): string {
  return dayjs(dateOfBirth).fromNow(true);
}

function formatAnimalSize(size: string): string {
  let formatedSize;
  switch (size) {
    case "small":
      return (formatedSize = "Mała");
    case "medium":
      return (formatedSize = "Średnia");
    case "big":
      return (formatedSize = "Duża");
    case "very big":
      return (formatedSize = "Bardzo duża");
    default:
      return (formatedSize = "Średnia");
  }
}

function formatCapitalizeFirstLetter(word: string): string {
  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.toLowerCase().slice(1);

  const capitalizedWord = firstLetter + restOfWord;
  return capitalizedWord;
}

export { formatGender, formatAge, formatAnimalSize, formatCapitalizeFirstLetter };
