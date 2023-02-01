const hre = require("hardhat");

async function main() {
	const EmitEvent = await hre.ethers.getContractFactory("EmitEvent");
	const emitEvent = await EmitEvent.deploy();
	const addressWinnerContract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

	await emitEvent.deployed();

	// Call the "attempt" method of Winner Contract through the interface inside our Contract
	const result = await emitEvent.sendAttempt(addressWinnerContract);

	console.log(`Contract deployed to ${emitEvent.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
