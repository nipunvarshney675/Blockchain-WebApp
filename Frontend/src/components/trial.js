import React ,{Component } from 'react';
import web3 from '../web3';
import Hotel from '../lottery';;

class Trial extends Component {
    async componentDidMount(){
             const accounts= await web3.eth.getAccounts();

             console.log('accounts',accounts);
             const name=await Hotel.methods.roomsCount().call();
             const rooms=await Hotel.methods.rooms(1).call();
            //  const roomName="   ";
            //  const price=10000;
            //  const custname = " ";
            //  const custaddress = " ";
            //  const custcount = " ";
            //  const 
            //  await Hotel.methods.addRoom(roomName,price).send({
            //      from:accounts[0]
            //  })

             console.log(name,rooms);
    }
    render(){
        return(
            <div>
                <h1>Nipun SIr Rocks!!!!!!!</h1>
            </div>
        )
    }
}

export default Trial;