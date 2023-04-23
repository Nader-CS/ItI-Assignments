let regexPatterns = [
  /^[a-z A-Z ]{3,30}$/,
  /^\d{8}$/g,
  /^01(0|1|2)[0-9]{8}$/g,
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
];
let info = ["Name", "Phone Number", "Mobile Number", "Email"];
let result = [];
let favColor = null;
let msg = [
  "Welcome dear guest : ",
  "Your Telephone number is : ",
  "Your mobile number is : ",
  "Your email address is : ",
];
for (let i = 0; i < info.length; i++) {
  let input, test;
  do {
    input = prompt(`Enter your ${info[i]}`);
    test = regexPatterns[i].test(input);
  } while (!test);
  result[i] = input;
}
do {
  favColor = parseInt(
    prompt("Enter your fav color (1=>red , 2=>green , 3=>blue)")
  );
} while (favColor != 1 && favColor != 2 && favColor != 3);
favColor = favColor == 1 ? "red" : favColor == 2 ? "green" : "blue";

for (let i = 0; i < info.length; i++) {
  document.write(
    msg[i].fontcolor(favColor).fontsize(16),
    result[i].fontsize(16),
    "<br />"
  );
}
