import React, { Component } from 'react'
import items from './data'
// creating context
const RoomsContext = React.createContext();
class GlobalContext extends Component {
    state = {
       rooms: [],
       featuredRooms: [],
       sortedRooms: [],
       loading: true,
       type: 'all',
       capacity: 1,
       price: 0,
       minPrice: 0,
       maxPrice: 0,
       minSize: 0,
       maxSize: 0,
       breakfast: false,
       pets: false
    }

    componentDidMount(){
        // tounderstand the API call the way Api is setup to simplify that one
        const rooms = this.updatedRooms(items);
        const updatedFeaturedRooms = rooms.filter(room => room.featured)

        // getting maxsize and maxprice to put this value to filtercard component
        let maxPrice = Math.max(...rooms.map(room => room.price))
        let maxSize = Math.max(...rooms.map(room => room.size))

        this.setState({
             rooms: rooms,
             featuredRooms: updatedFeaturedRooms,
             sortedRooms: rooms,
             loading: false,
             price: maxPrice,
             maxPrice,
             maxSize
        })
    }

    // inputhandlechange
    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked: target.value
        const name = target.name;
        this.setState({
            [name]: value
        },
         this.filterRooms
        )

    }

    // filtering the list using input values
    filterRooms = () => {
        let {rooms, type, capacity, price, maxSize, minSize, breakfast, pets} = this.state;
        
        let tempRooms = [...rooms];
        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        
        // filter by capacity
        // capacity is string type so we covert to number 
        capacity = parseInt(capacity);
        //price is string type so we convert to number type
        price = parseInt(price)
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity === capacity);
        }
        // filter by maxPrice
        tempRooms = tempRooms.filter(room => room.price <= price);

        // size changes
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        // filter by pets and breakfast
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        this.setState({
            sortedRooms: tempRooms
        })
    }

    updatedRooms(items){
       let tempItems = items.map(item =>{
           let id = item.sys.id;
           let images = item.fields.images.map(image => image.fields.file.url)
      
           let rooms = {...item.fields, id, images}
           return rooms;
       })
       return tempItems;
    }

    // getting data of individual page
    getDataSinglePage = (slug) =>{
        let getSingleItem = [...this.state.rooms];
        const singleRoomDetails = getSingleItem.find(singleRoom => singleRoom.slug === slug)
        return singleRoomDetails
    }


    render() {
        return (
            <RoomsContext.Provider value={{...this.state,  getSingleRoomDetails: this.getDataSinglePage, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomsContext.Provider>
        )
    }
}


export {GlobalContext, RoomsContext};