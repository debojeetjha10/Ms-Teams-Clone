import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends React.Component{
    items = [
        {
            title:'About us',
            href:'/aboutus',
            className:'Footer-list-item'
        },
        {
            title:'contact us',
            href:'/contactus',
            className:'Footer-list-item'
        }
    ]
    render(){
        return(
            <div className = 'Footer'>
                <ul className= 'Footer-list'>
                    {this.items.map(item =>{
                        return(
                            <Link to={item.href}>
                                <li className={item.className}><a href={item.href} className = "Footer-links">{item.title}</a></li>
                             </Link>
                        )
                    })
                    
                    }
                </ul>

            </div>


        )
    }
}

export default Footer
