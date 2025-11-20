// 主函数：部署智能合约到区块链网络
async function main() {
  // 获取合约工厂（ContractFactory）
  // ethers.getContractFactory 会编译并准备部署 "MyContract" 合约
  const MyContract = await ethers.getContractFactory("MyContract");

  // 部署合约实例
  // deploy() 方法会发送一个交易到区块链，创建合约
  // "Hello Sepolia!" 是传递给合约构造函数的初始化参数
  const contract = await MyContract.deploy("Hello Sepolia!");

  console.log("Deploying...");

  // 等待合约部署完成
  // waitForDeployment() 会等待部署交易被打包确认
  await contract.waitForDeployment();

  // 打印合约部署后的地址
  // getAddress() 返回合约在区块链上的唯一地址
  console.log("Contract deployed to:", await contract.getAddress());
}

// 执行主函数
main()
  // 如果部署成功，退出进程，返回状态码 0（表示成功）
  .then(() => process.exit(0))
  // 如果部署过程中发生错误，捕获错误并打印
  .catch((error) => {
    console.error(error);
    // 退出进程，返回状态码 1（表示失败）
    process.exit(1);
  });
