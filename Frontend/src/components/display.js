import React,{Component} from 'react';
import web3 from '../web3';
import Hotel from '../lottery';
import './display.css';

class Display extends Component {
    state={
        data:[],
        account:'',
        display:false
    }
    async componentDidMount(){
        const accounts=await web3.eth.getAccounts();
        var display=false;//false
        const owner = await Hotel.methods.owner().call(); 
        if(owner===accounts[0])
            {display=true} 
        
       
        const totalBookings=await Hotel.methods.totalbookings().call();
        console.log(totalBookings);
        const data=[];
        for(let i=1;i<=totalBookings;i++)
        {
            const result=await Hotel.methods.bookings(i).call();
            // console.log(result[0]);
            var resultObject={name:result[1],adddress:result[0],no_ofdays:result[5],roomType:result[4],totalamount:result[7],noofrooms:result[3]};
            data.push(resultObject)
            console.log(result);
        }
        console.log(data);
        this.setState({data,account:accounts[0],display});
    }
    render(){
        return(
            <div>
           { this.state.display ? <table className="table" >
                 <tr>
                     <th>Name</th>
                     <th>Address</th>
                     <th>RoomType</th>
                     <th>No of Rooms</th>
                     <th>No of Days</th>
                     <th>Total Amount</th>
                 </tr>
                {this.state.data.map(curr=>{
                    return (
                        <tr>
                            <td>{curr.name}</td>
                            <td>{curr.adddress}</td>
                            <td>{curr.roomType}</td>
                            <td>{curr.noofrooms}</td>
                            <td>{curr.no_ofdays}</td>
                            <td>{curr.totalamount/1000000000000000000}ether</td>

                        </tr>
                    )
                })}
             </table>:<h1>YOU ARE NOT AUTHORIZED</h1>}
            </div>
        )
    }
}

export default Display;