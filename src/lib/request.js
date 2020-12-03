import Request from 'his-request'

const isProduction = process.env.NODE_ENV === 'production'

export const request = new Request({
  baseURL: isProduction ? '/finance-fee-inp' : 'http://172.16.6.201:41270',
  isAddHospitalSoid: true
})

export default request
