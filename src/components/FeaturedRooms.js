import React, { Component } from 'react';
import {RoomContext} from '../context';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        return (
            <div>
                hello from featured rooms 
            </div>
        )
    }
}
export default FeaturedRooms;
