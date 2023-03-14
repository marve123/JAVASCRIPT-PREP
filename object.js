// UNDERSTANDING SETTER AND GETTER METHODS!

let menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial(){
      if(typeof this._meal === 'string' && typeof this._price === 'number'){
        return `Today’s Special is ${this._meal} for $${this._price}!`
      }else{
        return 'Meal or price was not set correctly!'
      }
    }
  }
  menu.meal = 'Rice';
  menu.price = 100;
  
  
  console.log(menu.todaysSpecial);




  
// Team Stats GAME

  const team = {
    _players: [
      mark = {
        firstName: 'mark',
        lastName: 'kent',
        age: 40
      },
      james = {
        firstName: 'james',
        lastName: 'bullshit',
        age: 35
      },
      john = {
        firstName: 'john',
        lastName: 'gordon',
        age: 38
      },
  
    ],
    _games: [
      game1 = {
        opponent: 'chelsea',
        teamPoints: 75,
        opponentPoints: 100
      },
      game2 = {
        opponent: 'man united',
        teamPoints: 95,
        opponentPoints: 80
      },
      game3 = {
        opponent: 'barcelona',
        teamPoints: 80,
        opponentPoints: 85
      }
    ],
    get players(){
      return this._players;
    },
     get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
  player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  }
  this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
  game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  }
  this._games.push(game);
    }
  };
  
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98)
  console.log(team._games);
  console.log(team._players);
  