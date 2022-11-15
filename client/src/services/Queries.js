import Client from './api'

// Gets the list of recently made lists
export const getFeed = async () => {
  try {
    const response = await Client.get('/beerlist/recents')
    return response
  } catch (error) {}
}

export const getUser = async (id) => {
  try {
    const response = await Client.get(`/user/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
