package com.hcl.sw.hclswdemo;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Scanner;

public class FrontMatterAppending {

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
					Path fileName = Path.of(file.getAbsolutePath());
					String actual;
					try {
						actual = Files.readString(fileName);
						String actualToReplace = null;
						if (actual.indexOf("---") == 0 && actual.indexOf("---", actual.indexOf("---") + 1) > 0) {
							actualToReplace = actual.substring(actual.indexOf("---"),actual.indexOf("---", actual.indexOf("---") + 1));
							String actualRelacedBy = actual.substring(actual.indexOf("---"),actual.indexOf("---", actual.indexOf("---") + 1)).concat("category: ").concat("\n");
							actual = actual.replace(actualToReplace, actualRelacedBy);
						Files.writeString(fileName, actual);
						System.out.println("appended front matter ");
					}
					}catch (IOException e) {
						e.printStackTrace();
					}
				
				}
			}
		}
	}
}
