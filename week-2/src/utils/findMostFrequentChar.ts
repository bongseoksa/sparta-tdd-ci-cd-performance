export function findMostFrequentChar(str: string) {
    const charMap:{[key: string]: number} = {};

    for (const char of str) {        
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }


    let maxCount = 0;
    for (const char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
        }        
    }
    
    const maxChars = Object.keys(charMap).filter((char) => charMap[char] === maxCount);
    return maxChars[Math.floor(Math.random() * maxChars.length)] || '';
}
