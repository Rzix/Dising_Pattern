interface AudioDevice{
    creat(): sound;

}
class HeavyVehicle implements AudioDevice{
    creat(): sound {
        return new Speaker();
    }

}

class Vehiclelight implements AudioDevice{
    creat(): sound {
      return new MP4()
    }

}
interface sound{    //ماهیت کلی
    deliver(): void;

}

class MP4 implements sound{ //وسیله
    deliver(): void {
        console.log ('MP4')
    }
     
}
class Speaker implements sound{ //وسیله
  
    deliver(): void {
        console.log('Speaker')
    }
    
}

export function factory(){
    let big=new HeavyVehicle();
    const My_New_Speaker=big.creat()
    My_New_Speaker.deliver()
    
    let small= new Vehiclelight();
    const My_New_MP4=small.creat();
    My_New_MP4.deliver()
}
 