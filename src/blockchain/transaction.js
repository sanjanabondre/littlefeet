import { ethers } from "ethers";

export async function createTransaction() {
  try {
    if (!window.ethereum) {
      return {
        success: false,
        message: "Please install MetaMask.",
      };
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const network = await provider.getNetwork();

    const tx = await signer.sendTransaction({
      to: "0x410C1747c40aB26A4B54a89FD4214C160404Eb7A",
      value: ethers.parseEther("0.001"),
    });

    let explorer = "";

    switch (Number(network.chainId)) {
      case 11155111:
        explorer = `https://sepolia.etherscan.io/tx/${tx.hash}`;
        break;

      case 1:
        explorer = `https://etherscan.io/tx/${tx.hash}`;
        break;

      default:
        explorer = "";
    }

    return {
      success: true,
      hash: tx.hash,
      explorer,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}