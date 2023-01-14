import "./sidebar.scss"
import LineAxisRoundedIcon from '@mui/icons-material/LineAxisRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import MoreTimeRoundedIcon from '@mui/icons-material/MoreTimeRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar= () => {
    return (
        <div className="sidebar"> 
            <div className="top"><span className="logo">The Shop Manager   </span>
            </div>
            <hr  />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <LineAxisRoundedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">List</p>
                    <li>
                        <PeopleOutlineRoundedIcon className="icon"/>
                        <span>Costumers</span>
                    </li>
                    <li>
                        <MoreTimeRoundedIcon className="icon"/>
                        <span>Work Board</span>
                    </li>
                    <li>
                        <InventoryRoundedIcon className="icon"/>
                        <span>Inventory</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <CalendarMonthOutlinedIcon className="icon"/>
                        <span>Scheldule</span>
                    </li>
                    <li>
                        <HealthAndSafetyOutlinedIcon className="icon"/>
                        <span>Inspection</span>
                    </li>
                    <li>
                        <SmsOutlinedIcon className="icon"/>
                        <span>Messages</span>
                    </li>
                    <li>
                        <AssessmentOutlinedIcon className="icon"/>
                        <span>Reports</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <PaidOutlinedIcon className="icon"/>
                        <span>Payment</span>
                    </li>
                    <p className="title">User</p>
                     <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">log</div>
        
        
        </div>
    )
}

export default Sidebar 