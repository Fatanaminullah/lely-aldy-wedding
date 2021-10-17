import React from "react"
import { scroller } from "react-scroll"
import Calendar from '../../assets/images/calendar.png'
import Diamond from '../../assets/images/diamond.png'
import Gallery from '../../assets/images/image-gallery.png'
import Location from '../../assets/images/placeholder.png'
import Protocol from '../../assets/images/prevention.png'

const arrayNavbar = [
    { src: Diamond, content: 'bride' },
    { src: Calendar, content: 'countdown' },
    { src: Gallery, content: 'gallery' },
    { src: Location, content: 'location' },
    { src: Protocol, content: 'protocol' }
]

const Navbar = () => {
    const handleClick = (content) => {
        scroller.scrollTo(content, {
            duration: 1000,
            delay: 0,
            smooth: true,
        });
    };
    return (
        <div className="navbar">
            <ul>
                {arrayNavbar.map((item, i) => (
                    <li className="nav-item" key={i} onClick={() => handleClick(item.content)}>
                        <img src={item.src} alt="" className="nav-icon" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar