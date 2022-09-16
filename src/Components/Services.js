import React, { Component } from 'react'
import Title from '../Components/Titles'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
  State = {
    Services:[
        {
            icon: <FaCocktail/>,
            title: "free cocktails",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptatibus similique repudiandae aperiam tempora voluptates nemo deserunt. Nam, quasi facere!'            
        },
         {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptatibus similique repudiandae aperiam tempora voluptates nemo deserunt. Nam, quasi facere!'            
        },
         {
            icon: <FaShuttleVan/>,
            title: "free Shuttle",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptatibus similique repudiandae aperiam tempora voluptates nemo deserunt. Nam, quasi facere!'            
        },
         {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptatibus similique repudiandae aperiam tempora voluptates nemo deserunt. Nam, quasi facere!'            
        }
    ]
  }
  
    render() {
    return (

        <>
         <section className='services'>
       <Title title = 'Services'/>
       <div className="services-center">

        {this.State.Services.map((item,index)=>{
            return <article key={index} className='service'>
               <span>{item.icon}</span>
               <h6>{item.title}</h6>
               <p>{item.info}</p>

            </article>
        })}
        </div> 
         </section>
       
         
      
        </>     
    )
  }
}
