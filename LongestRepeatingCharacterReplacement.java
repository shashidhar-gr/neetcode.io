import java.util.*;

public class LongestRepeatingCharacterReplacement {
    public static void main(String[] args) {
        //String s = "EOEMQLLQTRQDDCOERARHGAAARRBKCCMFTDAQOLOKARBIJBISTGNKBQGKKTALSQNFSABASNOPBMMGDIOETPTDICRBOMBAAHINTFLH";
        //int k = 7;
        String s = "ABABAABA";
        int k = 2;
        int maxSubString = getMaxSubString(s, k);

        System.out.print(maxSubString);
    }

    static int characterReplacement(String s, int k) {
        int len = s.length();
        int[] count = new int[26];
        int start = 0;
        int maxCount = 0;
        int maxLength = 0;
        for (int end = 0; end < len; end++) {
            maxCount = Math.max(maxCount, ++count[s.charAt(end) - 'A']);
            while (end - start + 1 - maxCount > k) {
                count[s.charAt(start) - 'A']--;
                start++;
            }
            maxLength = Math.max(maxLength, end - start + 1);
        }
        return maxLength;
    }

    static int getMaxSubString(String A, int k) {
        HashMap<Character, Integer> hm = new HashMap<>();
        int left = 0, right = 0, maxSubStringLength = 0;
        int maxCount =  0;
        //while(left < A.length()-maxSubStringLength && right < A.length())
        while(left < A.length()-maxSubStringLength && right < A.length()) {
            char c = A.charAt(right);
            System.out.println("Left: "+left+", right: "+right+", character: "+c);
            if(hm.get(c) == null) {
                hm.put(c, 1);
                System.out.println("New character. Count: "+hm.get(c));
            }
            else {
                //hm.getOrDefault(c, 1)
                hm.put(c, hm.get(c) + 1);
                System.out.println("Existing character. Count: "+hm.get(c));
            }

            // hm.forEach((key, value) -> {
            //     System.out.println("key: "+key+", value: "+value);
            // });

            for(Map.Entry<Character, Integer> mapElement: hm.entrySet()) {
                int value = mapElement.getValue();

                if(value > maxCount)
                    maxCount = Math.max(maxCount, value);
            }

            int value = (right-left)+1 - maxCount;

            if(value <= k) {
                maxSubStringLength = (right-left)+1;
                right++;
            }
            else {
                char a = A.charAt(left);
                hm.put(a, hm.get(a) - 1);
                hm.put(c, hm.get(c) - 1);
                left++;
            }

            System.out.println("maxCount: "+maxCount+", maxSubStringLength: "+maxSubStringLength);
        }   

        return maxSubStringLength;
    }
}