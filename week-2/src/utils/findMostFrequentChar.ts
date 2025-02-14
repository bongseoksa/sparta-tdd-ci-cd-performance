export function findMostFrequentChar(str: string) {
    const charMap:{[key: string]: number} = {};

    for (const char of str) {        
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return '';
}
