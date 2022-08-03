const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

export async function CreateDB(
  name: string,
  identity: string
): Promise<string> {
  const ipfsOptions = {
    EXPERIMENTAL: {
      pubsub: true
    }
  }

  // Create IPFS instance with optional config
  const ipfs = await IPFS.create(ipfsOptions)

  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs, { identity: identity })

  //create KV database
  const db = await orbitdb.keyvalue(name)
  const address = db.address.toString()

  return address
}
