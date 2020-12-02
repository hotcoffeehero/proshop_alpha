import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"

// @desc    Create New Orders
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No Order Items")
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

// @desc Get orders by id
// @route GET /api/order/:id
// @ access Private
const getOrderById = asyncHandler(async (req, res) => {
  //fetch the order from db
  //.populate puts the user's info into the order
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )
  //check for the order
  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Order Not Found")
  }
})

export { 
  addOrderItems,
  getOrderById
 }
