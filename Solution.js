
/**
 * @param {string} toCheckForTargetSubsequence
 * @param {string} targetSubsequence
 * @return {boolean}
 */
var canMakeSubsequence = function (toCheckForTargetSubsequence, targetSubsequence) {
    if (targetSubsequence.length > toCheckForTargetSubsequence.length) {
        return false;
    }

    this.ALPHABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;

    let indexTarget = 0;
    for (let i = 0; i < toCheckForTargetSubsequence.length && indexTarget < targetSubsequence.length; ++i) {
        if (toCheckForTargetSubsequence.charAt(i) === targetSubsequence.charAt(indexTarget)
                || nextLetter(toCheckForTargetSubsequence.codePointAt(i)) === targetSubsequence.charAt(indexTarget)) {
            ++indexTarget;
        }
    }

    return indexTarget === targetSubsequence.length;
};

/**
 * @param {number} codePointCurrentLetter
 * @return {string}
 */
function nextLetter(codePointCurrentLetter) {
    return String.fromCodePoint(this.ASCII_SMALL_CASE_A + (codePointCurrentLetter + 1 - this.ASCII_SMALL_CASE_A) % this.ALPHABET_SIZE);
}
