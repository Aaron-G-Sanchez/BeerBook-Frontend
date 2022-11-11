import Client from './api'

export const SignInUser = async () => {
  {
    try {
      const response = await Client.get('/user/id')
      return response
    } catch (error) {
      throw error
    }
  }
}
