import Gunung from '../models/Gunung.js'

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

// Create a new mountain
export const createGunung = async (req, res) => {
  try {
    const newMountain = await Gunung.create(req.body)
    res.status(201).json(newMountain)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update a mountain
export const updateGunung = async (req, res) => {
  try {
    const { id } = req.params
    const mountain = await Gunung.findByPk(id)
    if (mountain) {
      await mountain.update(req.body)
      res.status(200).json(mountain)
    } else {
      res.status(404).json({ message: 'Mountain not found' })
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
