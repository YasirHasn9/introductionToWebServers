# introductionToWebServers

## Node

Node is a a runtime environment for js to run on the server.
What is a Runtime?
Machine compiler code -> run the code on the cpu --> the os will load the binary --> os runs in the processing unit ->

component of js runtime

1. js engine --> execute js code
   engine consist of
   a. heap --> an unstructured memory for js object
   b. call back ---> where js code gets executed using execution context

2. web api --> Provide it by browser and provide extra functionalities for js engine which are not of js language itself.
   such as:
   a. dom
   b. timer
   c. fetch
3. callback queue --> data structure that contains all callback function that are ready to be executed.
4. microtask queue --> it works the same as callback queue but store higher priority function

# ---------------------------------

Built on top of Google Chrome V8
Mainly, used for web servers - but not limited to that

### Features

1. fast because of its non-blocking paradigm
2. simple
3. javascript
   Node runs js code which means if you are already a front end engineer, you can easily pick up the node syntax.

\***\* NOTE \*\***
you don't have to wait for the user to update their browser, you can just choose the version
of ECMAScript.

4. V8 which is an open source
5. asynchronous platform --> if you are performing a network request to read json, the execution of that
   code/thread will block until the response is ready

\***\* NOTE \*\***
js allows to create async and non-blocking code by using single thread, callback function and event-driven
programming

Expensive operation occurs --> we use callback ---> continue the process

Onclick is an async function

When Node.js needs to perform an I/O operation, like reading from the network, access a database or the filesystem, instead of blocking the thread Node.js will simply resume the operations when the response comes back, instead of wasting CPU cycles waiting.”

6. huge number of libraries
