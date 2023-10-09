const Product = require("../models/Products")

module.exports = {
    createProduct: async(req, res) => {
        const newProduct = new Product(req.body);
        try {
            await newProduct.save();
            res.status(200).json("product created succesfully")
        } catch (error) {
            res.status(500).json("failed to create the product")
        }
    },
    getAllProducts: async(req, res) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 })
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json("failed to get the products")
        }
    },
    getProduct: async(req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    searchProduct: async(req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "accessories",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    deleteProduct: async (req, res) => {
        try {
          const deletedProduct = await Product.findByIdAndRemove(req.params.id);
          if (deletedProduct) {
            res.status(200).json("Product deleted successfully");
          } else {
            res.status(404).json("Product not found");
          }
        } catch (error) {
          res.status(500).json("Failed to delete the product");
        }
      },

    //  editProduct: async (req, res) => {
    //     try {
    //         const updatedProduct = await Product.findByIdAndUpdate(
    //             req.params.id,
    //             req.body,
    //             { new: true }
    //         );
    
    //         if (!updatedProduct) {
    //             return res.status(404).json("Product not found");
    //         }
    
    //         res.status(200).json(updatedProduct);
    //     } catch (error) {
    //         res.status(500).json("Failed to edit the product");
    //     }
    // }
    editProduct: async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
    
            if (!updatedProduct) {
                return res.status(404).json({ error: "Product not found" });
            }
    
            return res.status(200).json({ message: "Product edited successfully", data: updatedProduct });
        } catch (error) {
            return res.status(500).json({ error: "Failed to edit the product" });
        }
    }
}