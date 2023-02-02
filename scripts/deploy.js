const hre = require("hardhat");

async function main() {
	const EmitEvent = await hre.ethers.getContractFactory("EmitEvent"); // Contract name
	const emitEvent = await EmitEvent.deploy(); // Deploy the contract
	// https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#events

	const addressWinnerContract = "0xcf469d3beb3fc24cee979eff83be33ed50988502"; // Winner Contract address
	await emitEvent.deployed(); // Deploy the contract
	// await emitWinner.triggerWinningAttempt(emmitterContractAddress);

	// Call the "attempt" method of Winner Contract through the interface inside our Contract
	await emitEvent.sendAttempt(addressWinnerContract);
	const result = await emitEvent.sendAttempt(addressWinnerContract); // Send the transaction to the network and wait for it to be mined (included in a block)

	console.log("Transaction: ", result);
	console.log(`Contract deployed to ${emitEvent.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
