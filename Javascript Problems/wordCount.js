let str = `hello`

function wordCount(str) {
    let count = 0;


    for (var i = 0; i < str.length; i++) {
        count += 1;
    }
    return count;
};

console.log(wordCount(str));
