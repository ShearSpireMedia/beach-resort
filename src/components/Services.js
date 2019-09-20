import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services:[
                {icon:<FaCocktail />,
                title:"free cocktails",
                info:"Lorem ipsum dolor site amet consectetur adipisicing elit. Magni, corporis!"},
                {icon:<FaHiking />,
                    title:"Endless Hiking",
                    info:"Lorem ipsum dolor site amet consectetur adipisicing elit. Magni, corporis!"},
                {icon:<FaShuttleVan />,
                    title:"Free shuttle",
                    info:"Lorem ipsum dolor site amet consectetur adipisicing elit. Magni, corporis!"},
                {icon:<FaBeer />,
                    title:"Strongest beer",
                    info:"Lorem ipsum dolor site amet consectetur adipisicing elit. Magni, corporis!"}
            ]
        };
    }

    render() {
        return (
            <div>
                <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        }

                    )}
                </div>
                </section>
            </div>
        );
    }
}

export default Services;