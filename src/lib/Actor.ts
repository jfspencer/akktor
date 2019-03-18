import { Context, AbstractActor } from "../interface/Actor.interface";

// https://doc.akka.io/api/akka/current/akka/actor/Actor.html
export class Actor implements AbstractActor {

    // https://doc.akka.io/api/akka/current/akka/actor/ActorContext.html
    context:Context
    self:any;

    constructor(){
        this.context = {
            actorOf: () => null
        }
        this.self = {

        }
    }
    
    sender() {
        return null
    }

    preRestart() {
        return null
    }

    postRestart() {
        return null
    }

    postStop() {
        return null
    }

    supervisorStrategy() {
        return null
    }

    unhandled() {
        return null
    }
}