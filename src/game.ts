const shapes = ['rock', 'paper', 'scissors'];

const enum SHAPE {
  ROCK,
  PAPER,
  SCISSORS
}

type ShapeType = {
  shape: SHAPE
}

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
      throw new Error();
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
      throw new Error();
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
      throw new Error();
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
      throw new Error();
  }
}