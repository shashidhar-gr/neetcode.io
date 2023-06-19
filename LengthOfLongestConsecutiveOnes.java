public class LengthOfLongestConsecutiveOnes {
    public static void main(String[] args) {
        String A = "01";

        System.out.println(getMax(A));
    }

    static int getMax(String A) {
        int i = 0, j = 0, countZeros = 0, max = 0, countOnes = 0;

        if(A.length() == 0) {
            return 0;
        }

        if(A.length() == 1) {
            return 1;
        }

        while(j < A.length()) {
            if(A.charAt(j) == '0') {
                countZeros++;
            }
            else {
                countOnes++;
            }
            
            max = Math.max(max, countOnes + (countZeros > 0 ? 1: 0));
            
            j++;
        }

        return max;
    }
}
