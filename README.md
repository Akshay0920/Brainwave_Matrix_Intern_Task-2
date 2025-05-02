
# Supply Chain Tracker - Blockchain-based Product Tracking System

## Overview
Supply Chain Tracker is a decentralized application (DApp) built using blockchain technology to ensure transparency and traceability of products throughout their lifecycle. This project leverages smart contracts on the Ethereum blockchain to record and track product information, ensuring that product data is immutable, transparent, and traceable.

## Features
- **Add Product:** Add new products to the system with details such as name and description.
- **Update Product Status:** Update the status of a product (e.g., "In Transit," "Delivered").
- **Track Product:** Retrieve product information by its unique ID to view its status and details.
- **Transparency and Traceability:** Blockchain ensures that once product data is recorded, it cannot be altered, ensuring full traceability.

## Tech Stack
- **Blockchain:** Ethereum (using Solidity for smart contracts)
- **Frontend:** HTML, CSS (with Tailwind CSS), JavaScript (with Ethers.js for blockchain interaction)
- **Smart Contracts:** Written in Solidity
- **Blockchain Interaction:** Ethers.js library
- **UI Styling:** Tailwind CSS for a responsive and modern design

## Installation

### Prerequisites
1. **Node.js** (version 14.x or higher)
2. **MetaMask** (for interacting with the Ethereum blockchain)
3. **Ethereum Test Network (Rinkeby or similar)** for smart contract deployment

### Steps to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/supply-chain-tracker.git
   cd supply-chain-tracker
   ```

2. **Install dependencies:**
   Make sure to install all required packages:
   ```bash
   npm install
   ```

3. **Deploy the Smart Contract:**
   - Write your smart contract in `contracts/SupplyChain.sol`.
   - Use a tool like **Truffle** or **Hardhat** to compile and deploy the contract to the Ethereum test network (Rinkeby).
   - After deploying, get the contract address and ABI, and configure it in your frontend.

4. **Frontend Configuration:**
   - In `app.js`, update the smart contract's **ABI** and **contract address** to the deployed contract's details.

5. **Run the Project Locally:**
   Once everything is set up, you can open the `index.html` file in your browser. Ensure MetaMask is connected to the appropriate network (e.g., Rinkeby).

6. **Interacting with the DApp:**
   - Open the app in your browser, add products, update their statuses, and track them using their unique product IDs.


## Future Enhancements
- **Security:** Implement role-based access control for updating product status.
- **User Interface:** Improve the frontend with a more polished design and enhanced user experience.
- **Event Logs:** Add blockchain events for transaction tracking (e.g., emit events for product updates).
- **Backend Integration:** Use a backend like Node.js for off-chain data storage and user authentication.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for new features or bug fixes.

1. Fork the repository.
2. Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- **Solidity** for smart contract development.
- **Ethers.js** for interacting with the Ethereum blockchain.
- **Tailwind CSS** for styling the frontend.
- **MetaMask** for providing an Ethereum wallet for testing and interaction.
