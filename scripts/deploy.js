const hre = require("hardhat");

async function main() {
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChain.deploy();

  await supplyChain.waitForDeployment(); // This replaces deployed()

  console.log(`SupplyChain deployed to: ${supplyChain.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
