import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);        
        System.out.print("Enter a sentence: ");
        String str = scanner.nextLine();

        boolean isPangram=isPangram(str);
        System.out.println(str);
        if (isPangram) {
            System.out.println("The above sentence is a pangram.");
        } else {
            System.out.println("The above sentence is not a pangram.");
        }
    }


    public static boolean isPangram(String str){
        boolean[] freq = new boolean[26];
        for(char c : str.toCharArray()) {
            if(c>='a' && c<='z'){
                freq[c-'a']=true;
            }
        }
        for(boolean elem : freq) {
            if(!elem) {
                return false;
            }
        }
        return true;
    }
}