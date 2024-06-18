import Artikel from '../models/Artikel.js'
import path from 'path'
import Kategori from '../models/KategoriModel.js'

// Get all articles
export const getAllArtikel = async (req, res) => {
  try {
    const articles = await Artikel.findAll({
      include: [Kategori],
    })
    res.status(200).json(articles)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getArtikelById = async (req, res) => {
  try {
    const { id } = req.params
    const article = await Artikel.findByPk(id, {
      include: [Kategori],
    })
    if (article) {
      res.status(200).json(article)
    } else {
      res.status(404).json({ message: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createArtikel = async (req, res) => {
  try {
    const { id_kategori, judul_artikel, isi_artikel } = req.body

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

    const newArticle = await Artikel.create({
      id_kategori,
      judul_artikel,
      isi_artikel,
      image: fileName,
      url: url,
    })

    res.status(201).json(newArticle)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update an article
export const updateArtikel = async (req, res) => {
  try {
    const { id } = req.params
    const { judul_artikel, isi_artikel } = req.body
    const article = await Artikel.findByPk(id)

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
    if (article) {
      article.judul_artikel = judul_artikel
      article.isi_artikel = isi_artikel
      article.image = fileName
      article.url = url
      await article.save()
      res.status(200).json(article)
    } else {
      res.status(404).json({ message: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete an article
export const deleteArtikel = async (req, res) => {
  try {
    const { id } = req.params
    const article = await Artikel.findByPk(id)
    if (article) {
      await article.destroy()
      res.status(200).json({ message: 'Article deleted successfully' })
    } else {
      res.status(404).json({ message: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
