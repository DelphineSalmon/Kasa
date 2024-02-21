import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './displayer.scss'
import { useState } from 'react'

function Displayer({ about }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="containerdisplay">
            <h3 className="titledisplay">
                {about.title}
                <FontAwesomeIcon
                    className={
                        isOpen ? 'chevron arrow_down' : 'chevron arrow_up'
                    }
                    icon={faChevronDown}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </h3>

            <p className={isOpen ? 'descriptiondisplay' : 'descriptionhidden'}>
                {about.description}
            </p>
        </div>
    )
}
export default Displayer
