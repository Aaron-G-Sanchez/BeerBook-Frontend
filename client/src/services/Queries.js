import Client from './api'

// Gets the list of recently made lists
export const getFeed = async () => {
  try {
    const response = await Client.get('/beerlist/recents')
    return response
  } catch (error) {
    throw error
  }
}

// Gets all the beers in the database
export const getAllBeers = async () => {
  try {
    const response = await Client.get('/beer')
    return response
  } catch (error) {
    throw error
  }
}
