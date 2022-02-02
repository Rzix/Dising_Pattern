 class HeroBuilder {
    private name: string;
    private health!: number;
    private hungry!: number;
   

    constructor(name: string) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }
    setHealth(value: number): HeroBuilder {
        this.health = value;
        return this;
    }
    get Health() {
        return this.health;
    }
    setHungry(value: number): HeroBuilder {
        this.hungry = value;
        return this;
    }
    get Hungry() {
        return this.hungry;
    }
   

    build(): Hero {
        return new Hero(this);
    }
}

 class Hero {
    private name: string;
    private health!: number;
    private hungry!: number;

    constructor(builder: HeroBuilder) {
        this.name = builder.Name;
        this.health = builder.Health;
        this.hungry = builder.Hungry;
        
    }

    get Name() {
        return this.name;
    }
    get Health() {
        return this.health;
    }
    get Hungry() {
        return this.hungry;
    }
   
}

export function Builder() : void {
    var h: Hero = new HeroBuilder("Hero_1")
       .setHealth(100)
       .setHungry(50)
       .build();
    var h2: Hero= new HeroBuilder("Hero_2")
       .setHealth(57)
       .setHungry(20)
       .build();
    console.log(h.Name + " " + h.Health + " " + h.Hungry );
    console.log(h2.Name+" "+ h2.Health+" "+ h2.Hungry)
   }


