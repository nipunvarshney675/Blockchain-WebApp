import React,{Component} from 'react';
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';
import web3 from '../web3';
import Hotel from '../lottery';

class Register extends Component {
    state ={
        name:'',
        email:'',
        typeRoom:'Single Room',
        noOfRooms:0,
        singlePrice:0,
        deluxPrice:0,
        familyPrice:0,
        roomPrice:0,
        noofdays:0,
        totalCost:0
    }
    async componentDidMount(){
        const singlePrice=await Hotel.methods.getRoomPrice("Single").call();
        const deluxPrice=await Hotel.methods.getRoomPrice("Delux").call();
        const familyPrice=await Hotel.methods.getRoomPrice("Family").call();
        

        //delux room family room fetch
        await this.setState({singlePrice,roomPrice:singlePrice,deluxPrice,familyPrice});
        console.log(this.state);
    }
    onchangeHandler=event=>{
        if(event.target.name==="noOfRooms"){
            const totalCost =this.state.roomPrice*event.target.value*this.state.noofdays;
            this.setState({[event.target.name]:event.target.value,totalCost});
        }
        else if(event.target.name==="noofdays"){
            const totalCost = event.target.value*this.state.roomPrice*this.state.noOfRooms;
            this.setState({[event.target.name]:event.target.value,totalCost});
        }
        else{
         this.setState({[event.target.name]:event.target.value});
        }
    }
    onSelectHandler=event=>{
        //roomPrice set karna hai
        var roomPrice=this.state.roomPrice;
        console.log(event.target.value,this.state);
        if(event.target.value==="Single Room")
        {
           roomPrice=this.state.singlePrice
        }
        else if(event.target.value==="Delux Room")
        {
            roomPrice=this.state.deluxPrice
        }
        else if(event.target.value==="Family Room")
        {
            roomPrice=this.state.familyPrice
        }
        console.log(roomPrice);
        
        const totalCost=this.state.noOfRooms*roomPrice*this.state.noofdays;
        console.log(totalCost);
        this.setState({typeRoom:event.target.value,totalCost,roomPrice});
    }
    onSubmitHandler=async event=>{
        
        const accounts=await web3.eth.getAccounts();
        await Hotel.methods.bookingdetails(this.state.name,this.state.email,this.state.noOfRooms,this.state.typeRoom.split(' ')[0],this.state.noofdays).send({
            from:accounts[0],
            value:this.state.totalCost
        })
        // const details=await Hotel.methods.bookings(1).call();
        console.log(this.state);
        this.props.history.push('/booked');
    }
    render(){

    return(
                 <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                 <div className="measure">
                     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <legend className="f1 fw6 ph0 mh0">Register</legend>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onchangeHandler} type="text" name="name"  id="name" required/>
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onchangeHandler} type="email" name="email"  id="email-address"  required/>
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="name">Select Room of your Choice</label>
                         <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" id="select" name="typeRoom" onChange={this.onSelectHandler}>
                             <option value = "Single Room"> Single Room {this.state.singlePrice/1000000000000000000} ether </option>
                             <option value = "Delux Room"> Delux Room {this.state.deluxPrice/1000000000000000000} ether</option>
                             <option value = "Family Room"> Family Room {this.state.familyPrice/1000000000000000000} ether </option>
                         </select>
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="number">Number of Rooms</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="noOfRooms"  id="rooms" value={this.state.noOfRooms} min="0" onChange={this.onchangeHandler}  required/>
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="number">No. of Days</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="noofdays" id="days" value={this.state.noofdays} min="0" onChange={this.onchangeHandler}  required/>
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" htmlFor="number">Total Amount (in ether)</label>
                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" value={(this.state.totalCost/1000000000000000000) } readOnly/>
                     </div>
                     </fieldset>
                     <div className="">
                     <button className="btn-primary" onClick={this.onSubmitHandler}>
                     Book Rooms
                     </button>
                     </div>
                 </div>
              </main>
              </article>
             );
 }
}

export default withRouter(Register);