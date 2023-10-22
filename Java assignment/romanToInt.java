import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);        
        System.out.print("Enter a roman number: ");
        String romanNum = scanner.nextLine();

        int ans = romanToInt(romanNum);
        System.out.println(romanNum);

        if(ans!=-1){
            System.out.println("value in integer: " + ans);
        }
        else{
            System.out.println("Invalid roman number!");
        }
    }

    public static int romanToInt(String str) {
        int result=0;
        int lastval=0;
        int n=str.length();
        for(int i=n-1;i>=0;i--){
            int currval=help(str.charAt(i));
            if(currval==-1){
                return -1;
            }
            if(currval<lastval) {
                result-=currval;
            }
            else{
                result+=currval;
            }
            lastval=currval;
        }
        return result;
    }

    public static int help(char c) {
        
        if(c=='I' || c=='i'){
            return 1;
        }
        else if(c=='V' || c=='v'){
            return 5;
        }
        else if(c=='X' || c=='x'){
            return 10;
        }
        else if(c=='L' || c=='l'){
            return 50;
        }
        else if(c=='C' || c=='c'){
            return 100;
        }
        else if(c=='D' || c=='d'){
            return 500;
        }
        else if(c=='M' || c=='m'){
            return 1000;
        }
        else return -1;
    }
}