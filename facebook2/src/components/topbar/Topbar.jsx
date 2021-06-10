import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
export default function Topbar(){

    return (
        <div className="topbarContainer">
            <div className="topbarLeft"> 
             <span className="logo">Facebook</span>
            </div>
            <div className="topbarCenter"> 
            <div className="searchbar">
                 <Search className="searchIcon"/>
                 <input placeholder="Search for friends, post or vedio" className="searchInput"/>

            </div>
            </div>
            <div className="topbarRight">
                <div className="topbar">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                 </div>
                   <div className="topbarIcons">
                     <div className="topbarIcons">
                         <Person/>
                         <span className="topbarIconBadge">2 </span>
                         </div> 
                         <div className="topbarIcons">
                         <Chat/>
                         <span className="topbarIconBadge">5 </span>
                         </div> 
                         <div className="topbarIcons">
                         <Notifications/>
                         <span className="topbarIconBadge">3 </span>
                         </div>  
                   </div>
                   <img src="/assets/dpp.jpg" alt="" className="topbarImg" />


            </div>
        </div>
    );
}