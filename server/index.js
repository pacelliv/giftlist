const express = require("express");
const verifyProof = require("../utils/verifyProof");

const port = 1225;

const app = express();
app.use(express.json());

// Hardcoded merkle root here representing the whole nice list
const MERKLE_ROOT =
  "ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa";

app.post("/gift", (req, res) => {
  const { name, proof } = req.body;

  let isInTheList = false;

  if (proof) {
    isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  }

  if (isInTheList) {
    res.json({
      success: true,
      message: "We verified you're on the list, you got a toy robot!",
    });
  } else {
    res.json({
      success: false,
      message: "Sorry but we verified you are not on the list",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
