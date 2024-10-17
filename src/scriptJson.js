let soccerTeams = {
    team1: {
        name: 'Atletico MG',
        mainCompetition: 'Brasileiro',
        location: [
            'Belo Horizonte',
            'Minas Gerais',
            'Brazil'
        ]
    },
    team2: {
        name: 'Palmeiras',
        mainCompetition: 'Brasileiro',
        location: [
            'São Paulo',
            'São Paulo',
            'Brazil'
        ]
    },
    team3: {
        name: 'Real Madrid',
        mainCompetition: 'La Liga',
        location: [
            'Madrid',
            'Madrid',
            'Spain'
        ]
    }

}

let soccerTeamsJson = JSON.stringify(soccerTeams);
console.log(soccerTeamsJson);
  