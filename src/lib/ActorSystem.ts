import { ActorProps } from '../interface/Actor.interface';
import Rxmq, { Channel } from 'rxmq';

export const ActorSystem = (SystemName: string) => {
    const startTime = Math.floor(new Date().getTime() / 1000)
    const rootChannel = Rxmq.channel('root')
    const userChannel = Rxmq.channel('user')
    const systemChannel = Rxmq.channel('system')
    //init the root gardian
    //init the user gardian
    //init the system gardian
    //https://doc.akka.io/api/akka/current/akka/actor/ActorSystem.html
    return {
        actorOf: (props: ActorProps) => null,
        deadLetters:() => null,
        eventStream: () => null,
        getWhenTerminated: () => null,
        log: () => null, //logging into the event stream,
        name: () => null,
        registerOnTermination: () => null,
        scheduler: () => null,
        setting: () => null,
        stop:  () => null,
        terminate:  () => null,
        whenTerminated: () => null,
        uptime: () => Math.floor(new Date().getTime() - startTime)
    }
}