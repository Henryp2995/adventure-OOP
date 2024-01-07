class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  }
  
  class Adventurer extends Character {
    static Roles = ['Fighter', 'Healer', 'Wizard'];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.Roles.includes(role)) {
        throw new Error('Invalid role');
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      const result = Math.floor(Math.random() * 20) + 1;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
    }
  
    duel(opponent) {
      while (this.health > 50 && opponent.health > 50) {
        const thisRoll = this.scout();
        const opponentRoll = opponent.scout();
  
        console.log(`${this.name} rolled a ${thisRoll}, ${opponent.name} rolled a ${opponentRoll}.`);
  
        if (thisRoll > opponentRoll) {
          opponent.health -= 1;
        } else {
          this.health -= 1;
        }
  
        console.log(`Current health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}.`);
      }
  
      if (this.health > 50) {
        console.log(`${this.name} is the winner of the duel!`);
      } else {
        console.log(`${opponent.name} is the winner of the duel!`);
      }
    }
  }
  
  // Example usage
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  const adventurer1 = new Adventurer("Fighter1", "Fighter");
  const adventurer2 = new Adventurer("Healer1", "Healer");
  
  adventurer1.duel(adventurer2);
  