

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
    for (const [key, value] of Object.entries(adventurer)) {
        console.log(`${key}: ${value}`);
      } 
adventurer.roll()   