import {db} from '../../database/mysql.js'

export const productsService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM product";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },
      
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM product WHERE id=?";
        const params = [id];
        try {
            const [result] = await db.query(sql, params);
            return result[0];
        } catch (error) {
            console.log("E")
            return null;
        }
    },
      
    createNewProduct : async (product) => {
        const sql = "INSERT INTO product (name, description, price) VALUES (?, ?, ?)";
        const params = [product.name, product.description, product.price];
        try {
            const [result] = await db.query(sql, params);
            return {id: result.insertId, name: product.name, description: product.description, price:product.price}
        } catch (error) {
            return null;
        }
    },
      
    updateOneProduct : () => {
        return;
    },
      
    deleteOneProduct : () => {
        return;
    }
}