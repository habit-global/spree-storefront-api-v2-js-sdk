import { JsonApiDocument, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'

export interface AccountAttr extends JsonApiDocument {
  data: {
    id: string
    type: string
    attributes: {
      email: string
      store_credits: number
      completed_orders: number
    }

    relationships: IRelationships
  }
}

export interface IAccount extends JsonApiSingleResponse {
  data: AccountAttr
}