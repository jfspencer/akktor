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
