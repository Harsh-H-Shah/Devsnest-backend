# APIs
## Types of API
### According to permissions APIs are classified into 3 types:
#### 1) Private APIs - They can only be accessed by selective set of devices.
#### 2) Partner APIs - They can be accessed from anyone inside a particular organisation but no one outside it.
#### 3) Open or Free APIs - They can be accessed by anyone in the world with the commands of the API.
### According to architecture APIs can be classified into 3 types:
#### 1) REST APIs - representational state transfer. The key points of REST APIs are :
#### Client-server architecture: the interface is separated from the backend and data storage. This allows for flexibility, and for different components to evolve independent of each other.
#### Statelessness: no client context is stored on the server between requests.
#### Cacheability: clients can cache responses, so a REST API response must explicitly state whether it can be cached or not.
#### Layered system: the API will work whether it is communicating directly with a server, or through an intermediary such as a load balancer.
#### 2) JSON-RPC and XML-RPC - An RPC is a remote procedural call protocol. XML-RPC uses XML to encode its calls, while JSON-RPC uses JSON for the encoding.
#### They are designed to call methods, whereas REST protocols involve the transfer of documents (resource representations). Or, to put it another way, REST works with resources, whereas RPC is about actions.
#### The URI identifies the server, but contains no information in its parameters, whereas in REST the URI contains details such as query parameters.
#### 3) SOAP - simple object access protocol. It is intended to be extensible, neutral able to operate over a range of communication protocols, including HTTP, SMTP, TCP and more.
#### The processing model: how to process a SOAP message.
#### Extensibility model: SOAP features and modules.
#### Protocol binding rules: how to use SOAP with an underlying protocol, such as HTTP.
#### Message construct: how to structure a SOAP message.