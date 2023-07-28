const express=require('express')
const walletcontrollers=require('../controllers/e_wallets.controllers')
const walletmiddleware=require('../middlewares/e_wallet.middlewares')


const routerA=express.Router()
routerA
.route('/')
.get(walletcontrollers.findAllWallet)
.post(walletcontrollers.createWallet)
routerA.use(walletmiddleware.validWallet)
routerA
  .route('/:id')
  .get(walletmiddleware.validWallet,walletcontrollers.findOneWallet)
  .patch(walletcontrollers.updateWallet)
  .delete(walletcontrollers.deleteWallet)


module.exports=routerA