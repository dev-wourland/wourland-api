const Identities = require('orbit-db-identity-provider')

export async function createIdentity(): Promise<string> {
    const options = { id: 'local-id' }
    const identity = await Identities.createIdentity(options)
    return identity;
}