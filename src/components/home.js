import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/actions';
function Home(props) {
  const { fetchDataHandler, data: payload } = props;
  return (
    <div>
      <div>Home</div>
      <button onClick={() => fetchDataHandler()}>Fetch User Data</button>

      {
        payload.isLoading ? <h1>Loading...</h1> : payload.error ? <h1>Error Occurred</h1> :
          payload && payload.data && payload.data.map((data) => {
            return <div key={data.id} style={{backgroundColor:"green",margin:'10px',padding:'10px'}}>
              <div>
                User Name: {data.name}
              </div>
              <div>
                User Email: {data.email}
              </div>
              User Location: {data.address.geo.lat} {data.address.geo.lng}

            </div>
          })
      }
    </div>

  )
}

const mapStateToProps = (state) => {
  const data = state.user;
  return {
    data
  }

}
const mapDispatchTopProps = (dispatch) => {
  return { fetchDataHandler: () => dispatch(fetchUsers()) }
}
export default connect(mapStateToProps, mapDispatchTopProps)(Home)