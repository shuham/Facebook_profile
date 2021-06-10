import "./profile.css"

import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

export default function Profile(){
    return(
        <>
        
        <Topbar/>
        <div className="profile">
            
        <Sidebar/>
        <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">

            
            <img className="profileCoverImg" src="assets/cover.jpg"alt=""/>
            <img className="profileUserImg" src="assets/shubh.jpeg "alt=""/>
            </div>
        </div>
        <div className="profileInfo">
           <h4 className="profileInfoName">Shubham kumar</h4>
           <span className="profileInfoDesc">Software developer</span>
        </div>
        </div>
        <div className="profileRightBottom"></div>

        </div>

        <Feed/>
        <Rightbar/>
       
       </>
    )
}