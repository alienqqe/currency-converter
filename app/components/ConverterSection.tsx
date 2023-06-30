const ConverterSection = () => {
  return (
    <div className='converter-container container position-relative d-flex align-items-center justify-content-center mt-5 shadow p-3  bg-white rounded '>
      <div className='converter d-block'>
        <div className='py-2'>
          <input className='' type='text' />
          <select className='mt-1' name='currency'>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='GBP'>GBP</option>
            <option value='CZK'>CZK</option>
          </select>
        </div>
        <div className='py-2'>
          <input className='' type='text' />
          <select className='mt-2' name='converted-currency'>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='GBP'>GBP</option>
            <option value='CZK'>CZK</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ConverterSection
