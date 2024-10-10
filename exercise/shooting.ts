class Player {
    power: number = 10
    health: number = 100
    name: string

    constructor(name: string) {
        this.name = name
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`)
    }

    damage(power: number) {
        this.health -= power
        console.log(`Player ${this.name} has been damaged by ${power} points`)
        console.log(`Player ${this.name} has ${this.health} remaining health`)
        this.power = 10
    }

    useItem(item: { power: number, health: number }) {
        if (item.power) {
            this.power += item.power
            console.log(`Player ${this.name} receive ${item.power} power points`)
        } else if (item.health) {
            this.health += item.health
            console.log(`Player ${this.name} receive ${item.health} health points`)
        }
    }
}

class ShootingGame {
    player1: Player
    player2: Player
    constructor(player1: Player, player2: Player) {
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() {
        const item: { power: number, health: number } = { power: 0, health: 0 }
        const random = Math.floor(Math.random() * 3)
        if (random == 0) {
            item.power = 10
        } else if (random == 1) {
            item.health = 10
        }

        return item
    }

    start() {
        console.log(`=== START GAME ===`)
        while (this.player1.health > 1 && this.player2.health > 1) {
            console.log(`Player ${this.player1.name} turn`)
            this.player1.useItem(this.getRandomItem())
            this.player1.showStatus()
            this.player2.damage(this.player1.power)
            if (this.player2.health <= 0) break

            console.log(`Player ${this.player2.name} turn`)
            this.player2.useItem(this.getRandomItem())
            this.player2.showStatus()
            this.player1.damage(this.player2.power)
            if (this.player1.health <= 0) break
        }

        if (this.player1.health <= 0) {
            console.log(`The winner is player ${this.player2.name}`)
        } else {
            console.log(`The winner is player ${this.player1.name}`)
        }

        console.log(`=== END GAME ===`)
    }
}

const player1 = new Player("Andi")
const player2 = new Player("Budi")

const game = new ShootingGame(player1, player2)
game.start()