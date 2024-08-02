const { Router } = require("express")
const { getHome, getLogin } = require("../controllers/homeController")
const { getAdminPage } = require("../controllers/adminController")
const { login } = require("../controllers/loginController")
const verifyToken = require("../middlewares/verifyToken")
const { createBook } = require("../controllers/bookController")
const { getOrderPage, createOrder } = require("../controllers/orderController")

const router = Router()


router.get("/", getHome)
router.get("/login", getLogin)
router.get("/admin", verifyToken, getAdminPage)
router.get("/orders/:id", getOrderPage)
router.post("/login", login)
router.post("/books/create", createBook)
router.post("/orders/create", createOrder)

module.exports = router