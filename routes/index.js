import express from 'express'
// import {
//   getUsers,
//   Login,
//   Logout,
//   Me,
//   nePassword,
//   Register,
//   resetPassword,
//   updateUsers,
//   deleteUser,
// } from '../controllers/Users.js'
import {
  getAllKategori,
  getKategoriById,
  createKategori,
  updateKategori,
  deleteKategori,
} from '../controllers/Kategori.js'
import * as controller from '../controllers/weather.js'
import {
  getAllArtikel,
  getArtikelById,
  createArtikel,
  updateArtikel,
  deleteArtikel,
} from '../controllers/Artikel.js'

import {
  getAllGunung,
  getGunungById,
  createGunung,
  updateGunung,
  deleteGunung,
} from '../controllers/Gunung.js'
import {
  getAllBasecamp,
  getBasecampById,
  createBasecamp,
  updateBasecamp,
  deleteBasecamp,
} from '../controllers/Basecamp.js'
const router = express.Router()

// // users
// router.get('/users', getUsers) // done
// router.get('/me', verifyToken, Me) // done
// router.post('/users', Register) // done
// router.post('/login', Login) // done
// router.post('/logout', verifyToken, Logout) // done
// router.put('/update/:id', verifyToken, updateUsers) // done
// router.delete('/delete', verifyToken, deleteUser)

router.get('/kategori/', getAllKategori)
router.get('/kategori/:id', getKategoriById)
router.post('/kategori/', createKategori)
router.put('/kategori/:id', updateKategori)
router.delete('/kategori/:id', deleteKategori)

router.get('/artikel', getAllArtikel)
router.get('/artikel/:id', getArtikelById)
router.post('/artikel', createArtikel)
router.put('/artikel/:id', updateArtikel)
router.delete('/artikel/:id', deleteArtikel)

router.get('/gunung', getAllGunung)
router.get('/gunung/:id', getGunungById)
router.post('/gunung', createGunung)
router.put('/gunung/:id', updateGunung)
router.delete('/gunung/:id', deleteGunung)

router.get('/basecamp', getAllBasecamp)
router.get('/basecamp/:id', getBasecampById)
router.post('/basecamp', createBasecamp)
router.put('/basecamp/:id', updateBasecamp)
router.delete('/basecamp/:id', deleteBasecamp)

router.get('/:province', controller.getByProvince)
router.get('/:province/:city', controller.getByCity)

export default router
