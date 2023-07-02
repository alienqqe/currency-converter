'use client'
import { useEffect, useState } from 'react'

const ConverterSection = () => {
  const [convertFrom, setConvertFrom] = useState('')
  const [convertTo, setConvertTo] = useState('')
  const [amountConvertFrom, setAmountConvertFrom] = useState(0)
  const [convertRates, setConvertRates] = useState<any[]>()

  const fetchURL = `https://api.getgeoapi.com/v2/currency/convert?api_key=972b6121e0e5afe28ac6decf04d6f3fc359fe3e8&from=${convertFrom}&to=${convertTo}&amount=${amountConvertFrom}`

  async function fetchConvertRates(): Promise<any> {
    const res = await fetch(fetchURL)
    const resJSON = await res.json()

    setConvertRates(resJSON.rates[convertTo])
  }

  useEffect(() => {
    fetchConvertRates()
    console.log(convertRates)
  }, [convertFrom, convertTo, amountConvertFrom])

  return (
    <div className='converter-container container position-relative d-flex align-items-center justify-content-center mt-5 shadow p-3 bg-white rounded'>
      <div className='converter d-block'>
        <div className='py-2'>
          <input
            className=''
            value={amountConvertFrom}
            onChange={(e: any) => setAmountConvertFrom(e.target.value)}
            type='text'
          />
          <select
            value={convertFrom}
            onChange={(e) => setConvertFrom(e.target.value)}
            className='mt-1'
            name='currency'
          >
            <option></option>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='GBP'>GBP</option>
            <option value='CZK'>CZK</option>
            <option value='JPY'>JPY</option>
            <option value='CHF'>CHF</option>
            <option value='KWD'>KWD</option>
            <option value='BHD'>BHD</option>

            <option value='CNY'>CNY</option>
            <option value='UAH'>UAH</option>
          </select>
        </div>
        <div className='py-2'>
          <input
            className=''
            value={(convertRates as any)?.rate_for_amount}
            type='text'
          />
          <select
            value={convertTo}
            onChange={(e) => setConvertTo(e.target.value)}
            className='mt-2'
            name='converted-currency'
          >
            <option></option>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='GBP'>GBP</option>
            <option value='CZK'>CZK</option>
            <option value='JPY'>JPY</option>
            <option value='CHF'>CHF</option>
            <option value='KWD'>KWD</option>
            <option value='BHD'>BHD</option>

            <option value='CNY'>CNY</option>
            <option value='UAH'>UAH</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ConverterSection
