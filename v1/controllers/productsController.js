import { productsService } from "../services/productsService.js";

export const productsController = {
    getAllProducts : async (req, res) => {
        const allProducts = await productsService.getAllProducts();
        res.status(200).send({ status: "OK", data: allProducts });
    },
    getOneProduct : async (req, res) => {
        let id = req.params.id;
        const product = await productsService.getOneProduct(id);
        res.status(200).send({ status: "OK", data: product });
    },
    createNewProduct : async (req, res) => {
        const data = req.body;
        const createProduct = await productsService.createNewProduct(data);
        res.status(200).send({ status: "OK", data: createProduct });
    },
    updateOneProduct : (req, res) => {
        const updateProduct = productsService.updateOneProduct();
        res.send("Update an existing workout");
    },
    deleteOneProduct : (req, res) => {
        const deleteProduct = productsService.deleteOneProduct();
        res.send("Delete an existing workout");
    }
}
