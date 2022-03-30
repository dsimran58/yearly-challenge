import { useEffect, useState,React } from 'react'
import './RankingTable.css'

function RankingTable() {
const [users, setUsers] = useState(null);

useEffect(() => {
    getData()
  }, [])

async function getData() {
    const response = await fetch(`/.netlify/functions/fetch-user-data`);
    const users = await response.json();
    setUsers(users)
}

  const getTable = () => {
    if (users) {
      return (
      <>
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
        </>
      )
    }
    else {
      return (
        <div className='text-center'>
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only"></span>
        </div>
        </div>
      )
    }
  }

  const displayUsers = () => {
    return (
      users.map((user, index) => {
        return (
          <>
            <tr>
              <th scope="row">{index + 1}</th>
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

  return(
  <div className='container'>
            <div className='table-responsive'>
              <table className='table table-bordered table-hover'>

                   {getTable()}
              </table>
            </div>
          </div>
  );
}

export default RankingTable