const MyCrowdsale = artifacts.require('./MyCrowdsale.sol');
const MyToken = artifacts.require('./MyToken.sol');

module.exports = async function (deployer, network, accounts) {
    const latestBlock = await web3.eth.getBlock('latest');
    const openingTime = latestBlock.timestamp + 300;
    const closingTime = openingTime + 86400 * 20;
    const rate = web3.utils.toBN(1000);
    const wallet = accounts[0];
    const tokenInstance = await deployer.deploy(MyToken);

    await deployer.deploy(
        MyCrowdsale,
        openingTime,
        closingTime,
        rate,
        wallet,
        tokenInstance.address
        );
 };