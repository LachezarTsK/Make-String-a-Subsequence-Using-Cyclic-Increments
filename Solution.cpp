
#include <vector>
#include <string>
using namespace std;

class Solution {
    
    static const int ALPHABET_SIZE = 26;

public:
    bool canMakeSubsequence(string& toCheckForTargetSubsequence, const string& targetSubsequence) const {
        if (targetSubsequence.size() > toCheckForTargetSubsequence.size()) {
            return false;
        }

        size_t indexTarget = 0;
        for (size_t i = 0; i < toCheckForTargetSubsequence.length() && indexTarget < targetSubsequence.length(); ++i) {
            if (toCheckForTargetSubsequence[i] == targetSubsequence[indexTarget]
                    || nextLetter(toCheckForTargetSubsequence[i]) == targetSubsequence[indexTarget]) {
                ++indexTarget;
            }
        }

        return indexTarget == targetSubsequence.length();
    }

private:
    char nextLetter(char currentLetter) const {
        return (char) ('a' + (currentLetter + 1 - 'a') % ALPHABET_SIZE);
    }
};
