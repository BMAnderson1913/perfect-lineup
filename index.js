function validatePlayerSalary(lineup) {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

function validatePlayerTeam(lineup) {
  return lineup.reduce((teams, player) => {
    teams[player.teamId] = teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1

    return teams
  }, {})
}

function validatePlayerGame(lineup) {
  return lineup.reduce((games, player) => {
    games[player.gameId] = games[player.gameId] === undefined ? 1 : games[player.gameId] + 1

    return games
  }, {})
}

function validatePlayerPosition(lineup) {
  return lineup.reduce((positions, player) => {
    positions[player.position] = positions[player.position] === undefined ? 1 : positions[player.position] + 1

    return positions
  }, {})
}

function exceedsPlayerSalary(lineup) {
  return validatePlayerSalary(lineup) > 45000
}

function exceedsTeamLimit(teams) {
  return Object.values(teams).some((count) => { return count > 2 })
}

function exceedsGameLimit(games) {
  return Object.values(games).some((count) => { return count > 3 })
}
function positionLineup(positions) {
  return (
    positions['P'] !== 1 ||
    positions['C'] !== 1 ||
    positions['1B'] !== 1 ||
    positions['2B'] !== 1 ||
    positions['3B'] !== 1 ||
    positions['SS'] !== 1 ||
    positions['OF'] !== 3
  )
}

function validateLineup(lineup) {
  const playerTeam = validatePlayerTeam(lineup)
  const playerGame = validatePlayerGame(lineup)
  const playerPosition = validatePlayerPosition(lineup)

  return (
    !exceedsPlayerSalary(lineup) &&
    !exceedsTeamLimit(playerTeam) &&
    !exceedsGameLimit(playerGame) &&
    !positionLineup(playerPosition)
  )
}


module.exports = validateLineup

