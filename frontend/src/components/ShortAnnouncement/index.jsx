import { FaRegBell } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";

export function ShortAnnouncement(props) {
    return (
        <div className='shortAnnouncement'>
            <FaRegBell style={{ height: '30px', width: '30px', margin: '5px 10px' }} />
            <strong>Announcement: {props.announcement}</strong>
            <TbHandClick className='handClickIcon' />
        </div>
    )
}