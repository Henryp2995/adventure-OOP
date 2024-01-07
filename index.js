

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion: { 
            name: 'Frank',
            type: 'flea',
            inventory: ['hat', 'sunglasses'] 
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}
for (const item of adventurer.inventory) {
    console.log(item);
}
adventurer.roll()   
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];


  class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  class companion {
    constructor(name, type) {
        this.name = name
        this.type = type
        this.inventory = []
    }
    SpecialAction(){console.log(`${this.name} is performing a special action!`)

    }
  }
  const Robin = new Adventurer("Robin", "Warrior")