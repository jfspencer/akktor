
// https://doc.akka.io/api/akka/current/akka/actor/AbstractActor.html
export interface AbstractActor {
    //Queue of inbound messages
    //mailbox: string[]
    //address: ActorAddress
    sender:()=>null
    preRestart:()=>null
    postRestart:()=>null
    postStop:()=>null
    supervisorStrategy:()=>null
    unhandled:()=>null
}

export interface ActorProps {

}

// https://doc.akka.io/api/akka/current/akka/actor/ActorContext.html
export interface Context {

}

// https://doc.akka.io/api/akka/current/akka/actor/ActorRef.html
export interface ActorRef {

}

export interface ActorAddress {
    channel: string,
    topic: string,
    subTopic?: string
}