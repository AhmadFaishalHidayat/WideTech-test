const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()

router.get('/api/product', Controller.getAllProduct)
router.post('/api/order', Controller.createOrder)
router.get('/api/order', Controller.getOrderCartByCustomer)
router.patch('/api/order/:orderId', Controller.updateOrder)
router.delete('/api/order/:orderId', Controller.deleteOrder)

module.exports = router