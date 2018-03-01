
import {
  FormattedOrderSpecification,
  FormattedTrustline,
  Adjustment,
  RippledAmount,
  Memo,
  FormattedSettings
} from '../common/types/objects'
import {ApiMemo} from './utils'

export type Instructions = {
  sequence?: number,
  fee?: string,
  maxFee?: string,
  maxLedgerVersion?: number,
  maxLedgerVersionOffset?: number,
  signersCount?: number
}

export type Prepare = {
  txJSON: string,
  instructions: {
   fee: string,
   sequence: number,
   maxLedgerVersion?: number
 }
}

export type Submit = {
  success: boolean,
  engineResult: string,
  engineResultCode: number,
  engineResultMessage?: string,
  txBlob?: string,
  txJson?: Object
}

export interface OfferCreateTransaction {
  TransactionType: 'OfferCreate',
  Account: string,
  Fee: string,
  Flags: number,
  LastLedgerSequence: number,
  Sequence: number,
  TakerGets: RippledAmount,
  TakerPays: RippledAmount,
  Expiration?: number,
  OfferSequence?: number,
  Memos: {Memo: ApiMemo}[]
}

type Outcome = {
  result: string,
  ledgerVersion: number,
  indexInLedger: number,
  fee: string,
  balanceChanges: {
    [key: string]: [{
     currency: string,
     counterparty?: string,
     value: string
    }]
  },
  orderbookChanges: Object,
  timestamp?: string
}

type FormattedOrderCancellation = {
  orderSequence: number
}

type FormattedPayment = {
  source: Adjustment,
  destination: Adjustment,
  paths?: string,
  memos?: Array<Memo>,
  invoiceID?: string,
  allowPartialPayment?: boolean,
  noDirectRipple?: boolean,
  limitQuality?: boolean
}

type FormattedPaymentTransaction = {
  type: string,
  specification: FormattedPayment,
  outcome: Outcome,
  id: string,
  address: string,
  sequence: number
}

type FormattedOrderTransaction = {
  type: string,
  specification: FormattedOrderSpecification,
  outcome: Outcome,
  id: string,
  address: string,
  sequence: number
}

type FormattedOrderCancellationTransaction = {
  type: string,
  specification: FormattedOrderCancellation,
  outcome: Outcome,
  id: string,
  address: string,
  sequence: number
}

type FormattedTrustlineTransaction = {
  type: string,
  specification: FormattedTrustline,
  outcome: Outcome,
  id: string,
  address: string,
  sequence: number
}

type FormattedSettingsTransaction = {
  type: string,
  specification: FormattedSettings,
  outcome: Outcome,
  id: string,
  address: string,
  sequence: number
}

export type FormattedTransactionType =
  FormattedPaymentTransaction |
  FormattedOrderTransaction |
  FormattedOrderCancellationTransaction |
  FormattedTrustlineTransaction |
  FormattedSettingsTransaction