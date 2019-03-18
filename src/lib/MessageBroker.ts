import Rxmq, { Channel } from 'rxmq';
import { Subscription } from 'rxjs/Subscription';
import { ActorAddress } from '../interface/Actor.interface';



export class MessageBroker {

   private static channels : {[index:string] : Channel<{}>} = {
     api: Rxmq.channel('api'),
     worker: Rxmq.channel('worker')
    };

   private static channelObservers: Subscription[] = []

   init(dev: boolean) {
     if(dev){
       MessageBroker.channelObservers.push(MessageBroker.channels.api.observe('#').subscribe(MessageBroker.print, MessageBroker.printErr))
       MessageBroker.channelObservers.push(MessageBroker.channels.worker.observe('#').subscribe(MessageBroker.print, MessageBroker.printErr))
     }
   }

  sendMessage<T>({channel, topic, subTopic}: ActorAddress, payload: T) {
    Rxmq.channel(channel).subject(topic + subTopic ? `.${subTopic}` : '').next(payload)
  }

  private static print(...args: any) {
    console.log(args)
  }

  private static printErr(...eArgs: any) {
    console.log(eArgs)
  }

  private static topics = {
    app: {
      actionBar: {
        activity: 'actionBar.activity',
        sms: 'actionBar.sms',
        call: 'actionVar.call'
      },
    }
  };

  

  // General Meta Topics
  private static appActionBarActivity = MessageBroker.appChannel.subject(MessageBroker.topics.app.actionBar.activity);
  private static appActionBarSms = MessageBroker.appChannel.subject(MessageBroker.topics.app.actionBar.sms);
  

  static appActionBarActivityListen(fn: (...args: any[]) => void, err: (...args: any[]) => void = () => null): Subscription {
    return this.appChannel.observe(this.topics.app.actionBar.activity).subscribe(fn, err);
  }

  static appActionBarActivitySend(data: any) {
    this.appActionBarActivity.next(data);
  }

  /**
   * UTILS
   */
  static unsubscribe(subscription: any) {
    return _.result(subscription, 'unsubscribe', false);
  }
}
