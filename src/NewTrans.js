import React, { Component } from 'react';

class NewTrans extends Component {
    constructor(props) {
        super();
        this.state = {
            // idval: 0,
            // dateval: new Date(),
            catval: '',
            placeval: '',
            amtval: 0
        }
        // this.handleOnClick = this.handleOnClick.bind(this)
    }

    // handleEventChange(){

    // }



    render() {
        return(
            <div>
             <br/>
                {/* <input onChange={event=> {this.setState({idval: event.target.value})}}/> */}
                {/* <input onChange={event=> {this.setState({dateval: new Date()})}}/> */}
                <input placeholder=" Category" onChange={event=> {this.setState({catval: event.target.value})}}/>
                <input placeholder=" Place" onChange={event=> {this.setState({placeval: event.target.value})}}/>
                <input placeholder=" Amount" onChange={event=> {this.setState({amtval: parseFloat(event.target.value,10)})}}/>
                <button onClick={event=>{
                    this.props.newtrans(this.state.catval,this.state.placeval,this.state.amtval)
                    // this.setState({catval: '', placeval: '', amtval: 0})
                }
                    }>Add Transaction</button>

            </div>
        )
    }


}



export default NewTrans;