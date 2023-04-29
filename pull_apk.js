// This script defines an array of package names and loops through each package name to extract the APK path for each package using ADB. 
// It then creates a directory by the package name and places the pulled APK there. You can run this script on your computer after connecting your Android device via USB cable.



const { execSync } = require("child_process");
const fs = require("fs");

// Define an array of package names
const packageNames = ["com.sec.android.app.shealth"];

// Loop through each package name
for (const packageName of packageNames) {
  // Extract APK path for the package
  const apkPath = execSync(`adb shell pm path ${packageName}`).toString().split("\n")[0].split(":")[1];

  const dirName = packageName;

  // Create a directory by the package name and place the pulled APK there
  fs.mkdirSync(dirName, { recursive: true });
  execSync(`adb pull ${apkPath} ${dirName}`);
}