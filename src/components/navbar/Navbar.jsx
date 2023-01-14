import "./navbar.scss"
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';

const Navbar= () => {
    return (
        <div className="navbar"> 
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search Costumer's Name" />
                    <ManageSearchRoundedIcon/>
                </div>

            </div>
        </div>
    );
};

export default Navbar  