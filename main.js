let scoreA = 0;
let scoreB = 0;
let teamA = document.getElementById("scoreA");
let teamB=document.getElementById("scoreB")
function increaseTeamA() {
  scoreA += 1;
  teamA.innerHTML = scoreA
}
function decreaseTeamA() {
    scoreA -= 1;
    teamA.innerHTML = scoreA
  }
  
  function increaseTeamB() {
    scoreB += 1;
    teamB.innerHTML = scoreB
  }
  function decreaseTeamB() {
      scoreB -= 1;
      teamB.innerHTML = scoreB
    }
function reset(){
    scoreA=scoreB=0
    teamA.innerHTML=teamB.innerHTML=0
}