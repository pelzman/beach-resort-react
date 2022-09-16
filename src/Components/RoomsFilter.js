import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Titles from './Titles'
import Room from '../Components/Room'
const getUnique = (items, value)=>{
return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    console.log(context)
    const{
        handleChange, 
        type,
        capacity, 
        price, 
        minPrice, 
        maxPrice,
         minSize, 
         maxSize, 
         pets,
         breakfast
        } =context
        //get unique types
                let types = getUnique(rooms, 'type');
        //add all        
        types =['all',...types];
        //map to jsx
        types = types.map((item, index)=>{
        return    <option value={item} key={index}>{item}</option>
        })
       let people = getUnique(rooms, 'capacity');
       people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
       })
  return (
    <section className="filter-container">
    <Titles title='Search Rooms'/>
    <form className='filter-form'>
      {/* select type */}

      <div className="form-group">

        <label htmlFor="type">room type</label>
        <select 
        name="type"
         id='type'
          value= {type}
         className='form-control'
         onChange={handleChange}         
         >
          {types}
        </select>
      </div>
      {/* end of select type */}       
    

      {/* guests */}

      <div className="form-group">

        <label htmlFor="capacity">Guest</label>
        <select 
        name="capacity"
         id='capacity'
          value= {capacity}
         className='form-control'
         onChange={handleChange}         
         >
            {people}
        </select>
      </div>
      {/* end of guest*/}
          {/* price */}
      <div className="form-group">
        <label htmlFor="price"> room price ${price}</label>
       
        <input type="range"
        name='price'
        min={minPrice}
        max={maxPrice}
        id='price'
        value={price} 
        onChange={handleChange}
        className='form-control'
        /> 
      </div>
      {/* end of price */}

       <div className="form-group">
        <label htmlFor="size"> room size</label>       
        <input type="number"
        name='minSize'    
        id='size'
        value={minSize} 
        onChange={handleChange}
        className='size-input'
        /> 
         <input type="number"
        name='maxSize'     
        id='size'
        value={maxSize} 
        onChange={handleChange}
        className='size-input'
        />       
       
      </div>
       <div className="form-group">        
       <div className="single-extra">
         <input type="checkbox"
        name='breakfast'      
        id='breakfast'         
        onChange={handleChange}
        
         checked={breakfast}/> 
        <label htmlFor="breakfast">breakfast</label>
       </div>
       
    

              
       <div className="single-extra">
         <input type="checkbox"
        name='pets'      
        id='pets'         
        onChange={handleChange}
        
         checked={pets}/> 
        <label htmlFor="pets">pets</label>
       </div>

       
      </div>

  </form>
    

    </section>
       
    
  )
}
