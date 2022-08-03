import { CreateDB } from './databases'
import { createIdentity } from './identities'

interface Response {
  publicKey: string
  userAddress: string
}

export async function register(): Promise<Response> {
  const identity = await createIdentity()
  const address = await CreateDB('user', identity)
  return {
    publicKey: identity,
    userAddress: address
  }
}
