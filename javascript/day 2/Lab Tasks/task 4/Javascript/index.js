let intervalId;

// Define the function to open the child window
function startFlyingChildWindow() {
  // Open a new window with no content
  let childWindow = window.open("", "flying window", "width=200,height=200");
  childWindow.document.write("<h1>i'm flying</h1>");
  // Set the window position to the top-left corner of the screen
  childWindow.moveTo(0, 0);

  // Set the x and y velocity of the window
  let xVel = 6;
  let yVel = 6;

  // Move the window every 30 milliseconds
  intervalId = setInterval(function () {
    childWindow.focus();
    // Get the current x and y positions of the window
    let x = childWindow.screenX;
    let y = childWindow.screenY;

    // Calculate the new x and y positions based on the velocity
    x += xVel;
    y += yVel;

    // Check if the window has reached the edges of the screen
    if (x + childWindow.outerWidth >= screen.availWidth || x < 0) {
      xVel *= -1;
      console.log(x);
    }
    if (y + childWindow.outerHeight >= screen.availHeight || y < 0) {
      yVel *= -1;
      console.log(y);
    }

    // Move the window to the new position
    childWindow.moveTo(x, y);
  }, 30);
}
function stopFlyingChildWindow() {
  clearInterval(intervalId);
}
