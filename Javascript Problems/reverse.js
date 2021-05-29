function reverseString(string) {
    let reversed = "";
    for (char in string) {
        reversed = string[char] + reversed;
    }
    return reversed;
}

console.log(reverseString("0 1  2 3 4 5 6 7 8 9"));
