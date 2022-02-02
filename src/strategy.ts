interface MoveConstructor {
    new (): Move
}

interface Move {
    move(position: [number, number]): void
}

class Hero {
    position: [number, number] = [0, 0]
    move(movementStyle: MoveConstructor) {
        new movementStyle().move(this.position)
    }
}

class Walking implements Move {
    move(position: [number, number]) {
        position[0] += 1
        console.log(`I am Walking. New position = ${position}`)
    }
}

class Sprinting implements Move {
    move(position: [number, number]) {
        position[0] += 2
        console.log(`I am Running. New position = ${position}`)
    }
}

class Crawling implements Move {
    move(position: [number, number]) {
        position[0] += 0.5
        console.log(`I am Crawling. New position = ${position} `)
    }
}

export function Strategy(){
    const Walk_Hero = new Hero()
    .move(Walking)
    const Walk_Hero2= new Hero()
    .move(Sprinting)
    const Walk_Hero3 = new Hero()
    .move(Crawling)
   
}