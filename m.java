import java.util.Arrays;

public class HelloWorld {
  public static void main(String[] args) {

    int[] array = new int[3];

    try {

	    for (int i=0; i < 4; i++) {

	    	array[i] = i;
	    }
    } catch (ArrayIndexOutOfBoundsException e) {
    	System.out.println("Out of bounds");
    } catch (Exception e) {
    	System.out.println(e);
    }

    System.out.println(Arrays.toString(array));

  }
}
