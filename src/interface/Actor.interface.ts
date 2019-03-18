
export interface Actor {
    //Queue of inbound messages
    mailbox: string[]
    address: ActorAddress
}

export interface ActorProps {
    
}

export interface ActorAddress {
    channel: string,
    topic: string,
    subTopic?: string
}