# Recycling Vending Machine (REVCOIN)
![](https://github.com/usc-walkin/operator/blob/master/docs/vid1.gif?raw=true)

The project `recycling-vending-machine` envisions a platform where people return the recyclables to get the `token` as compensation. 

## How it works
Users visit vending machines with recyclables to return. Vending machines scans SKUs (within barcode for example) and send it to the **operator** which then validates it and issues tokens. Token is not transferred directly to the person so that she does not have to provide her identity while returning the recyclables. She instead receives hash value which she can later use to actually get the token.

## Decentralized Application
REVCOIN employs [IOTA](https://www.iota.org/) as a core distributed ledger technology. All the information generated throughout the transactions, from returning the recyclables to transferring tokens, do not reside in proprietary entity.

## Architecture
The implementation represents the conceptual relation between the entities.

### Operator
Operator acts as a *control tower* to handle requests from multiple vending machine. Operator communicates with IOTA, the distributed network, to process transactions.

### Recycling Vending Machine
Scans the SKUs of recyclables and interacts with Operator.

### Recycling Vending Machine Web
Simulator of a person returning the recyclables. There could be a client-side application, at any rate.
