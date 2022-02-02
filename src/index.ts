

import { Builder } from "./Builder";
import { factory } from "./factory.Audio.device";
import { Observer } from "./observer";
import { proxy } from "./proxy";
import { singleton } from "./singleton";
import { Strategy } from "./strategy";
console.log("my_singleton");
singleton();
console.log('♣♣♣--------------------------♣♣♣')
console.log("♪ my_factory ♫")
factory();
console.log('☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼')
console.log('my_Observer')
Observer();
console.log('♠♠♠♠♠-------------------♠♠♠♠♠')
console.log('my_proxy')
proxy();
console.log('►►►►►►►►BUILDER◄◄◄◄◄◄◄')
console.log('my_bilder')
Builder()
console.log('→→→→→→→→→STRATEGY←←←←←←←←')
console.log('my_strategy')
Strategy()