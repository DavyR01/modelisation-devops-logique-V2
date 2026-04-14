
const br = () => console.log("-------------------");

// Longueur message sans espaces
function lengthWithoutSpaces(input: string): number {
  if (typeof input !== "string") {
    throw new TypeError("input must be a string");
  }

  if (input.length === 0) {
    return 0;
  }

  return input.replace(/\s/g, "").length;
}

console.log(lengthWithoutSpaces("Bonjour le monde !")); // 15 et non 16 comme l'énoncé
br();


// Salutation prénom avec majuscule
function greetFirstName(firstName: string): string {
  if (typeof firstName !== "string") {
    throw new TypeError("firstName must be a string");
  }

  const trimmed = firstName.trim();

  if (trimmed === "") {
    return "Bonjour";
  }

  return (
    "Bonjour " +
    trimmed
      .split("-")
      .filter(part => part !== "")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("-")
  );
}

console.log(greetFirstName("jean-pierre")); br(); // "Bonjour Jean-Pierre"






// Détection point exclamation en fin
function endsWithExclamation(text: string): boolean {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (text.trim() === "") {
    return false;
  }

  return text.trim().endsWith("!");
}

console.log(endsWithExclamation("Je suis très satisfait !")); br(); // true






// Inversion ordre des mots phrase
function reverseWords1(sentence: string): string {
  if (typeof sentence !== "string") {
    throw new TypeError("sentence must be a string");
  }

  if (sentence.trim() === "") {
    return "";
  }

  return sentence.trim().split(/\s+/).reverse().join(" ");
}

const frenchPhrase = "Je mange une pomme";
console.log(reverseWords1(frenchPhrase)); br(); // "pomme une mange Je"





// Comptage occurrences lettre dans texte
function countLetterOccurrences(text: string, letter: string): number {
  if (typeof text !== "string" || typeof letter !== "string") {
    throw new TypeError("text and letter must be strings");
  }

  if (letter.length !== 1) {
    throw new RangeError("letter must contain exactly one character");
  }

  return text.split(letter).length - 1;
}
console.log(countLetterOccurrences("programmation", "m")); br(); // 2





// Conversion nom vers format JavaScript
function toCamelCase(value: string): string {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  if (value.trim() === "") {
    return "";
  }

  return value
    .split("_")
    .filter(part => part !== "")
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join("");
}

console.log(toCamelCase("user_first_name")); br(); // "userFirstName"





// Analyse voyelles pour sonorité poétique
function countVowels(text: string): number {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (text === "") {
    return 0;
  }

  const vowels = new Set(["a", "e", "i", "o", "u", "y"]);
  let count = 0;

  for (const char of text.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("un ver au hasard !")); br(); // 6






// Alternance visuelle pour mots mémorisables
function alternateCase(text: string): string {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (text === "") {
    return "";
  }

  return text
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

console.log(alternateCase("password")); br(); // "pAsSwOrD"







// Nettoyage répétitions caractères utilisateurs
function removeDuplicates(text: string): string {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (text === "") {
    return "";
  }

  return text
    .split("")
    .filter((char, index, array) => char !== array[index - 1])
    .join("");
}

const messageUtilisateur = "Bonjouuuur !!! J'ai besoiiiin d'aide....";
console.log(removeDuplicates(messageUtilisateur)); br(); // "Bonjour ! J'ai besoin d'aide."




// Génération initiales identifiant employé
function getInitials(fullName: string): string {
  if (typeof fullName !== "string") {
    throw new TypeError("fullName must be a string");
  }

  if (fullName.trim() === "") {
    return "";
  }

  return fullName
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase())
    .join("");
}

console.log(getInitials("Jean Pierre Dupont")); br(); // "JPD"









// Masquage affichage données sensibles
function maskString(value: string, visibleCount: number): string {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  if (!Number.isInteger(visibleCount) || visibleCount < 0) {
    throw new RangeError("visibleCount must be a non-negative integer");
  }

  if (value === "" || visibleCount === 0) {
    return "";
  }

  return value.slice(-visibleCount);
}

const cardNumber = "1234567890123456";
console.log(maskString(cardNumber, 4)); br(); // "3456"

export {};
