const express = require('express');
const router = express.Router();

// Import your controllers and services
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
// ... (import other controllers)

// Product Routes
router.get('/ProductBrandList', productController.getProductBrandList);
router.get('/ProductCategoryList', productController.getProductCategoryList);
router.get('/ProductSliderList', productController.getProductSliderList);
router.get('/ProductListByBrand/:BrandID', productController.getProductListByBrand);
router.get('/ProductListByCategory/:CategoryID', productController.getProductListByCategory);
router.get('/ProductListBySmilier/:CategoryID', productController.getProductListBySimilar);
router.get('/ProductListByKeyword/:Keyword', productController.getProductListByKeyword);
router.get('/ProductListByRemark/:Remark', productController.getProductListByRemark);
router.get('/ProductDetails/:ProductID', productController.getProductDetails);
router.get('/ProductReviewList/:ProductID', productController.getProductReviewList);

// User Routes
router.get('/UserOTP/:email', userController.getUserOTP);
router.get('/VerifyLogin/:email/:otp', userController.verifyLogin);
router.get('/UserLogout', userController.userLogout);
router.post('/CreateProfile', userController.createProfile);
router.post('/UpdateProfile', userController.updateProfile);
router.get('/ReadProfile', userController.readProfile);

// Wish and Cart Routes
router.post('/SaveWishList', userController.saveWishList);
router.post('/RemoveWishList', userController.removeWishList);
router.get('/WishList', userController.getWishList);
router.post('/SaveCartList', userController.saveCartList);
router.post('/RemoveCartList', userController.removeCartList);
router.get('/CartList', userController.getCartList);

module.exports = router;
