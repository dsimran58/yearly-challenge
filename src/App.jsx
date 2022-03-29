import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await fetch(`/.netlify/functions/fetch-user-data`);
    const users = await response.json();
    setUsers(users)
  }

  const displayUsers = () => {
    if (users) {
      return (
        users.map((user, index) => {
          return (
            <>
              <tr>
                <th scope="row">{index+1}</th>
                <td>{user.username}</td>
                <td>{user.start_rank}</td>
                <td>{user.present_rank}</td>
                <td>{user.performance}</td>
              </tr>
            </>
          )
        })
      )
    }
  }

  return (

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
        <div class="col-sm-2">
          <button type="button" className="btn btn-outline-warning">
            Active Contests <span className="badge bg-secondary">4</span>
          </button>

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
                {displayUsers()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
