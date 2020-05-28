import React,{Component} from 'react';
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';
import web3 from '../web3';
import Hotel from '../lottery';

class ADDROOM extends Component {
    state ={
        name:'',
        roomprice:0
    }
   // async componentDidMount(){
      //  const singlePrice=await Hotel.methods.add("Single").call();
      //  const deluxPrice=await Hotel.methods.getRoomPrice("Delux").call();
      //  const familyPrice=await Hotel.methods.getRoomPrice("Family").call();
        //delux room family room fetch
       
       // await this.setState({singlePrice,roomPrice:singlePrice,deluxPrice,familyPrice});
        //console.log(this.state);
        

    //}
    // onchangeHandler=event=>{
    //     if(event.target.name==="noOfRooms"){
    //         const totalCost =this.state.roomPrice*event.target.value*this.state.noofdays;
    //         this.setState({[event.target.name]:event.target.value,totalCost});
    //     }
    //     else if(event.target.name==="noofdays"){
    //         const totalCost = event.target.value*this.state.roomPrice*this.state.noOfRooms;
    //         this.setState({[event.target.name]:event.target.value,totalCost});
    //     }
    //     else{
    //      this.setState({[event.target.name]:event.target.value});
    //     }
    // }
    // onSelectHandler=event=>{
    //     //roomPrice set karna hai
    //     var roomPrice=this.state.roomPrice;
    //     console.log(event.target.value,this.state);
    //     if(event.target.value==="Single Room")
    //     {
    //        roomPrice=this.state.singlePrice
    //     }
    //     else if(event.target.value==="Delux Room")
    //     {
    //         roomPrice=this.state.deluxPrice
    //     }
    //     else if(event.target.value==="Family Room")
    //     {
    //         roomPrice=this.state.familyPrice
    //     }
    //     console.log(roomPrice);
        
    //     const totalCost=this.state.noOfRooms*roomPrice*this.state.noofdays;
    //     console.log(totalCost);
    //     this.setState({typeRoom:event.target.value,totalCost,roomPrice});
    // }
    onchangeHandler=event=>{
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmitHandler=async event=>{
        const accounts=await web3.eth.getAccounts();
        const owner= await Hotel.methods.owner().call();
        if(owner===accounts[0]){
        const accounts=await web3.eth.getAccounts();
        await Hotel.methods.addRoom(this.state.name,this.state.roomprice).send({
            from:owner
        })
        // const details=await Hotel.methods.bookings(1).call();
        console.log(this.state);
        this.props.history.push('/printadd');
      
    }
    else{
        this.props.history.push('/Error');

    }
    }
    render(){

    return(
                 <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                 <div className="measure">
                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <legend className="f1 fw6 ph0 mh0">Add Room</legend>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="name">Room Name</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onchangeHandler} required/>
                     </div>
                     
                     
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="number">Price</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="roomprice"  id="pice"  min="0" onChange={this.onchangeHandler} required/>
                     </div>
                     
                     
                     </fieldset>
                     <div className="">
                     <button className="btn-primary" onClick={this.onSubmitHandler}>
                     AddRoom
                     </button>
                     </div>
                 </div>
              </main>
              </article>
             );
 }
}

export default withRouter(ADDROOM);