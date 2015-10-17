
/*Get Input Elements*/
var wordInput = document.getElementById("wordInput");
var textInput = document.getElementById("textInput");

/*Get Output Element*/
var wordCountOutput = document.getElementById("wordCountOutput");

/*Run When Submit Button Is Clicked*/
function update() {
    wordCountOutput.value = getWordCount(textInput.value, wordInput.value);
}

/*Get The Number Of Times A Word Occurs In A Given String*/
function getWordCount(string, word) {
    var index = 0, count = 0;
    while(index < string.length) {
        var wordIndex = string.indexOf(word, index);
        if(wordIndex !== -1) {
            count++;
            index = wordIndex + 1;
        } else {
            index++;
        }
    }
    return count;
}
