import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] arr=new int[7];
        for(int i=0;i<7;i++){
            arr[i]=i+1;
        }
        
        System.out.println("Array before Shuffling :");
        for(int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println("\n");
        shuffleArray(arr);
        System.out.println("Array after Shuffling :");
        for(int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] arr) {
        int n=arr.length;
        Random random=new Random();
        for (int i=n-1;i>0;i--){
            int j=random.nextInt(i+1);
            int temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}