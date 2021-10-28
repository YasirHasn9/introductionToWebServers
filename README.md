# introductionToWebServers

Using `Node` and `Express`

install `node` by running `brew install node`
Fork the repo
run `npm install` to install node_modules

The idea of this project is to build a web servers that deals with json

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

#### How does it work?

A bird eye on how it works
Client (Page of Chrome | Postman) -> server ---> database --> send stuff to ---> sever ---> send to client.

So in this journey, we are going to build an api(server)

## \***\*\*\*\*\***\_\_\***\*\*\*\*\***

Now, we are gonna jump into express. You can think of it as a react for the front end.
Express built on top of Node and provides a lot of easy functionalities.
It is a node module we can install it `npm install express`

#### Why Express

1. Build web applications.
2. Serve Single Page Applications (SPAs).
3. Build RESTful web services that work with JSON.
4. Serve static content, like HTML files, images, audio files, PDFs, and more.
5. Power real-time applications using technologies like Web Sockets or WebRTC.

#### Benefits of Express

1. Simple
2. Unopinionated
3. Extensible
4. Light-weight
5. Compatible with Connect middleware
   This compatibility means we can tap into an extensive collection of modules written for Connect.
6. All packaged into a clean, intuitive, and easy-to-use API.
7. Abstracts away common tasks (writing web applications can be lengthy, hence the need for a library like this).

#### Main features

1. Middleware --> can stop the request or modify it
2. Routing ---> which url request can be executed base on the url
3. Routers for Application Modularity --> we can break up app into routers. For example for frontend and backend
4. Convenience Helpers
5. Views
   Views provide a way to dynamically render HTML on the server and even generate it using other languages.
