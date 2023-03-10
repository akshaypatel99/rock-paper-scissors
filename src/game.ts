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

export function saveGame(score: number, mode: string) {
  localStorage.setItem(`rps_score_${mode}`, JSON.stringify(score));
  localStorage.setItem("rps_mode", JSON.stringify(mode));
  return;
}

export function fetchGame() {
  const savedMode = localStorage.getItem("rps_mode") || '""';
  const currentMode: string = JSON.parse(savedMode);

  const savedScore = localStorage.getItem(`rps_score_${currentMode}`) || '""';
  const currentScore: string = JSON.parse(savedScore);
  
  return {
    score: currentScore.length !== 0 ? currentScore : "0",
    mode: currentMode.length !== 0 ? currentMode: 'classic'
  }
}

export function switchMode(newMode: string) {
  localStorage.setItem("rps_mode", JSON.stringify(newMode));
  if (!localStorage.getItem(`rps_score_${newMode}`)) {
    localStorage.setItem(`rps_score_${newMode}`, JSON.stringify(0));
  }
  const savedScore = localStorage.getItem(`rps_score_${newMode}`) || '""';
  const currentScore: string = JSON.parse(savedScore);

  return currentScore.length !== 0 ? currentScore : "0";
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