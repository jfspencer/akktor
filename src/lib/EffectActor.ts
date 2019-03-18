import Rxmq from 'rxmq';
/**
 * This actor insulates a group of code from explicit dependency
 */

export class EffectActor{
    //must guarantee unique topic ids.....
    constructor(err: (...args: any) => any, listener: (...args: any) => any, topic: string, subTopic: string) {
        Rxmq.channel('api').observe(topic + subTopic ? `.${subTopic}` : '')
            .subscribe(listener, err)
    }
}