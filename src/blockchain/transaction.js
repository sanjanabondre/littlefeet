import { ethers } from "ethers";

// Your locally deployed Transaction.sol contract
const CONTRACT_ADDRESS =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// ABI of Transaction.sol
const CONTRACT_ABI = [
  "function sendPayment(address payable receiver) external payable",
  "function getBalance() external view returns (uint256)",
  "event PaymentSent(address indexed sender, address indexed receiver, uint256 amount)"
];

export async function createTransaction() {
  try {
    // Check MetaMask
    if (!window.ethereum) {
      return {
        success: false,
        message: "Please install MetaMask."
      };
    }

    // Connect to MetaMask
    const provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    // Connect to your deployed Solidity contract
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    // Receiver address
    const receiver =
      "0x410C1747c40aB26A4B54a89FD4214C160404Eb7A";

    // Send 0.001 ETH through the smart contract
    const tx = await contract.sendPayment(
      receiver,
      {
        value: ethers.parseEther("0.001")
      }
    );

    console.log("Transaction submitted:", tx.hash);

    // Wait for blockchain confirmation
    await tx.wait();

    return {
      success: true,
      hash: tx.hash,
      explorer: ""
    };

  } catch (error) {
    console.error("Transaction failed:", error);

    return {
      success: false,
      message: error.message || "Transaction failed."
    };
  }
}