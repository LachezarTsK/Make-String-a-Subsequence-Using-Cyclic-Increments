
using System;
public class Solution
{
    const int ALPHABET_SIZE = 26;

    public bool CanMakeSubsequence(string toCheckForTargetSubsequence, string targetSubsequence)
    {
        if (targetSubsequence.Length > toCheckForTargetSubsequence.Length)
        {
            return false;
        }

        int indexTarget = 0;
        for (int i = 0; i < toCheckForTargetSubsequence.Length && indexTarget < targetSubsequence.Length; ++i)
        {
            if (toCheckForTargetSubsequence[i] == targetSubsequence[indexTarget]
                    || nextLetter(toCheckForTargetSubsequence[i]) == targetSubsequence[indexTarget])
            {
                ++indexTarget;
            }
        }

        return indexTarget == targetSubsequence.Length;
    }

    private char nextLetter(char currentLetter)
    {
        return (char)('a' + (currentLetter + 1 - 'a') % ALPHABET_SIZE);
    }
}
