const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "ProductAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "ProductUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getProduct",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "productCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "currentOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_status",
          "type": "string"
        }
      ],
      "name": "updateStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

let contract;

async function init() {
  const signer = provider.getSigner(0);
  contract = new ethers.Contract(contractAddress, abi, signer);
  console.log("Contract initialized");
}

init();

// Add Product
document.getElementById('addProductForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;

    const tx = await contract.addProduct(name, description);
    console.log("Transaction sent:", tx.hash);
    await tx.wait();
    console.log("Transaction confirmed");

    const productCount = await contract.productCount();
    alert(`Product added! Product ID: ${productCount.toString()}`);
  } catch (error) {
    console.error("Add product error:", error);
    alert("Error adding product: " + error.message);
  }
});

// Update Product
document.getElementById('updateStatusForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const id = document.getElementById('productId').value;
    const status = document.getElementById('productStatus').value;

    const tx = await contract.updateStatus(id, status);
    await tx.wait();

    alert("Product status updated!");
  } catch (error) {
    console.error("Update error:", error);
    alert("Error updating status: " + error.message);
  }
});

// Get Product Info
document.getElementById('getProductForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const id = document.getElementById('getProductId').value;

    const product = await contract.getProduct(id);

    document.getElementById('productInfo').innerHTML = `
      <h3>Product ID: ${id}</h3>
      <p><strong>Name:</strong> ${product[0]}</p>
      <p><strong>Description:</strong> ${product[1]}</p>
      <p><strong>Owner:</strong> ${product[2]}</p>
      <p><strong>Status:</strong> ${product[3]}</p>
    `;
  } catch (error) {
    console.error("Get product error:", error);
    alert("Error retrieving product: " + error.message);
  }
});
