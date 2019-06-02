import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
        {
            icon: <FaCocktail/>,
            title: "Free cocktail",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, labore?'
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, labore?'
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free shuttle",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, labore?'
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, labore?'
        }
    ]
  }
  

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
             return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
             )

          })}
        </div>
      </section>
    )
  }
}
export default Services;
