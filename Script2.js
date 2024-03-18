// Function to update match timer
function updateTimer() {
  // Assuming startTime is the starting time of the match
  var startTime = new Date();
  setInterval(function() {
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    var seconds = Math.floor((elapsedTime / 1000) % 60);
    document.getElementById('matchTimer').innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, 1000);
}

// Function to update scores
function updateScore(team, score) {
  document.getElementById(team).innerText = score;
}

// Function to add activity updates
function addActivityUpdate(activity) {
  var activityList = document.getElementById('matchActivity');
  var listItem = document.createElement('li');
  listItem.innerText = activity;
  activityList.appendChild(listItem);
}

// Example usage
updateTimer();
updateScore('teamAScore', 3);
updateScore('teamBScore', 1);
addActivityUpdate('Goal scored by Team A');
addActivityUpdate('Yellow card for Player X (Team B)');
