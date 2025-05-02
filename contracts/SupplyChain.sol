// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint id;
        string name;
        string description;
        address currentOwner;
        string status; // Example statuses: "Manufactured", "Shipped", "Delivered"
    }

    mapping(uint => Product) public products;
    uint public productCount;
    event ProductAdded(uint productId, string name, string description);
    event ProductUpdated(uint productId, string status);
// Add a new product
    function addProduct(string memory _name, string memory _description) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _description, msg.sender, "Manufactured");
        emit ProductAdded(productCount, _name, _description);
    }
 // Update the product status (e.g., "Shipped", "Delivered")
    function updateStatus(uint _productId, string memory _status) public {
        require(_productId > 0 && _productId <= productCount, "Product not found");
        Product storage product = products[_productId];
        product.status = _status;
        emit ProductUpdated(_productId, _status);
    }
// Get product details by ID
    function getProduct(uint _productId) public view returns (string memory, string memory, address, string memory) {
        require(_productId > 0 && _productId <= productCount, "Product not found");
        Product memory product = products[_productId];
        return (product.name, product.description, product.currentOwner, product.status);
    }
}
