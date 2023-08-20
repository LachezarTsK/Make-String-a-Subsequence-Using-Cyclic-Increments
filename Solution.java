
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public boolean canMakeSubsequence(String toCheckForTargetSubsequence, String targetSubsequence) {
        if (targetSubsequence.length() > toCheckForTargetSubsequence.length()) {
            return false;
        }

        int indexTarget = 0;
        for (int i = 0; i < toCheckForTargetSubsequence.length() && indexTarget < targetSubsequence.length(); ++i) {
            if (toCheckForTargetSubsequence.charAt(i) == targetSubsequence.charAt(indexTarget)
                    || nextLetter(toCheckForTargetSubsequence.charAt(i)) == targetSubsequence.charAt(indexTarget)) {
                ++indexTarget;
            }
        }

        return indexTarget == targetSubsequence.length();
    }

    private char nextLetter(char currentLetter) {
        return (char) ('a' + (currentLetter + 1 - 'a') % ALPHABET_SIZE);
    }
}
