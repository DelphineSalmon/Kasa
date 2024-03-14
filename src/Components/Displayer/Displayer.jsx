import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './displayer.scss'
import { useState } from 'react'

function Displayer({ title, description }) {
    const [isOpen, setIsOpen] = useState()
    let formatting = description

    if (typeof description === 'object') {
        formatting = description.map((equip, index) => (
            <li className="listdisplayer" key={index}>
                {equip}
            </li>
        ))
    }
    return (
        <div className="containerdisplay">
            <h3 className="titledisplay">
                {title}
                <FontAwesomeIcon
                    className={
                        isOpen ? 'chevron arrow_down' : 'chevron arrow_up'
                    }
                    icon={faChevronDown}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </h3>

            <p
                className={
                    isOpen
                        ? 'description descriptiondisplay'
                        : isOpen === undefined
                        ? 'descriptionclose'
                        : 'description descriptionhidden'
                }
            >
                {formatting}
            </p>
        </div>
    )
}
export default Displayer
