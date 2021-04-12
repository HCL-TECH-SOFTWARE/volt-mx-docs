import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Scanner;

public class FrontMatterRefactor {
	static HashMap<String, String> srcFiles = new HashMap<String, String>();
	static HashMap<String, String> destFiles = new HashMap<String, String>();
	static HashMap<String, String> extraFiles = new HashMap<String, String>();
	
	static int copiedCount = 1;
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the source path : ");
		File dir = new File(sc.nextLine());
		System.out.println("Enter the destination path : ");
		File destDir = new File(sc.nextLine());
		System.out.println("Do you want to copy complete one-to-one front matter Y/N");
		String opt = sc.nextLine();
		if (opt.equalsIgnoreCase("Y")) {
			srcFiles = storeFilesMeta(dir.listFiles(), srcFiles);
			destFiles = storeFilesMeta(destDir.listFiles(), destFiles);
			putFrontMatter(srcFiles, destFiles);
			System.out.println("Printing diffrence files ..");
			displayDiff(srcFiles,destFiles);
			System.out.println(destFiles.size());
		} else {
			destFiles = storeFilesMeta(destDir.listFiles(), destFiles);
			oneToManyFrontMatter(dir, destFiles);
		}
	}

	private static void displayDiff(HashMap<String, String> srcFiles2, HashMap<String, String> destFiles2) {
		srcFiles.entrySet().forEach(entry -> {
			String key = entry.getKey();
			if (destFiles.containsKey(key)) {
				destFiles.remove(key);
			}
		});
		destFiles.entrySet().forEach(entry->{
		    System.out.println(entry.getValue());  
		 });
	}

	private static void oneToManyFrontMatter(File dir, HashMap<String, String> destFiles) {
		destFiles.entrySet().forEach(entry -> {
			String key = entry.getKey();
			Path fileName = Path.of(destFiles.get(key));
			String actual;
			try {
				actual = Files.readString(fileName);
				if (actual.indexOf("---") == 0 && actual.indexOf("---", actual.indexOf("---") + 1) > 0)
					actual = actual.replace(actual.substring(actual.indexOf("---"),
							actual.indexOf("---", actual.indexOf("---") + 1) + 3), "");
				Path fileNameSrc = Path.of(dir.getAbsoluteFile().toString());
				String actualSrc = Files.readString(fileNameSrc);
				if (actualSrc.indexOf("---") == 0 && actualSrc.indexOf("---", actualSrc.indexOf("---") + 1) > 0)
					actual = actualSrc
							.substring(actualSrc.indexOf("---"),
									actualSrc.indexOf("---", actualSrc.indexOf("---") + 1) + 3)
							.concat("\n").concat(actual);
				Files.writeString(fileName, actual);
				System.out.println("copied front matter ");
			} catch (IOException e) {
				e.printStackTrace();
			}

		});
	}

	private static void putFrontMatter(HashMap<String, String> srcFiles, HashMap<String, String> destFiles) {
		srcFiles.entrySet().forEach(entry -> {
			String key = entry.getKey();
			if (destFiles.containsKey(key)) {
				Path fileName = Path.of(destFiles.get(key));
				String actual;
				try {
					actual = Files.readString(fileName);
					if (actual.indexOf("---") == 0 && actual.indexOf("---", actual.indexOf("---") + 1) > 0)
						actual = actual.replace(actual.substring(actual.indexOf("---"),
								actual.indexOf("---", actual.indexOf("---") + 1) + 3), "").trim();
					Path fileNameSrc = Path.of(srcFiles.get(key));
					String actualSrc = Files.readString(fileNameSrc);
					if (actualSrc.indexOf("---") == 0 && actualSrc.indexOf("---", actualSrc.indexOf("---") + 1) > 0)
						actual = actualSrc
								.substring(actualSrc.indexOf("---"),
										actualSrc.indexOf("---", actualSrc.indexOf("---") + 1) + 3)
								.concat("\n\n").concat(actual);
					Files.writeString(fileName, actual);
					System.out.println("removed front matter and copied " + copiedCount++);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		});
	}

	public static HashMap<String, String> storeFilesMeta(File[] files, HashMap<String, String> fileMap)
			throws IOException {
		for (File file : files) {
			if (file.isDirectory()) {
				storeFilesMeta(file.listFiles(), fileMap); // Calls same method again.
			} else {
				if (file.getName().endsWith(".md")) {
					String key = !file.getParentFile().getName().equals(null)
							? file.getParentFile().getName().concat(file.getName())
							: file.getName();
					if (fileMap.containsKey(key)) {
						key = !file.getParentFile().getParentFile().getName().equals(null)
								? file.getParentFile().getParentFile().getName().concat(file.getName())
								: file.getName();
								fileMap.put(key, file.getAbsolutePath());
					} else {
						fileMap.put(key, file.getAbsolutePath());
					}
				}
			}
		}
		return fileMap;
	}

}