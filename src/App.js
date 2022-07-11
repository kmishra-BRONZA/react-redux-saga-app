import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './redux/actions'

class App extends PureComponent {

  constructor(props) {
    super(props)
  
    // this.state = {
    //    first
    // }
    this.handleFetchData = this.handleFetchData.bind(this)
  }

  handleFetchData(){
    console.log('handleFetchData');
    this.props.fetchData(2);
  }

  render() {
    return (
      <div>
        <button className='button' onClick={this.handleFetchData}> Fetch Data</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("inside mapStateToProps state:",state);
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData:(id)=>{
      console.log("inside mapDispatchToProps id:",id);
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

