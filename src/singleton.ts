class BacteriaService{
    
    name: string;
    static instance: BacteriaService;
    
    insert(){}
    constructor(_name:string){
        this.name= _name;
    }
    log(){
        console.log(`${this.name},BacteriaService...`)
    }
    static getInstance(name: string){
        if (this.instance==null){
            this.instance =new BacteriaService(name)
        }
        return this.instance
    }
    
}

export function singleton(){
    let ts= BacteriaService.getInstance('Bacteria1');
    ts.log()
    let ts2=  BacteriaService.getInstance('Bacteria2')
    ts2.log()
}
