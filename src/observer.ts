interface You_Toube{
    subscribe(user:Observer):void;
    unsubscribe(user:Observer):void;
    
    new_video():void
}
class Video implements You_Toube{
    subscribers:Observer[]=[];
    subscribe(user: Observer): void {
       if(this.subscribers.indexOf(user)==-1){
        this.subscribers.push(user)
        console.log('Thank you for subscribe me')
    }else{
        console.log('You are subscribing me....')
    }
}
    unsubscribe(user: Observer): void {
        const index= this.subscribers.indexOf(user)
        if(index>=0)
        this.subscribers.splice(index,1)
        console.log('you are unsubscribing')
    }
    new_video(): void {
        this.subscribers.forEach((x)=>{
            x.notification();
        })

        }
    }
    


interface Observer{
    
    notification():void
}
class User implements Observer{
    notification(): void {
        console.log('New video')
    }
}

export function Observer() {
    let v= new Video();
    let man1= new User();
    let man2=new User();
    v.subscribe(man1)
    v.unsubscribe(man2)
    v.new_video()
}