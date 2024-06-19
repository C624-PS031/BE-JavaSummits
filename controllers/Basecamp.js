import path from 'path'
import Basecamp from '../models/Basecamp.js'
import Gunung from '../models/Gunung.js'

// Get all basecamps
export const getAllBasecamp = async (req, res) => {
  try {
    const basecamps = await Basecamp.findAll()
    res.status(200).json(basecamps)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get basecamp by ID
export const getBasecampById = async (req, res) => {
  try {
    const { id } = req.params
    const basecamp = await Basecamp.findByPk(id, { include: Gunung })
    if (basecamp) {
      res.status(200).json(basecamp)
    } else {
      res.status(404).json({ message: 'Basecamp not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Create a new basecamp
export const createBasecamp = async (req, res) => {
  try {
    const {
      kode_id,
      kode_basecamp,
      nama_basecamp,
      alamat,
      jam_buka,
      jam_tutup,
      provinsi,
      rating,
      gunung_id
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

    const newBasecamp = await Basecamp.create({
      kode_id,
      kode_basecamp,
      nama_basecamp,
      alamat,
      jam_buka,
      jam_tutup,
      provinsi,
      rating,
      image: fileName,
      url: url,
      gunung_id
    })

    res.status(201).json(newBasecamp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update a basecamp
export const updateBasecamp = async (req, res) => {
  try {
    const { id } = req.params
    const {
      kode_id,
      kode_basecamp,
      nama_basecamp,
      alamat,
      jam_buka,
      jam_tutup,
      provinsi,
      rating,
      gunung_id
    } = req.body

    const basecamp = await Basecamp.findByPk(id)
    if (!basecamp) {
      return res.status(404).json({ message: 'Basecamp not found' })
    }

    let fileName = basecamp.image

    // Check if a new file is uploaded
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

    await basecamp.update({
      kode_id,
      kode_basecamp,
      nama_basecamp,
      alamat,
      jam_buka,
      jam_tutup,
      provinsi,
      rating,
      image: fileName,
      url: url,
      gunung_id
    })

    res.status(200).json(basecamp)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete a basecamp
export const deleteBasecamp = async (req, res) => {
  try {
    const { id } = req.params
    const basecamp = await Basecamp.findByPk(id)
    if (!basecamp) {
      return res.status(404).json({ message: 'Basecamp not found' })
    }
    await basecamp.destroy()
    res.status(200).json({ message: 'Basecamp deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
