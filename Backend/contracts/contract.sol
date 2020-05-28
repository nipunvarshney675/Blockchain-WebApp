pragma solidity ^0.4.17;


contract Hotel {
    string public check="Nipun";

    struct Room {
        uint id;
        string name;
        string hotel_name;
        uint price;
        string status;
    }

    struct Cust {
        address custadd;
        string name;
        string email;
        uint no_ofrooms;
        string roomType;
        uint noofdays;
        uint time;
        uint totalamt;
    
    }
    mapping(uint=>Cust) public bookings;
    mapping(string=>uint256) roomPrice;
    
    function setPrice(string room,uint price) public {
        roomPrice[room]=price;
    }
    
    function getRoomPrice(string room) public view returns(uint256) {
        return roomPrice[room];
    }
    uint public totalbookings=0;
    
    function bookingdetails(string sname, string semail, uint uno_ofrooms,string roomType,uint unoofdays)public payable{
        uint totalCost= uno_ofrooms*getRoomPrice(roomType)*unoofdays;
        require(msg.value>=totalCost);
        Cust memory newCust = Cust({
            custadd:msg.sender,
            name:sname,
            email:semail,
            no_ofrooms: uno_ofrooms,
            roomType:roomType,
            noofdays: unoofdays,
            totalamt: totalCost,
            time:now
        });
        totalbookings++;
        bookings[totalbookings]=newCust;
        owner.transfer(totalCost);
    
    }
    mapping (uint => Room) public rooms;
    // function getetherBack() public payable {
    //     owner.transfer(address(this).balance);
    // }
    
    uint public roomsCount;

    // Amount is send to owners address
    address public owner;
    // Constructor 
    function Hotel () public payable {

        // Set the contract creater as the owner
        owner = msg.sender;
        setPrice("Single",1 ether);
        setPrice("Delux",2 ether);
        setPrice("Family",3 ether);
        
        addRoom("Single", 1 ether);
        addRoom("Delux", 2 ether);
        addRoom("Family", 3 ether);
    }

    function addRoom(string _name, uint price) public {
        require(msg.sender==owner);
        roomsCount++;
        rooms[roomsCount] = Room(roomsCount,_name,'Hotel 1',price,'available');
    }
    function getBalance() public view  returns(uint256) {
        return address(this).balance;
    }

    // function bookRoom(uint _roomId) payable public {
        
    //     // Check that the room is a valid
    //     require (_roomId > 0 && _roomId <= roomsCount);

    //     // Check if room is available
    //     require (compareStrings(rooms[_roomId].status,"available"));

    //     // Check if amount is equal to the price of the room
    //     if(msg.value != rooms[_roomId].price)
    //     {
    //         // Throw exception
    //         throw;
    //     }
        
    //     owner.transfer(msg.value);
    //     // change the status of the room
    //     rooms[_roomId].status = "Not available";
    // }

    function compareStrings (string a, string b) view returns (bool){
      return keccak256(a) == keccak256(b);
   }   
}