const { OrderCart, ProductList } = require('../models');

class Controller {
    static async getAllProduct(req, res) {
        try {
            const product = await ProductList.findAll();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }


    static async getOrderCartByCustomer(req, res) {
        try {
            const orderCart = await OrderCart.findAll();
            console.log(orderCart);
            res.status(200).json(orderCart);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async createOrder(req, res) {
        try {
            const { customer, address, ProductListId, quantity } = req.body;
            console.log(req.body, "BODYYYYYYYYYYYYYYY");
            console.log(product, "PRODUCTttttttttttttttt");
            let product = await ProductList.findOne({ where: { id: ProductListId } });
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
            }

            const order = await OrderCart.create({
                customer, address, ProductListId, quantity,
                total: product.price * quantity
            });


            res.status(201).json({
                customer: order.customer,
                address: order.address,
                name: product.name,
                type: product.type,
                price: product.price,
                quantity: order.quantity,
                total: order.total
            });
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    }

    static async updateOrder(req, res) {
        try {
            const { orderId } = req.params;
            const { customer, address, ProductListId, quantity } = req.body;
            let product = await ProductList.findByPk(ProductListId);
            let orderOld = await OrderCart.findByPk(orderId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
            }
            if (!orderOld) {
                res.status(404).json({ message: 'Order not found' });
            }

            const order = await OrderCart.update({
                customer, address, ProductListId,
                quantity: orderOld.quantity + quantity,
                total: product.price * quantity
            }, {
                where: { id: orderId }
            });
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deleteOrder(req, res) {
        try {
            const { orderId } = req.params;
            const order = await OrderCart.destroy({
                where: { id: orderId }
            });
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }

}

module.exports = Controller;