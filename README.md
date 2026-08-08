# 👣 LittleFeet — Web3 Baby Footwear Store

LittleFeet is a modern and interactive e-commerce website designed for baby footwear and accessories. The project combines a colorful, child-friendly user interface with Ethereum blockchain integration to provide a Web3-based payment experience through MetaMask.

The application is built using React and Vite, with Tailwind CSS used for styling and Ethers.js used to communicate with the Ethereum blockchain.

---

## ✨ Features

### 🛍️ Modern E-Commerce Interface
- Attractive baby-themed UI
- Responsive layout for different screen sizes
- Hero section with animated cloud background
- Category-based product browsing
- Featured products section
- Clean and playful visual design

### 👟 Product Categories
- Baby Boy
- Baby Girl
- Newborn
- Accessories

### 🦊 MetaMask Integration
- MetaMask wallet detection
- Wallet connection request
- Connected wallet address display
- Account-based blockchain interaction

### ⛓️ Ethereum Blockchain Transactions
Users can:
1. Connect their MetaMask wallet.
2. Click **Shop Now**.
3. Confirm the transaction in MetaMask.
4. Submit an Ethereum transaction.
5. View the transaction on a blockchain explorer.

### ☁️ Animated UI
The hero section includes animated fluffy clouds moving across the bottom of the page to create a playful and dynamic experience.

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Tailwind CSS

### Blockchain
- Ethereum
- MetaMask
- Ethers.js
- Sepolia Test Network

### Development Tools
- Visual Studio Code
- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
littlefeet/
│
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── blockchain/
│   │   ├── wallet.js
│   │   └── transaction.js
│   ├── components/
│   │   ├── cards/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/littlefeet.git
```

### 2. Navigate to the Project

```bash
cd littlefeet
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 🦊 MetaMask Setup

To use the blockchain functionality:

1. Install the MetaMask browser extension.
2. Select the **Sepolia Test Network**.
3. Open the application.
4. Click **Wallet**.
5. Approve the wallet connection in MetaMask.
6. Click **Shop Now →** to initiate a test transaction.
7. Confirm the transaction in MetaMask.
8. View the transaction on the Sepolia blockchain explorer.

---

## ⛓️ Blockchain Flow

```text
User
  │
  ▼
LittleFeet Website
  │
  ▼
Click "Wallet"
  │
  ▼
MetaMask Connection
  │
  ▼
Connected Ethereum Wallet
  │
  ▼
Click "Shop Now"
  │
  ▼
MetaMask Transaction Confirmation
  │
  ▼
Ethereum / Sepolia Network
  │
  ▼
Transaction Hash
  │
  ▼
Blockchain Explorer
```

---

## 💳 Payment Testing

This project is intended for blockchain development and testing.

The application uses the Ethereum **Sepolia test network** for testing transactions.

Do not use real funds for testing.

Users should use test ETH obtained through an appropriate Sepolia faucet.

---

## 🔐 Security

This project is intended as a learning and demonstration project.

### Important security practices

- Never upload private keys to GitHub.
- Never upload seed phrases or recovery phrases.
- Never commit `.env` files containing secrets.
- Never expose sensitive wallet credentials.
- Use test networks while developing blockchain functionality.

Example `.gitignore` entries:

```gitignore
node_modules/
dist/
.env
.env.local
.vscode/
.DS_Store
```

---

## 🎨 UI Highlights

The website focuses on a friendly and playful design with:

- Soft pastel colors
- Rounded cards
- Large product visuals
- Animated clouds
- Responsive sections
- Baby-themed styling
- Interactive buttons
- Modern typography

---

## 📱 Responsive Design

The interface is designed to work across:

- 💻 Desktop
- 🖥️ Large screens
- 📱 Mobile devices
- 📟 Tablet devices

Responsive layouts are implemented using Tailwind CSS utility classes.

---

## 🔮 Future Improvements

Possible future enhancements include:

- 🛒 Shopping cart functionality
- 💰 Dynamic product pricing
- ⛓️ Product-specific blockchain payments
- 📦 Blockchain-based order tracking
- 🔐 Wallet-based user authentication
- 🧾 Digital transaction receipts
- 📊 Order history
- 🖼️ NFT-based product certificates
- 🔔 Transaction status notifications
- 🗄️ Backend and database integration
- 🚀 Production deployment
- 💳 Multiple cryptocurrency payment options

---

## 🧪 Development

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## 📜 Available Scripts

| Command | Description |
|--------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 🌐 Blockchain Network

### Development Network

```text
Ethereum Sepolia Testnet
```

### Blockchain Explorer

https://sepolia.etherscan.io

Transaction hashes generated during testing can be searched on the Sepolia explorer.

---

## ⚠️ Disclaimer

This project is created for educational and demonstration purposes.

Blockchain transactions performed during development should use testnet assets only.

This project is not intended to process real-money payments without additional security, backend validation, transaction verification, and production-level infrastructure.

---

## 📄 License

This project is available for educational and demonstration purposes.

You may modify and extend the project according to your requirements.
