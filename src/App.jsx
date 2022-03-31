import { useEffect, useState } from 'react'
import './App.css'
import RankingTable from './RankingTable/RankingTable'

function App() {
  return (
    <>
      <div className='animate-bottom'>
        <div className="container-fluid bg-dark p-4">
          <h4 className='text-center text-white'>Contest Forces</h4>
        </div>
        <div className="d-flex justify-content-center m-2">
          <div className="col-sm-2">
            <button type="button" className="btn btn-outline-warning">
              Active Users <span className="badge bg-secondary">4</span>
            </button>
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-outline-warning">
              Active Contests <span className="badge bg-secondary">4</span>
            </button>
          </div>
        </div>
      </div>
      <RankingTable />
    </>
  )
}

export default App
