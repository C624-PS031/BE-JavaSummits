import axios from 'axios'
import xmlJs from 'xml-js'
import toUpperFirstLetterWords from '../utils/toUpperFirstLetterWords.js'
import refactJsonWeather from '../utils/refactJsonWeather.js'
import responseCreator from '../utils/responseCreator.js'

const getByProvince = async (req, res) => {
  const { province } = req.params

  try {
    const result = await axios.get(
      `https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-${toUpperFirstLetterWords(
        province,
      )}.xml`,
    )

    const weathers = xmlJs.xml2js(result.data, { compact: true, spaces: 2 })

    const refactoredJsonWeathers = refactJsonWeather(weathers)

    return res
      .status(200)
      .send(responseCreator({ data: refactoredJsonWeathers }))
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).send(responseCreator({ message: 'Not found' }))
    }

    return res
      .status(500)
      .send(responseCreator({ message: 'Something went wrong' }))
  }
}

const getByCity = async (req, res) => {
  const { province, city } = req.params

  try {
    const result = await axios.get(
      `https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-${toUpperFirstLetterWords(
        province,
      )}.xml`,
    )

    const weathers = xmlJs.xml2js(result.data, { compact: true, spaces: 2 })
    const refactoredJsonWeathers = refactJsonWeather(weathers)

    const weatherByCity = refactoredJsonWeathers.areas.find(
      (area) => area.description == toUpperFirstLetterWords(city, '-', ' '),
    )

    if (!weatherByCity) {
      return res.status(404).send(responseCreator({ message: 'Not found' }))
    }

    return res.status(200).send(responseCreator({ data: weatherByCity }))
  } catch (error) {
    return res
      .status(500)
      .send(responseCreator({ data: 'Something went wrong' }))
  }
}

export { getByProvince, getByCity }
