import Client from './api'

export const SignInUser = async () => {
  {
    try {
      const response = await Client.get('/user/1')
      return response
    } catch (error) {
      throw error
    }
  }
}
