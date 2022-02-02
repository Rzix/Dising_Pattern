class Requester{
    role!:string;
    request(){
        console.log('new request')
    }
}

class ProxyRequest{
    realClass!:Requester ;
    constructor(_realclass:Requester){
        this.realClass= _realclass
    }
    proxyRequest(){
        if(this.realClass.role=='manager'){
            this.realClass.request();
        }else{
            console.log('you cant do this')
        }
    }
}

export function proxy(){
    let c = new Requester();
    c.role='user'
    let c2 = new Requester();
    c.role='manager'
    let b = new ProxyRequest(c);
    let b2 = new ProxyRequest(c2);
    b.proxyRequest()
    b2.proxyRequest()
}