import { ActorProps } from '../interface/Actor.interface';
import Rxmq, { Channel } from 'rxmq';

export const ActorSystem = (SystemName: string) => {
    const name = SystemName
    const startTime = Math.floor(new Date().getTime() / 1000)
    const rootChannel: Channel<{}> = Rxmq.channel('root')
    const userChannel: Channel<{}> = Rxmq.channel('user')
    const systemChannel: Channel<{}> = Rxmq.channel('system')
    //init the root gardian
    //init the user gardian
    //init the system gardian
    //https://doc.akka.io/api/akka/current/akka/actor/ActorSystem.html
    return {
        actorOf: (props: ActorProps, name?: string) => {
            const test = {...props, name};
            test
        },
        deadLetters:() => null,
        eventStream: (fn:()=> void, fnErr: () => void) => {
            rootChannel.observe('#').subscribe(fn, fnErr)
            userChannel.observe('#').subscribe(fn, fnErr)
            systemChannel.observe('#').subscribe(fn, fnErr)
        },
        getWhenTerminated: () => null,
        log: () => null, //logging into the event stream,
        name: () => name,
        registerOnTermination: () => null,
        scheduler: () => null,
        setting: () => null,
        stop:  () => null,
        terminate:  () => null,
        whenTerminated: () => null,
        uptime: () => Math.floor(new Date().getTime() - startTime)
    }
}