function shuffle(array: number[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function top2(array: number[]): [number, number] {
  const max = array.reduce((a, b) => Math.max(a, b), 0);
  const snd = array.filter((a) => a < max).reduce((a, b) => Math.max(a, b), 0);
  return [max, snd];
}

function generateGame(n: number): [number[], number, number, number] {
  const blocks = [1, 2, 1];
  while (blocks.length < n) {
    const [max, snd] = top2(blocks);
    blocks.push(max + snd);
    shuffle(blocks);
  }

  const [max, snd] = top2(blocks);
  const unit = Math.floor(800 / (max + snd));
  const width = unit * (max + snd);
  const height = unit * max;
  return [blocks, width, height, unit];
}

export default generateGame;