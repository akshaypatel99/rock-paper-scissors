const shapes = ['rock', 'paper', 'scissors'];

export function generateHousePick(){
  return shapes[Math.floor(Math.random()*3)];
}

export function rock(shape: string) {
  switch (shape) {
    case "paper":
      return "You Win";
    case "scissors":
      return "You Lose";
    case "rock":
      return "It's a draw";
    default:
      throw new Error('Invalid result');
  }
}

export function paper(shape: string){
  switch (shape) {
    case "paper":
      return "It's a draw";
    case "scissors":
      return "You Win";
    case "rock":
      return "You Lose";
    default:
      throw new Error('Invalid result');
  }
}

export function scissors(shape: string){
  switch (shape) {
    case "paper":
      return "You Lose";
    case "scissors":
      return "It's a draw";
    case "rock":
      return "You Win";
    default:
      throw new Error('Invalid result');
  }
}

export function generateResult(userPick: string, housePick: string ){
  switch (housePick){
    case "paper":
      return paper(userPick);
    case "scissors":
      return scissors(userPick);
    case "rock":
      return rock(userPick);
    default:
      throw new Error('Invalid result');
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