const shapes = ['rock', 'paper', 'scissors'];

const bonusShapes = ['rock', 'paper', 'scissors', 'lizard', 'spock']

export function generateHousePick(){
  return shapes[Math.floor(Math.random()*3)];
}

export function generateBonusHousePick() {
  return bonusShapes[Math.floor(Math.random()*5)];
}

export function generateResult(userPick: string, housePick: string) {
  switch (userPick + housePick) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      return "You Win";
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      return "You Lose";
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      return "It's a draw";
    default:
      throw new Error('Invalid result')
  }
}

export function saveResult(score: number) {
  return localStorage.setItem("rps_score", JSON.stringify(score));
}

export function fetchResult() {
  const savedScore: string = localStorage.getItem("rps_score") || "0";
  const score: string = JSON.parse(savedScore);
  return score;
}

export function generateBonusResult(userPick: string, housePick: string) {
  switch (userPick + housePick) {
    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "spockrock":
    case "spockscissors":
    case "lizardpaper":
    case "lizardspock":
      return "You Win";
    
    case "rockpaper":
    case "rockspock":
    case "paperscissors":
    case "paperlizard":
    case "scissorsrock":
    case "scissorsspock":
    case "spockpaper":
    case "spocklizard":
    case "lizardrock":
    case "lizardscissors":
      return "You Lose";
    
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "spockspock":
    case "lizardlizard":
      return "It's a draw";
    
    default:
      throw new Error('Invalid result')
  }
}