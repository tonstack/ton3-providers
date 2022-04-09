import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        /**
         * Body_estimate_fee_estimateFee_post
         */
        export interface BodyEstimateFeeEstimateFeePost {
            /**
             * Address
             * Address in any format
             */
            address: string;
            /**
             * Body
             * b64-encoded cell with message body
             */
            body: string;
            /**
             * Init Code
             * b64-encoded cell with init-code
             */
            init_code?: string;
            /**
             * Init Data
             * b64-encoded cell with init-data
             */
            init_data?: string;
            /**
             * Ignore Chksig
             * If true during test query processing assume that all chksig operations return True
             */
            ignore_chksig?: boolean;
        }
        /**
         * Body_run_get_method_runGetMethod_post
         */
        export interface BodyRunGetMethodRunGetMethodPost {
            /**
             * Address
             * Contract address
             */
            address: string;
            /**
             * Method
             * Method name or method id
             */
            method: /**
             * Method
             * Method name or method id
             */
            string | number;
            /**
             * Stack
             * Array of stack elements: `[['num',3], ['cell', cell_object], ['slice', slice_object]]`
             */
            stack: any[][];
        }
        /**
         * Body_send_boc_sendBoc_post
         */
        export interface BodySendBocSendBocPost {
            /**
             * Boc
             * b64 encoded bag of cells
             */
            boc: string;
        }
        /**
         * Body_send_query_sendQuery_post
         */
        export interface BodySendQuerySendQueryPost {
            /**
             * Address
             * Address in any format
             */
            address: string;
            /**
             * Body
             * b64-encoded boc-serialized cell with message body
             */
            body: string;
            /**
             * Init Code
             * b64-encoded boc-serialized cell with init-code
             */
            init_code?: string;
            /**
             * Init Data
             * b64-encoded boc-serialized cell with init-data
             */
            init_data?: string;
        }
        /**
         * TonRequestJsonRPC
         */
        export interface TonRequestJsonRPC {
            /**
             * Method
             */
            method: string;
            /**
             * Params
             */
            params?: {
                [key: string]: any;
            };
            /**
             * Id
             */
            id?: string;
            /**
             * Jsonrpc
             */
            jsonrpc?: string;
        }
        /**
         * TonResponse
         */
        export interface TonResponse {
            /**
             * Ok
             */
            ok: boolean;
            /**
             * Result
             */
            result?: /* Result */ string | any[] | {
                [key: string]: any;
            };
            /**
             * Error
             */
            error?: string;
            /**
             * Code
             */
            code?: number;
        }
        /**
         * TonResponseJsonRPC
         */
        export interface TonResponseJsonRPC {
            /**
             * Ok
             */
            ok: boolean;
            /**
             * Result
             */
            result?: /* Result */ string | any[] | {
                [key: string]: any;
            };
            /**
             * Error
             */
            error?: string;
            /**
             * Code
             */
            code?: number;
            /**
             * Jsonrpc
             */
            jsonrpc?: string;
            /**
             * Id
             */
            id?: string;
        }
    }
}
declare namespace Paths {
    namespace DetectAddressDetectAddressGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace EstimateFeeEstimateFeePost {
        export type RequestBody = /* Body_estimate_fee_estimateFee_post */ Components.Schemas.BodyEstimateFeeEstimateFeePost;
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetAddressBalanceGetAddressBalanceGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetAddressGetAddressStateGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetAddressInformationGetAddressInformationGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetBlockHeaderGetBlockHeaderGet {
        namespace Parameters {
            /**
             * File Hash
             */
            export type FileHash = string;
            /**
             * Root Hash
             */
            export type RootHash = string;
            /**
             * Seqno
             */
            export type Seqno = number;
            /**
             * Shard
             */
            export type Shard = number;
            /**
             * Workchain
             */
            export type Workchain = number;
        }
        export interface QueryParameters {
            workchain: /* Workchain */ Parameters.Workchain;
            shard: /* Shard */ Parameters.Shard;
            seqno: /* Seqno */ Parameters.Seqno;
            root_hash?: /* Root Hash */ Parameters.RootHash;
            file_hash?: /* File Hash */ Parameters.FileHash;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetBlockTransactionsGetBlockTransactionsGet {
        namespace Parameters {
            /**
             * After Hash
             */
            export type AfterHash = string;
            /**
             * After Lt
             */
            export type AfterLt = number;
            /**
             * Count
             */
            export type Count = number;
            /**
             * File Hash
             */
            export type FileHash = string;
            /**
             * Root Hash
             */
            export type RootHash = string;
            /**
             * Seqno
             */
            export type Seqno = number;
            /**
             * Shard
             */
            export type Shard = number;
            /**
             * Workchain
             */
            export type Workchain = number;
        }
        export interface QueryParameters {
            workchain: /* Workchain */ Parameters.Workchain;
            shard: /* Shard */ Parameters.Shard;
            seqno: /* Seqno */ Parameters.Seqno;
            root_hash?: /* Root Hash */ Parameters.RootHash;
            file_hash?: /* File Hash */ Parameters.FileHash;
            after_lt?: /* After Lt */ Parameters.AfterLt;
            after_hash?: /* After Hash */ Parameters.AfterHash;
            count?: /* Count */ Parameters.Count;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetConsensusBlockGetConsensusBlockGet {
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetExtendedAddressInformationGetExtendedAddressInformationGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetMasterchainInfoGetMasterchainInfoGet {
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetTransactionsGetTransactionsGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
            /**
             * Archival
             * By default getTransaction request is processed by any available liteserver. If *archival=true* only liteservers with full history are used.
             */
            export type Archival = boolean;
            /**
             * Hash
             * Hash of transaction to start with, in *base64* or *hex* encoding , must be sent with *lt*.
             */
            export type Hash = string;
            /**
             * Limit
             * Maximum number of transactions in response.
             */
            export type Limit = number;
            /**
             * Lt
             * Logical time of transaction to start with, must be sent with *hash*.
             */
            export type Lt = number;
            /**
             * To Lt
             * Logical time of transaction to finish with (to get tx from *lt* to *to_lt*).
             */
            export type ToLt = number;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
            limit?: /**
             * Limit
             * Maximum number of transactions in response.
             */
            Parameters.Limit;
            lt?: /**
             * Lt
             * Logical time of transaction to start with, must be sent with *hash*.
             */
            Parameters.Lt;
            hash?: /**
             * Hash
             * Hash of transaction to start with, in *base64* or *hex* encoding , must be sent with *lt*.
             */
            Parameters.Hash;
            to_lt?: /**
             * To Lt
             * Logical time of transaction to finish with (to get tx from *lt* to *to_lt*).
             */
            Parameters.ToLt;
            archival?: /**
             * Archival
             * By default getTransaction request is processed by any available liteserver. If *archival=true* only liteservers with full history are used.
             */
            Parameters.Archival;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetTryLocateResultTxTryLocateResultTxGet {
        namespace Parameters {
            /**
             * Created Lt
             */
            export type CreatedLt = number;
            /**
             * Destination
             */
            export type Destination = string;
            /**
             * Source
             */
            export type Source = string;
        }
        export interface QueryParameters {
            source: /* Source */ Parameters.Source;
            destination: /* Destination */ Parameters.Destination;
            created_lt: /* Created Lt */ Parameters.CreatedLt;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetTryLocateSourceTxTryLocateSourceTxGet {
        namespace Parameters {
            /**
             * Created Lt
             */
            export type CreatedLt = number;
            /**
             * Destination
             */
            export type Destination = string;
            /**
             * Source
             */
            export type Source = string;
        }
        export interface QueryParameters {
            source: /* Source */ Parameters.Source;
            destination: /* Destination */ Parameters.Destination;
            created_lt: /* Created Lt */ Parameters.CreatedLt;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetTryLocateTxTryLocateTxGet {
        namespace Parameters {
            /**
             * Created Lt
             */
            export type CreatedLt = number;
            /**
             * Destination
             */
            export type Destination = string;
            /**
             * Source
             */
            export type Source = string;
        }
        export interface QueryParameters {
            source: /* Source */ Parameters.Source;
            destination: /* Destination */ Parameters.Destination;
            created_lt: /* Created Lt */ Parameters.CreatedLt;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace GetWalletInformationGetWalletInformationGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in any form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in any form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace JsonrpcHandlerJsonRPCPost {
        export type RequestBody = /* TonRequestJsonRPC */ Components.Schemas.TonRequestJsonRPC;
        namespace Responses {
            export type $200 = /* TonResponseJsonRPC */ Components.Schemas.TonResponseJsonRPC;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace LookupBlockLookupBlockGet {
        namespace Parameters {
            /**
             * Lt
             * Block's logical time
             */
            export type Lt = number;
            /**
             * Seqno
             * Block's height
             */
            export type Seqno = number;
            /**
             * Shard
             * Shard id to look up block in
             */
            export type Shard = number;
            /**
             * Unixtime
             * Block's unixtime
             */
            export type Unixtime = number;
            /**
             * Workchain
             * Workchain id to look up block in
             */
            export type Workchain = number;
        }
        export interface QueryParameters {
            workchain: /**
             * Workchain
             * Workchain id to look up block in
             */
            Parameters.Workchain;
            shard: /**
             * Shard
             * Shard id to look up block in
             */
            Parameters.Shard;
            seqno?: /**
             * Seqno
             * Block's height
             */
            Parameters.Seqno;
            lt?: /**
             * Lt
             * Block's logical time
             */
            Parameters.Lt;
            unixtime?: /**
             * Unixtime
             * Block's unixtime
             */
            Parameters.Unixtime;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace PackAddressPackAddressGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in raw form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in raw form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace RunGetMethodRunGetMethodPost {
        export type RequestBody = /* Body_run_get_method_runGetMethod_post */ Components.Schemas.BodyRunGetMethodRunGetMethodPost;
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace SendBocSendBocPost {
        export type RequestBody = /* Body_send_boc_sendBoc_post */ Components.Schemas.BodySendBocSendBocPost;
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace SendQuerySendQueryPost {
        export type RequestBody = /* Body_send_query_sendQuery_post */ Components.Schemas.BodySendQuerySendQueryPost;
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace ShardsShardsGet {
        namespace Parameters {
            /**
             * Seqno
             * Masterchain seqno to fetch shards of.
             */
            export type Seqno = number;
        }
        export interface QueryParameters {
            seqno: /**
             * Seqno
             * Masterchain seqno to fetch shards of.
             */
            Parameters.Seqno;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
    namespace UnpackAddressUnpackAddressGet {
        namespace Parameters {
            /**
             * Address
             * Identifier of target TON account in user-friendly form
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Identifier of target TON account in user-friendly form
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* TonResponse */ Components.Schemas.TonResponse;
            export interface $422 {
            }
            export interface $504 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * get_address_information_getAddressInformation_get - Get Address Information
   * 
   * Get basic information about the address: balance, code, data, last_transaction_id.
   */
  'getAddressInformation'(
    parameters?: Parameters<Paths.GetAddressInformationGetAddressInformationGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAddressInformationGetAddressInformationGet.Responses.$200>
  /**
   * get_extended_address_information_getExtendedAddressInformation_get - Get Extended Address Information
   * 
   * Similar to previous one but tries to parse additional information for known contract types. This method is based on tonlib's function *getAccountState*. For detecting wallets we recommend to use *getWalletInformation*.
   */
  'getExtendedAddressInformation'(
    parameters?: Parameters<Paths.GetExtendedAddressInformationGetExtendedAddressInformationGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetExtendedAddressInformationGetExtendedAddressInformationGet.Responses.$200>
  /**
   * get_wallet_information_getWalletInformation_get - Get Wallet Information
   * 
   * Retrieve wallet information. This method parses contract state and currently supports more wallet types than getExtendedAddressInformation: simple wallet, standart wallet, v3 wallet, v4 wallet.
   */
  'getWalletInformation'(
    parameters?: Parameters<Paths.GetWalletInformationGetWalletInformationGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWalletInformationGetWalletInformationGet.Responses.$200>
  /**
   * get_transactions_getTransactions_get - Get Transactions
   * 
   * Get transaction history of a given address.
   */
  'getTransactions'(
    parameters?: Parameters<Paths.GetTransactionsGetTransactionsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactionsGetTransactionsGet.Responses.$200>
  /**
   * get_address_balance_getAddressBalance_get - Get Address Balance
   * 
   * Get balance (in nanotons) of a given address.
   */
  'getAddressBalance'(
    parameters?: Parameters<Paths.GetAddressBalanceGetAddressBalanceGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAddressBalanceGetAddressBalanceGet.Responses.$200>
  /**
   * get_address_getAddressState_get - Get Address
   * 
   * Get state of a given address. State can be either *unitialized*, *active* or *frozen*.
   */
  'getAddressState'(
    parameters?: Parameters<Paths.GetAddressGetAddressStateGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAddressGetAddressStateGet.Responses.$200>
  /**
   * pack_address_packAddress_get - Pack Address
   * 
   * Convert an address from raw to human-readable format.
   */
  'packAddress'(
    parameters?: Parameters<Paths.PackAddressPackAddressGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PackAddressPackAddressGet.Responses.$200>
  /**
   * unpack_address_unpackAddress_get - Unpack Address
   * 
   * Convert an address from human-readable to raw format.
   */
  'unpackAddress'(
    parameters?: Parameters<Paths.UnpackAddressUnpackAddressGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UnpackAddressUnpackAddressGet.Responses.$200>
  /**
   * get_masterchain_info_getMasterchainInfo_get - Get Masterchain Info
   * 
   * Get up-to-date masterchain state.
   */
  'getMasterchainInfo'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMasterchainInfoGetMasterchainInfoGet.Responses.$200>
  /**
   * get_consensus_block_getConsensusBlock_get - Get Consensus Block
   * 
   * Get consensus block and its update timestamp.
   */
  'getConsensusBlock'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetConsensusBlockGetConsensusBlockGet.Responses.$200>
  /**
   * lookup_block_lookupBlock_get - Lookup Block
   * 
   * Look up block by either *seqno*, *lt* or *unixtime*.
   */
  'lookupBlock'(
    parameters?: Parameters<Paths.LookupBlockLookupBlockGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LookupBlockLookupBlockGet.Responses.$200>
  /**
   * shards_shards_get - Shards
   * 
   * Get shards information.
   */
  'shards'(
    parameters?: Parameters<Paths.ShardsShardsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ShardsShardsGet.Responses.$200>
  /**
   * get_block_transactions_getBlockTransactions_get - Get Block Transactions
   * 
   * Get transactions of the given block.
   */
  'getBlockTransactions'(
    parameters?: Parameters<Paths.GetBlockTransactionsGetBlockTransactionsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlockTransactionsGetBlockTransactionsGet.Responses.$200>
  /**
   * get_block_header_getBlockHeader_get - Get Block Header
   * 
   * Get metadata of a given block.
   */
  'getBlockHeader'(
    parameters?: Parameters<Paths.GetBlockHeaderGetBlockHeaderGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlockHeaderGetBlockHeaderGet.Responses.$200>
  /**
   * get_try_locate_tx_tryLocateTx_get - Get Try Locate Tx
   * 
   * Locate outcoming transaction of *destination* address by incoming message.
   */
  'tryLocateTx'(
    parameters?: Parameters<Paths.GetTryLocateTxTryLocateTxGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTryLocateTxTryLocateTxGet.Responses.$200>
  /**
   * get_try_locate_result_tx_tryLocateResultTx_get - Get Try Locate Result Tx
   * 
   * Same as previous. Locate outcoming transaction of *destination* address by incoming message
   */
  'tryLocateResultTx'(
    parameters?: Parameters<Paths.GetTryLocateResultTxTryLocateResultTxGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTryLocateResultTxTryLocateResultTxGet.Responses.$200>
  /**
   * get_try_locate_source_tx_tryLocateSourceTx_get - Get Try Locate Source Tx
   * 
   * Locate incoming transaction of *source* address by outcoming message.
   */
  'tryLocateSourceTx'(
    parameters?: Parameters<Paths.GetTryLocateSourceTxTryLocateSourceTxGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTryLocateSourceTxTryLocateSourceTxGet.Responses.$200>
  /**
   * detect_address_detectAddress_get - Detect Address
   * 
   * Get all possible address forms.
   */
  'detectAddress'(
    parameters?: Parameters<Paths.DetectAddressDetectAddressGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DetectAddressDetectAddressGet.Responses.$200>
  /**
   * send_boc_sendBoc_post - Send Boc
   * 
   * Send serialized boc file: fully packed and serialized external message to blockchain.
   */
  'sendBoc'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendBocSendBocPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendBocSendBocPost.Responses.$200>
  /**
   * send_query_sendQuery_post - Send Query
   * 
   * Send query - unpacked external message. This method takes address, body and init-params (if any), packs it to external message and sends to network. All params should be boc-serialized.
   */
  'sendQuery'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendQuerySendQueryPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendQuerySendQueryPost.Responses.$200>
  /**
   * estimate_fee_estimateFee_post - Estimate Fee
   * 
   * Estimate fees required for query processing. *body*, *init-code* and *init-data* accepted in serialized format (b64-encoded).
   */
  'estimateFee'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EstimateFeeEstimateFeePost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EstimateFeeEstimateFeePost.Responses.$200>
  /**
   * run_get_method_runGetMethod_post - Run Get Method
   * 
   * Run get method on smart contract.
   */
  'runGetMethod'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RunGetMethodRunGetMethodPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RunGetMethodRunGetMethodPost.Responses.$200>
  /**
   * jsonrpc_handler_jsonRPC_post - Jsonrpc Handler
   * 
   * All methods in the API are available through JSON-RPC protocol ([spec](https://www.jsonrpc.org/specification)). 
   */
  'jsonRPC'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.JsonrpcHandlerJsonRPCPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.JsonrpcHandlerJsonRPCPost.Responses.$200>
}

export interface PathsDictionary {
  ['/getAddressInformation']: {
    /**
     * get_address_information_getAddressInformation_get - Get Address Information
     * 
     * Get basic information about the address: balance, code, data, last_transaction_id.
     */
    'get'(
      parameters?: Parameters<Paths.GetAddressInformationGetAddressInformationGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAddressInformationGetAddressInformationGet.Responses.$200>
  }
  ['/getExtendedAddressInformation']: {
    /**
     * get_extended_address_information_getExtendedAddressInformation_get - Get Extended Address Information
     * 
     * Similar to previous one but tries to parse additional information for known contract types. This method is based on tonlib's function *getAccountState*. For detecting wallets we recommend to use *getWalletInformation*.
     */
    'get'(
      parameters?: Parameters<Paths.GetExtendedAddressInformationGetExtendedAddressInformationGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetExtendedAddressInformationGetExtendedAddressInformationGet.Responses.$200>
  }
  ['/getWalletInformation']: {
    /**
     * get_wallet_information_getWalletInformation_get - Get Wallet Information
     * 
     * Retrieve wallet information. This method parses contract state and currently supports more wallet types than getExtendedAddressInformation: simple wallet, standart wallet, v3 wallet, v4 wallet.
     */
    'get'(
      parameters?: Parameters<Paths.GetWalletInformationGetWalletInformationGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWalletInformationGetWalletInformationGet.Responses.$200>
  }
  ['/getTransactions']: {
    /**
     * get_transactions_getTransactions_get - Get Transactions
     * 
     * Get transaction history of a given address.
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactionsGetTransactionsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactionsGetTransactionsGet.Responses.$200>
  }
  ['/getAddressBalance']: {
    /**
     * get_address_balance_getAddressBalance_get - Get Address Balance
     * 
     * Get balance (in nanotons) of a given address.
     */
    'get'(
      parameters?: Parameters<Paths.GetAddressBalanceGetAddressBalanceGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAddressBalanceGetAddressBalanceGet.Responses.$200>
  }
  ['/getAddressState']: {
    /**
     * get_address_getAddressState_get - Get Address
     * 
     * Get state of a given address. State can be either *unitialized*, *active* or *frozen*.
     */
    'get'(
      parameters?: Parameters<Paths.GetAddressGetAddressStateGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAddressGetAddressStateGet.Responses.$200>
  }
  ['/packAddress']: {
    /**
     * pack_address_packAddress_get - Pack Address
     * 
     * Convert an address from raw to human-readable format.
     */
    'get'(
      parameters?: Parameters<Paths.PackAddressPackAddressGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PackAddressPackAddressGet.Responses.$200>
  }
  ['/unpackAddress']: {
    /**
     * unpack_address_unpackAddress_get - Unpack Address
     * 
     * Convert an address from human-readable to raw format.
     */
    'get'(
      parameters?: Parameters<Paths.UnpackAddressUnpackAddressGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UnpackAddressUnpackAddressGet.Responses.$200>
  }
  ['/getMasterchainInfo']: {
    /**
     * get_masterchain_info_getMasterchainInfo_get - Get Masterchain Info
     * 
     * Get up-to-date masterchain state.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMasterchainInfoGetMasterchainInfoGet.Responses.$200>
  }
  ['/getConsensusBlock']: {
    /**
     * get_consensus_block_getConsensusBlock_get - Get Consensus Block
     * 
     * Get consensus block and its update timestamp.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetConsensusBlockGetConsensusBlockGet.Responses.$200>
  }
  ['/lookupBlock']: {
    /**
     * lookup_block_lookupBlock_get - Lookup Block
     * 
     * Look up block by either *seqno*, *lt* or *unixtime*.
     */
    'get'(
      parameters?: Parameters<Paths.LookupBlockLookupBlockGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LookupBlockLookupBlockGet.Responses.$200>
  }
  ['/shards']: {
    /**
     * shards_shards_get - Shards
     * 
     * Get shards information.
     */
    'get'(
      parameters?: Parameters<Paths.ShardsShardsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ShardsShardsGet.Responses.$200>
  }
  ['/getBlockTransactions']: {
    /**
     * get_block_transactions_getBlockTransactions_get - Get Block Transactions
     * 
     * Get transactions of the given block.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlockTransactionsGetBlockTransactionsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlockTransactionsGetBlockTransactionsGet.Responses.$200>
  }
  ['/getBlockHeader']: {
    /**
     * get_block_header_getBlockHeader_get - Get Block Header
     * 
     * Get metadata of a given block.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlockHeaderGetBlockHeaderGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlockHeaderGetBlockHeaderGet.Responses.$200>
  }
  ['/tryLocateTx']: {
    /**
     * get_try_locate_tx_tryLocateTx_get - Get Try Locate Tx
     * 
     * Locate outcoming transaction of *destination* address by incoming message.
     */
    'get'(
      parameters?: Parameters<Paths.GetTryLocateTxTryLocateTxGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTryLocateTxTryLocateTxGet.Responses.$200>
  }
  ['/tryLocateResultTx']: {
    /**
     * get_try_locate_result_tx_tryLocateResultTx_get - Get Try Locate Result Tx
     * 
     * Same as previous. Locate outcoming transaction of *destination* address by incoming message
     */
    'get'(
      parameters?: Parameters<Paths.GetTryLocateResultTxTryLocateResultTxGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTryLocateResultTxTryLocateResultTxGet.Responses.$200>
  }
  ['/tryLocateSourceTx']: {
    /**
     * get_try_locate_source_tx_tryLocateSourceTx_get - Get Try Locate Source Tx
     * 
     * Locate incoming transaction of *source* address by outcoming message.
     */
    'get'(
      parameters?: Parameters<Paths.GetTryLocateSourceTxTryLocateSourceTxGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTryLocateSourceTxTryLocateSourceTxGet.Responses.$200>
  }
  ['/detectAddress']: {
    /**
     * detect_address_detectAddress_get - Detect Address
     * 
     * Get all possible address forms.
     */
    'get'(
      parameters?: Parameters<Paths.DetectAddressDetectAddressGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DetectAddressDetectAddressGet.Responses.$200>
  }
  ['/sendBoc']: {
    /**
     * send_boc_sendBoc_post - Send Boc
     * 
     * Send serialized boc file: fully packed and serialized external message to blockchain.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendBocSendBocPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendBocSendBocPost.Responses.$200>
  }
  ['/sendQuery']: {
    /**
     * send_query_sendQuery_post - Send Query
     * 
     * Send query - unpacked external message. This method takes address, body and init-params (if any), packs it to external message and sends to network. All params should be boc-serialized.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendQuerySendQueryPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendQuerySendQueryPost.Responses.$200>
  }
  ['/estimateFee']: {
    /**
     * estimate_fee_estimateFee_post - Estimate Fee
     * 
     * Estimate fees required for query processing. *body*, *init-code* and *init-data* accepted in serialized format (b64-encoded).
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EstimateFeeEstimateFeePost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EstimateFeeEstimateFeePost.Responses.$200>
  }
  ['/runGetMethod']: {
    /**
     * run_get_method_runGetMethod_post - Run Get Method
     * 
     * Run get method on smart contract.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RunGetMethodRunGetMethodPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RunGetMethodRunGetMethodPost.Responses.$200>
  }
  ['/jsonRPC']: {
    /**
     * jsonrpc_handler_jsonRPC_post - Jsonrpc Handler
     * 
     * All methods in the API are available through JSON-RPC protocol ([spec](https://www.jsonrpc.org/specification)). 
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.JsonrpcHandlerJsonRPCPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.JsonrpcHandlerJsonRPCPost.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
