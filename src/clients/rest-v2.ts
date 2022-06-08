import {
    OpenAPIClientAxios,
    Document as OpenAPI3Document
} from 'openapi-client-axios'
import { Client as ClientRESTV2 } from '../types/client.rest-v2'
import DefinitionRESTV2 from '../openapi/rest-v2.json'

interface ProviderRESTV2Options {
    apiKey?: string
}

class ProviderRESTV2 {
    private api: OpenAPIClientAxios

    constructor (url: string, options?: ProviderRESTV2Options) {
        const { apiKey = null } = options || {}

        this.api = new OpenAPIClientAxios({
            definition: DefinitionRESTV2 as unknown as OpenAPI3Document,
            transformOperationName: oid => oid.split('_').slice(-2, -1)[0],
            axiosConfigDefaults: {
                baseURL: url,
                headers: {
                    'X-API-Key': apiKey
                }
            }
        })
    }

    public async client (): Promise<ClientRESTV2> {
        const client = await this.api.getClient<ClientRESTV2>()

        return client
    }
}

export {
    ProviderRESTV2,
    ClientRESTV2
}
