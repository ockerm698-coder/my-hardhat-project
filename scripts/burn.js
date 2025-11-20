const { ethers } = require("hardhat");

async function main() {
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  
  const signer = (await ethers.getSigners())[0];
  console.log('signer', signer);

  const tx = await signer.sendTransaction({
    to: zeroAddress,
    value: ethers.parseEther("0.000000001")   // 你想烧毁的数量
  });

  console.log("交易已发送，等待确认...");
  await tx.wait();
  console.log("🔥 ETH 已销毁！");
  console.log("交易哈希:", tx.hash);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
