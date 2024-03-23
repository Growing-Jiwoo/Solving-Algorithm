function solution(players, callings) {
  const idx = {};

  for (let i = 0; i < players.length; i++) {
    idx[players[i]] = i;
  }

  callings.forEach((player) => {
    const currentIdx = idx[player];

    const nextplayer = players[currentIdx - 1];

    players[currentIdx - 1] = player;
    players[currentIdx] = nextplayer;

    idx[player]--;
    idx[players[currentIdx]]++;
  });

  return players;
}
