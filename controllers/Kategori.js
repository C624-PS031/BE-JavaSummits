import Kategori from '../models/KategoriModel.js'

// Get all categories
export const getAllKategori = async (req, res) => {
  try {
    const categories = await Kategori.findAll()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get category by ID
export const getKategoriById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Kategori.findByPk(id)
    if (category) {
      res.status(200).json(category)
    } else {
      res.status(404).json({ message: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Create a new category
export const createKategori = async (req, res) => {
  try {
    const { nama_kategori } = req.body
    const newCategory = await Kategori.create({ nama_kategori })
    res.status(201).json(newCategory)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update a category
export const updateKategori = async (req, res) => {
  try {
    const { id } = req.params
    const { nama_kategori } = req.body
    const category = await Kategori.findByPk(id)
    if (category) {
      category.nama_kategori = nama_kategori
      await category.save()
      res.status(200).json(category)
    } else {
      res.status(404).json({ message: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete a category
export const deleteKategori = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Kategori.findByPk(id)
    if (category) {
      await category.destroy()
      res.status(200).json({ message: 'Category deleted successfully' })
    } else {
      res.status(404).json({ message: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
