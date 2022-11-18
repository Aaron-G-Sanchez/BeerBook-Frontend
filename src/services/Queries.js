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

export const getNewBeers = async () => {
  try {
    const response = await Client.get('/beer/recent')
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

export const getUser = async (id) => {
  try {
    const response = await Client.get(`/user/${id}/lists`)
    return response
  } catch (error) {
    throw error
  }
}

export const createBeerList = async (data) => {
  try {
    const response = await Client.post('/beerlist', data)
    return response
  } catch (error) {
    throw error
  }
}

export const addBeerToList = async (id, data) => {
  try {
    const response = await Client.put(`/beerlist/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}

export const getBeerListById = async (id) => {
  try {
    const response = await Client.get(`/beerlist/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const destroyList = async (id) => {
  try {
    const response = await Client.delete(`/beerlist/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const removeBeerFromList = async (listId, beerId) => {
  try {
    const response = await Client.delete(`/beerlist/${listId}/${beerId}`)
    return response
  } catch (error) {
    throw error
  }
}

export const newBeer = async (data) => {
  try {
    const res = await Client.post('/beer/new', data)
    return res.data
  } catch (error) {
    throw error
  }
}
