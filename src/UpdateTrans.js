import React, { Component } from 'react';

class UpdateTrans extends Component {
    constructor(props) {
        super();
        this.state = {
            idval: 0,
            // dateval: new Date(),
            // catval: '',
            placeval: ''
            // amtval: 0
        }
        // this.handleOnClick = this.handleOnClick.bind(this)
    }

    // handleEventChange(){

    // }



    render() {
        return(
            <div>
                <br/>
                <input placeholder=" Transaction ID" onChange={event=> {this.setState({idval: parseFloat(event.target.value,10)})}}/>
                {/* <input onChange={event=> {this.setState({dateval: new Date()})}}/> */}
                {/* <input onChange={event=> {this.setState({catval: event.target.value})}}/> */}
                <input placeholder=" New Place" onChange={event=> {this.setState({placeval: event.target.value})}}/>
                {/* <input onChange={event=> {this.setState({amtval: event.target.value})}}/> */}
                <button onClick={event=>{
                    this.props.updatetrans(this.state.idval, this.state.placeval)
                    this.setState({idval: 0, placeval: ''})
                }
                    }>Update Transaction</button>

            </div>
        )
    }


}



export default UpdateTrans;