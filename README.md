## Week 2 project - GiftList 🎁

### Introduction

Merkle Trees are data structures used to efficiently stored and proof that a piece of data is part of a larger set of data without the need of knowing all the pieces of data.

```
      ABCDEFGH <-- Merkle Root
       /    \
    ABCD     EFGH
    / \      / \
   AB  CD   EF  GH
  / \  / \  / \ / \
  A B  C D  E F G H
```

The bottom layer contains all the data in the tree, and they're hashed in pairs to produce a single hash known as the root that represents all the data.

If we wanted to proof that `C` is part of the tree, we would only need to know `D`, `AB` and `EFGH` to produce `CD`, `ABCD` and `ABCDEFGH` then we compare our result with the expected root.

```
      ABCDEFGH <-- Merkle Root
       /    \
    ABCD     EFGH
    / \      / \
   AB   CD    -   -
  / \  / \  / \ / \
  - -  C D  - - - -
```

In this project we need to build an application that gives out gifts, but only to the names that are in the list.

The client has the responsibility to create a proof using the name, and make a request to the server for a gift. The server will take the proof to verify if the name is on the list, if it is the server will reply with the gift.

### Quick Start 🏃‍♀️🏃

```bash
git clone https://github.com/pacelliv/giftlist.git
cd giftlist
```

To install the dependencies, split your terminal and then run the following commands:

```bash
npm install
```

### Using the application 👩‍💻👨‍💻

Start the server with:

```bash
npm start
```

In `client/index.js` set a name to verify if is on `niceList.json` and run `node client/index.js`, in the console you will see the result of your query.

Try a name that is not on the list to see what you get.

### Conclusion 👀

Blockchains have a storage problem, they need to store large volumes on data and efficiently find any piece of data. Without data structures like Merkle Trees the process of finding data would be computational expensive and slow because we would have to loop through every single piece of data in order to find the one we're looking for.

### Acknowledgements 🎉🎉

Thanks to the [Alchemy University](https://www.alchemy.com/dapps/alchemy-university) team for making the Ethereum Bootcamp accessible to anyone who want to become a web3 engineer.
