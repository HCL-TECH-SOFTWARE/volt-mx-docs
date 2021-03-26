import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;


public class FindAndReplace {
	static int modifiedlines = 0;
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the destination path : ");
		File destDir = new File(sc.nextLine());
		storeFilesMeta(destDir.listFiles());
	}

	public static void storeFilesMeta(File[] files) throws IOException {
		for (File file : files) {
			if (file.isDirectory()) {
				storeFilesMeta(file.listFiles()); // Calls same method again.
			} else {
				if (file.getName().endsWith(".md")) {
					modifyFile(file);
				}
			}
		}
	}

	static void modifyFile(File file) {
		File fileToBeModified = new File(file.getAbsoluteFile().toString());
		String oldContent = "";
		BufferedReader reader = null;
		FileWriter writer = null;
		try {
			reader = new BufferedReader(new FileReader(fileToBeModified));
			String line = reader.readLine();
			while (line != null) {
				if(line.lastIndexOf("|") > 0 && (line.contains("<p>") || line.contains("</p>"))) {
					line = line.replaceAll("<p>", "").replaceAll("</p>", "");
					modifiedlines+=1;
				}
				oldContent = oldContent + line + System.lineSeparator();
				line = reader.readLine();
			}
			writer = new FileWriter(fileToBeModified);
			writer.write(oldContent);
			System.out.println("replaced line file --> "+" : "+file.getAbsolutePath()+" : "+file.getName()+" : "+modifiedlines);
			modifiedlines = 0;
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				reader.close();
				writer.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
