import "./navbar.scss"
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AvatarI from './avatar.png'
const Navbar= () => {
    return (
        <div className="navbar"> 
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search Costumer's Name" />
                    <ManageSearchRoundedIcon className="lookup"/>
                </div>
                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon/>
                    </div>
                    <div className="item">    
                        <NotificationsOutlinedIcon/>
                    </div>
                    <div className="item">    
                    <img src={AvatarI} className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar  