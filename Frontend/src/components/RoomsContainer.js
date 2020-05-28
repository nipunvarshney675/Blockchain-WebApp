import React from "react";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
export default function RoomContainer() {
  return (
    <RoomConsumer>
      {
        value => {
        const { loading, setRoom, sortedRooms,rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} setRoom={setRoom} />
          </>
        );
      }}
    </RoomConsumer>
  );
}