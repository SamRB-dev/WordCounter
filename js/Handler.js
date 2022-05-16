// Author: SamRB-dev
/** 
 * @param { null }
 * @returns { null }
*/
function countWords() { // Time Complexity: O(N)
    let str = document.getElementById("input").value;
    let spaces = 0;
    let len = str.length;
    if (len != 0) {
        for (let char of str) {
            if ((char == " ") || (char == "\n") || (char == "\t")) {
                spaces++;
            }
        }
        document.getElementById("status").innerText = "Success";
        if (spaces == 0) {
            document.getElementById("words").innerText = spaces + 1;
        } else {
            document.getElementById("words").innerText = spaces + 1;
        }

    } else {
        document.getElementById("status").innerText = "Please Insert Some Texts";
        document.getElementById("words").innerText = 0;
    }
}


function countChar() {
    let str = document.getElementById("input").value;
    let len = str.length;
    let chars = 0;
    if (len != 0) {
        for (let char of str) {
            if ((char == " ") || (char == "\n") || (char == "\t")) {
                continue;
            } else {
                chars++;
            }
        }
        document.getElementById("status").innerText = "Success";
        document.getElementById("chars").innerText = chars;
    } else {
        document.getElementById("status").innerText = "Please Insert Some Texts";
        document.getElementById("chars").innerText = 0;
    }
}

/**
 * Main Handler
 * @param { null }
 * @returns { null }
 */
function handle() {
    countWords();
    countChar();
}