export function getRandomLetter() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const index = Math.floor(Math.random() * letters.length);
    let result = letters[index];
    if (Math.random() < 0.5) {
        result = result.toUpperCase();
    }
    return result;
}