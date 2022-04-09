import { OpenAPIClientAxios, Document as OpenAPI3Document } from 'openapi-client-axios'
import DefinitionJSONRPCV2 from '../openapi/json-rpc-v2.json'
import { Client as ClientJSONRPCV2 } from '../types/client.json-rpc-v2'

class ProviderJSONRPCV2 {
    private api: OpenAPIClientAxios

    constructor (url: string) {
        this.api = new OpenAPIClientAxios({
            definition: DefinitionJSONRPCV2 as unknown as OpenAPI3Document,
            transformOperationName: oid => oid.split('_').slice(-2, -1)[0],
            axiosConfigDefaults: {
                baseURL: url
            }
        })
    }

    public async client (): Promise<ClientJSONRPCV2> {
        const client = await this.api.getClient<ClientJSONRPCV2>()

        return client
    }
}

export { ProviderJSONRPCV2 }
