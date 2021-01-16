// Pass sentence to function, returns sentence with raspberry noise between
// each word like when SpongeBob was in RockBottom

function raspify(sentence) {
    newWord = "";
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        newWord += words[i] + " 👅thbbpt👅 ";
    }
    return newWord;
}
