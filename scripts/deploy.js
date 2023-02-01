const hre = require("hardhat");

async function main() {
	const EmitEvent = await hre.ethers.getContractFactory("EmitEvent");
	const emitEvent = await EmitEvent.deploy();

	const addressWinnerContract = "";

	await emitEvent.deployed();

	// Call the "attempt" method of Winner Contract through the interface inside our Contract
	const result = await emitEvent.sendAttempt(addressWinnerContract);
	console.log(result);

	console.log(`Contract deployed to ${emitEvent.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
