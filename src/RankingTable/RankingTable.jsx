import { useEffect, useState, React } from 'react'
import Loader from '../Loader/Loader';

function RankingTable() {
  const [users, setUsers] = useState(null);
  const [totalCount,setTotalCount] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await fetch(`/.netlify/functions/fetch-user-data?page=${1}&size=${10}`);
    const {users,totalCount} = await response.json();
    setUsers(users);
    setTotalCount(totalCount);
  }

  const getTable = () => {
    if (users) {
      return (
        <>
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
        </>
      )
    }
    else {
      return (
        <Loader />
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

  return (
    <div className='container'>
      <div className='table-responsive'>
        {getTable()}
      </div>
    </div>
  );
}

export default RankingTable