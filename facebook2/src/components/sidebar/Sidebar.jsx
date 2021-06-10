import "./sidebar.css"
import {HelpOutline, RssFeed, School, WorkOutline, Event, Chat, PlayCircleFilled, Group

} from "@material-ui/icons"
export default function Sidebar(){
     return(
         <div className="sidebar">
             <div className="sidebarWrapper">
                 <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                        </li> 
                        <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                        </li> 
                        <li className="sidebarListItem">
                        < PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                        </li> 
                        <li className="sidebarListItem">
                        < Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Group</span>
                        </li> 
                        <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                        </li> 
                        <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                        </li> 
                        <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                        </li> 
                        <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Cources</span>
                        </li> 
                        <button className="sidebarButton">Show More</button>
                        <hr className="sidebarHr"/>
                        <ul className="sidebarFriendList">
                            <li className="sidebarFriend">
                                <img className="sidebarFriendImg" src="/assets/person.jpeg" alt=""/>
                                <span className="sidebarFriendName">Sachin Tendulkar</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className="sidebarFriendImg" src="/assets/person.jpeg" alt=""/>
                                <span className="sidebarFriendName">Virat Kholi</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className="sidebarFriendImg" src="/assets/person.jpeg" alt=""/>
                                <span className="sidebarFriendName">MS Dhoni</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className="sidebarFriendImg" src="/assets/person.jpeg" alt=""/>
                                <span className="sidebarFriendName">Hardik Pandya</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className="sidebarFriendImg" src="/assets/person.jpeg" alt=""/>
                                <span className="sidebarFriendName">Rohit Sharma</span>
                            </li>
                            <li className="sidebarFriend">
                                <img className="sidebarFriendImg" src="/assets/person.jpeg" alt=""/>
                                <span className="sidebarFriendName">KL Rahul</span>
                            </li>
                        </ul>
                 </ul>
             </div>
         </div>
     );

}