// /sys/init.js

// System functions
function importScript(scriptName) {
  console.log("Importing " + scriptName + "...");
  // Function to load scripts
  var script = document.createElement('script'); // Create script
  if (!(scriptName[0] == '/')) { // Check if script direction is NOT absolute
    script.src = "/sys/modules/" + scriptName + ".js"; // Get script direction
  } else {
    script.src = scriptName;
  }
  var scriptNameArray = []; // Initialize scriptName Array
  var scriptId = ''; // Define script id
  for (char of scriptName) { // Convert scriptName to Array
    scriptNameArray.push(char);
  }
  if (scriptNameArray.includes('/')) { // Check if script is nested into other direcrory
    var scriptId = ""; // Define script id to include into html tag
    for (char of scriptName) { // Loop through scriptName
      if (!(char == '/')) { // Check if current character is NOT '/'
        scriptId += char; // Add character to scriptId
      } else { // If character is '/'
        scriptId += '__'; // Add '__' instead of char
      }
    }
    script.id = scriptId; // Set script id
    document.querySelector('head').appendChild(script); // Append script
  } else {
    script.id = scriptName; // Set script id
    document.querySelector('head').appendChild(script); // Append script
  }
  console.log("Loaded " + scriptName);
}

importScript('/sys/sysout.js');