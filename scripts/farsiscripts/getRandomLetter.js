export function getRandomLetter() {
    const letters = "ابپتثجچحخدذرزسشصضطظعغفقکگلمنوهی";
    const index = Math.floor(Math.random() * letters.length);
    let result = letters[index];
    return result;
}