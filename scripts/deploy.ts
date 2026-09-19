import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
  const Transaction = await ethers.getContractFactory("Transaction");

  const transaction = await Transaction.deploy();

  await transaction.waitForDeployment();

  const address = await transaction.getAddress();

  console.log("Transaction contract deployed to:");
  console.log(address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});