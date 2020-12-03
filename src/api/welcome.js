import { request } from '@/lib/request'

const { temp } = request

/**
 * @argument
 *
 */
export const queryArrearsList = temp('/api/v1/app_finance_fee_inp/arrearage_record/query/by_example', {
  failTxt: '欠费查询失败'
})
