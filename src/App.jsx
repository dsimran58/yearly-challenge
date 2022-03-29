import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='animate-bottom'>
       <div className="container-fluid bg-dark p-4">
          <h4 className='text-center text-white'>Contest Forces</h4>
      </div>
      <div class="d-flex justify-content-center m-2">
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <p>Active Users:  5</p>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">
            <p>Latest Users:  2</p>

            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='table-responsive'>
          <table className='table table-bordered table-hover'>
          <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Start Rating</th>
                <th>Latest Rating</th>
                <th>Rating Change</th>
              </tr>
            </thead>
            <tbody id="tbody">
            <tr>
                <th scope="row">1</th>
                <td>simran58</td>
                <td>0</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>simran58</td>
                <td>0</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>simran58</td>
                <td>0</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>simran58</td>
                <td>0</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>simran58</td>
                <td>0</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>simran58</td>
                <td>0</td>
                <td>20</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          
  </div>
  )
}

export default App
