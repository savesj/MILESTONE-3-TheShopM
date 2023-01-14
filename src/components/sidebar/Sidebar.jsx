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
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Sidebar= () => {
    return (
        <div className="sidebar"> 
            <div className="top"><span className="logo">The Shop Manager   </span>
            </div>
            <hr  />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <LineAxisRoundedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
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
                    <p className="title">USEFUL</p>
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
                    <p className="title">SERVICE</p>
                    <li>
                        <PaidOutlinedIcon className="icon"/>
                        <span>Payment</span>
                    </li>
                    <p className="title">USER</p>
                     <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                    <p className="title">SUPPORT</p>
                     <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <HelpOutlineRoundedIcon className="icon"/>
                        <span>Help</span>
                    </li>

                    
                </ul>
            </div>
            <div className="bottom">
                <div className="minimize">
                    <ArrowBackRoundedIcon/>
                </div>
            </div>
        
        
        </div>
    );
};

export default Sidebar 