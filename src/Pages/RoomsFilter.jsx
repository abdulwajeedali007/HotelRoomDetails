import React,{useContext} from 'react'
import {RoomsContext} from '../GlobalContext'

import styled from 'styled-components'
function RoomsFilter({rooms}) {
    const state = useContext(RoomsContext);

    // getting unique value from the rooms type
    const getUniqueValue = (items, type) =>{
        return [...new Set(items.map(item => item[type]))]
    }
    

    const {handleChange,type, price, minPrice, maxPrice, minSize, maxSize, capacity, pets, breakfast} = state

    const types = getUniqueValue(rooms,'type')
    // adding the 'all' type in types array
    const allTypes = ['all',...types]

    // getting the value for capacity
    const people = getUniqueValue(rooms,'capacity');
    // getting the value for capacity

    return (
        <FORM>
            <div className="controlled__container">
                <div className="filter__form">
                    <form className="form">
                        {/*filter by type start*/}
                        <div className="form__group">
                            <label htmlFor="type">Room Type</label>
                            <select  className="form__control" name="type" id="type" value={type} onChange={handleChange}>
                                {
                                allTypes.map(op => <option value={op} key={op}>{op}</option>)
                                }
                            </select>
                        </div>
                        {/*filter by type end*/}
                        {/*filter by capacity start*/}
                        <div className="form__group">
                            <label htmlFor="type">Capacity</label>
                            <select className="form__control" name="capacity" id="capacity" value={capacity} onChange={handleChange}>
                                {
                                  people.map(op => <option value={op} key={op}>{op}</option>)
                                }
                            </select>
                        </div>
                        {/*filter by capacity end*/}
                        {/*filter by price start*/}
                        <div className="form__group">
                            <label htmlFor="type">Price is $ {price}</label>
                            <input  type="range" min={minPrice} max={maxPrice} name="price" value={price} onChange={handleChange}/>
                        </div>
                        {/*filter by price end*/}
                        {/*filter by minSize/maxSize start*/}
                        <div className="form__group">
                            <label htmlFor="type">Room Size</label>
                            <div className="group">
                                <input type="text" className="form__control" name="minSize" value={minSize} onChange={handleChange} />
                                <input type="text" className="form__control" name="maxSize" value={maxSize} onChange={handleChange} />
                            </div>
                        </div>
                        {/*filter by pets/breakfast end*/}
                        <div className="form__group">
                            
                            <div className="group">
                                <input type="checkbox" id="pets" name="pets" value={pets} onChange={handleChange} />
                                <label htmlFor="pets" className="labels">Pets</label>
                                
                            </div>
                             <br />
                            <div className="group">
                                <input type="checkbox" id="breakfast" name="breakfast" value={breakfast} onChange={handleChange} />
                                <label htmlFor="breakfast" className="labels">Breakfast</label>
                            </div>
                        </div>
                        {/*filter by pets/breakfast end*/}
                    </form>
                </div>
            </div>
        </FORM>
    )
}

export default RoomsFilter

const FORM = styled.div`
   .form{
     display: grid;
     grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
     align-items: center;
     justify-items: center;
     grid-gap: 0.5rem;
     padding: 2rem 0rem;
     .form__group{
         width: 100%;
         padding: 0rem 0.5rem;
         box-sizing: border-box;
         label{
             display: inline-block;
             font-size: 1.4rem;
             font-weight: 500;
         }
         .group{
               display: flex; 
               align-items: center;
               label{
                 margin-left: 3rem;
               }
               .form__control{
                 margin: 0rem 0.5rem;
               }
               input[type=checkbox]{
                 display:none;
                 cursor: pointer;
                 &:checked + .labels::after{
                   opacity:1;
                 }
               }
               .labels{
                 position: relative;
                 cursor: pointer;
               }
               .labels::after{
                 content: '';
                 position: absolute;
                 left: -1.9rem;
                 top: 0.4rem;
                 width: 1.2rem;
                 height: 1.2rem;
                 border-radius: 50%;
                 background: var(--primary__color);
                 opacity: 0;
                 transition: opacity 0.2rem linear;
               }
               .labels::before{
                content: '';
                 position: absolute;
                 left: -2.2rem;
                 top:  0.07rem;
                  width: 1.5rem;
                  height: 1.5rem;
                 border-radius: 50%;
                 border:0.2rem solid var(--primary__color);
               }
              

             }
         .form__control{
             width:100%;
             padding: 1rem;
             border: none;
             border-radius: 0.5rem;
             background: var(--primary__color);
             color: #fff;
             font-family: 'Poppins',sans-serif;
               
             box-sizing: border-box;
             
             
             &:focus{
                 outline:none;
             }
           
         }
         input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: var(--primary__color);
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid var(--primary__color);
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: var(--primary__color);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: var(--primary__color);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000;
  background: var(--primary__color);
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid var(--primary__color);
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: var(--primary__color);
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: var(--primary__color);
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: var(--primary__color);
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid var(--primary__color);
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: var(--primary__color);
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: var(--primary__color);
}
input[type=range]:focus::-ms-fill-upper {
  background: var(--primary__color);
}
     }
   }
`;