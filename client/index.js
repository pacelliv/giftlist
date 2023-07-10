const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const merkleTree = new MerkleTree(niceList); // we create a new instance of `MerkleTree` and pass the list of names
  const name = "Sidney Kertzmann"; // test name
  const index = niceList.findIndex((n) => n === name); // find the index of the leave
  const proof = merkleTree.getProof(index); // generate the proof for that name

  console.log("\n", "\t", `Requesting toy for ${name}.`);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log("\t", gift.message);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    const error = e.toString();
    console.log(error);
    process.exit(1);
  });
