What does your application do when you call multiple services in a single transaction, but some of those transactions fail?
In most cases what you're not doing is reversting any successful transactions before the failed one.
This means your distributed state is no longer consistent. If you live in a microservices world, this can become a real problem.
---
My aim is to provide a generic way to fix this issue in the context of a javascript application.
---
## The plan
* Create some class or factory function that takes in 2 functions: do and undo.
* Create another class or function that consumes an array of the previous, which tracks the success of those things and if some succeed and some fail, reverse the successes before the failure.
* Add some kind of retry mechanism.

### Current thoughs
```
const callSomeServer = new Command({ do, undo, retry = 3 });

const someTransaction = await Saga.execute([ callSomeServer, callAnotherServer, doOneMoreThing ]);
```
