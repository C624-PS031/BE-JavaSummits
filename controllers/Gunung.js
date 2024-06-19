import multer from 'multer'
import Gunung from '../models/Gunung.js'
import path from 'path'
import Basecamp from '../models/Basecamp.js'
// Setup multer for file upload
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Get all mountains
export const getAllGunung = async (req, res) => {
  try {
    const mountains = await Gunung.findAll()
    res.status(200).json(mountains)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get mountain by ID
export const getGunungById = async (req, res) => {
  try {
    const { id } = req.params
    const mountain = await Gunung.findByPk(id)
    if (mountain) {
      res.status(200).json(mountain)
    } else {
      res.status(404).json({ message: 'Mountain not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const createGunung = async (req, res) => {
  try {
    const {
      kode_gunung,
      nama_gunung,
      deskripsi,
      province,
      kota,
      maps
    } = req.body

    let fileName = ''

    // Check if a file is uploaded
    if (req.files && req.files.image) {
      const file = req.files.image
      const fileSize = file.size
      const ext = path.extname(file.name)
      fileName = `${Date.now()}${ext}`

      const allowedTypes = ['.png', '.jpg', '.jpeg']
      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: 'Invalid image type' })
      }
      if (fileSize > 5000000) {
        return res.status(422).json({ msg: 'Max image size is 5MB' })
      }

      await file.mv(`./public/images/${fileName}`)
    }

    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`

    const newArticle = await Gunung.create({
      kode_gunung,
      nama_gunung,
      deskripsi,
      image: fileName,
      url: url,
      province,
      kota,
      maps
    })

    res.status(201).json(newArticle)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update a mountain with images
export const updateGunung = async (req, res) => {
  try {
    const { id } = req.params
    const {
      kode_gunung,
      nama_gunung,
      deskripsi,
      province,
      kota,
      maps
    } = req.body
    const gunung = await Gunung.findByPk(id)

    let fileName = ''

    // Check if a file is uploaded
    if (req.files && req.files.image) {
      const file = req.files.image
      const fileSize = file.size
      const ext = path.extname(file.name)
      fileName = `${Date.now()}${ext}`

      const allowedTypes = ['.png', '.jpg', '.jpeg']
      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: 'Invalid image type' })
      }
      if (fileSize > 5000000) {
        return res.status(422).json({ msg: 'Max image size is 5MB' })
      }

      await file.mv(`./public/images/${fileName}`)
    }

    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`
    if (gunung) {
      gunung.kode_gunung = kode_gunung
      gunung.nama_gunung = nama_gunung
      gunung.deskripsi = deskripsi
      gunung.image = fileName
      gunung.url = url
      gunung.province = province
      gunung.kota = kota
      gunung.maps = maps
      await gunung.save()
      res.status(200).json(gunung)
    } else {
      res.status(404).json({ message: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete a mountain
export const deleteGunung = async (req, res) => {
  try {
    const { id } = req.params
    const mountain = await Gunung.findByPk(id)
    if (mountain) {
      await mountain.destroy()
      res.status(200).json({ message: 'Mountain deleted successfully' })
    } else {
      res.status(404).json({ message: 'Mountain not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
