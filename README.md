# akktor
Akka inspired JS Actor System

Reasons for Akktor
- real time logging of system messages. think redux logger for domain logic
  - break point based observation in async systems causes fundamental chsnges to the system under observstion. some things are not observable via break point debugging
- actors provide intrinic async behavior between actors, while allowing the actor internals to be synchronous
- Natural decoupling between actors and outside the system. Preventing domain logic contamination with exterior concern 
- Actor abstractions over multi threading tools, (web workers, and RN web view script execution)


- Allow exterior messages can be injected into the actor system
- Actor systems are intrinsically self healing 

Types of actors
- EffectActor: boundary interface actor
- ThreadActor: executes it’s code in a separate thread
- ManagerActor: root actor and intermediate error control handler
Higher order executor will handle error propagation back up the actor chain

implementation ref
https://en.m.wikipedia.org/wiki/Actor_model

interesting read on the why of the actor system





notes on actor behavior from akka docs
In summary, this is what happens when an actor receives a message:

The actor adds the message to the end of a queue.
If the actor was not scheduled for execution, it is marked as ready to execute.
A (hidden) scheduler entity takes the actor and starts executing it.
Actor picks the message from the front of the queue.
Actor modifies internal state, sends messages to other actors.
The actor is unscheduled.
To accomplish this behavior, actors have:

A mailbox (the queue where messages end up).
A behavior (the state of the actor, internal variables etc.).
Messages (pieces of data representing a signal, similar to method calls and their parameters).
An execution environment (the machinery that takes actors that have messages to react to and invokes their message handling code).
An address (more on this later).
Messages go into actor mailboxes. The behavior of the actor describes how the actor responds to messages (like sending more messages and/or changing state). An execution environment orchestrates a pool of threads to drive all these actions completely transparently.

This is a very simple model and it solves the issues enumerated previously:
