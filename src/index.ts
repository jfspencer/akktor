import { ActorSystem } from './lib/ActorSystem';
import { Actor } from './lib/Actor';

declare const window:any;

//init an actor

//mailbox
//mailing address
//mailing address of manager
//async (generators?)
//manager heirarchy for error handlings
const main = () => {
    if(window){
        window['Akktor'] = { ActorSystem, Actor}
    }
}
main()
