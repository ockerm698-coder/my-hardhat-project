# My Hardhat Project

一个基于 Hardhat 的以太坊智能合约开发项目，包含简单的合约示例和部署脚本。

## 项目简介

本项目是一个基础的 Hardhat 开发环境，用于学习和实践以太坊智能合约开发。项目包含一个简单的 MyContract 合约，可以存储和读取消息字符串。

## 技术栈

- **Hardhat**: 以太坊开发环境
- **Solidity**: ^0.8.20
- **Ethers.js**: 以太坊库
- **Dotenv**: 环境变量管理

## 项目结构

```
my-hardhat-project/
├── contracts/           # 智能合约目录
│   └── myContract.sol  # 主合约文件
├── scripts/            # 部署和交互脚本
│   ├── deploy.js      # 合约部署脚本
│   └── burn.js        # ETH 销毁脚本
├── hardhat.config.js  # Hardhat 配置文件
├── package.json       # 项目依赖
└── .env              # 环境变量（需自行创建）
```

## 智能合约说明

### MyContract.sol

一个简单的智能合约，用于存储和读取消息字符串。

**主要功能：**
- `message`: 公开的字符串变量，可存储任意消息
- `constructor`: 构造函数，在部署时初始化消息

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 环境配置

在项目根目录创建 `.env` 文件，添加以下配置：

```env
SEPOLIA_RPC=你的Sepolia测试网RPC节点URL
PRIVATE_KEY=你的钱包私钥（不要包含0x前缀）
```

> ⚠️ **警告**: 请勿将 `.env` 文件提交到版本控制系统，确保已添加到 `.gitignore`

### 3. 编译合约

```bash
npx hardhat compile
```

### 4. 部署合约

部署到 Sepolia 测试网：

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

部署到本地网络：

```bash
npx hardhat run scripts/deploy.js
```

## 脚本说明

### deploy.js - 合约部署脚本

该脚本会将 MyContract 合约部署到指定网络，并输出合约地址。

**使用方法：**
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### burn.js - ETH 销毁脚本

该脚本会向零地址发送指定数量的 ETH，实现 ETH 销毁。

**使用方法：**
```bash
npx hardhat run scripts/burn.js --network sepolia

```

> ⚠️ **注意**: 销毁的 ETH 将无法恢复，请谨慎操作！请记得修改scripts/burn.js内的销毁数量

## 网络配置

项目已配置 Sepolia 测试网：

- **网络名称**: sepolia
- **RPC URL**: 从环境变量读取
- **账户**: 从环境变量读取私钥

## 已部署合约地址

### Sepolia 测试网

- **myContract**: `0xeEEfD3854A4F7DA7343f8a1Da4A1B24410Cd2c59`

## 常用命令

```bash
# 编译合约
npx hardhat compile


# 启动本地节点
npx hardhat node

# 清理编译文件
npx hardhat clean

# 查看账户列表
npx hardhat accounts

# 在 Sepolia 网络上运行部署脚本部署合约
npx hardhat run scripts/deploy.js --network sepolia
```

## 开发注意事项

1. **私钥安全**: 永远不要将私钥提交到代码仓库
2. **测试网使用**: 建议先在测试网（如 Sepolia）上测试，再部署到主网
3. **Gas 费用**: 部署和交易需要支付 Gas 费用，确保账户有足够的测试币
4. **合约验证**: 建议在 Etherscan 上验证合约源代码，提高透明度

## 获取测试币

可以从以下水龙头获取 Sepolia 测试网的 ETH：

- [Sepolia Faucet](https://sepoliafaucet.com/)
- [Alchemy Sepolia Faucet](https://sepoliafaucet.io/)
- [Infura Sepolia Faucet](https://www.infura.io/faucet/sepolia)

## 参考资源

- [Hardhat 官方文档](https://hardhat.org/docs)
- [Solidity 文档](https://docs.soliditylang.org/)
- [Ethers.js 文档](https://docs.ethers.org/)
- [Sepolia 测试网浏览器](https://sepolia.etherscan.io/)

## 许可证

GPL-3.0-or-later

**项目作者**: acmocker
**创建时间**: 2025
**用途**: 区块链学习与实践