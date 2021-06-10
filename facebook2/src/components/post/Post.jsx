import "./post.css"
import {MoreVert} from "@material-ui/icons"
export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/dpp.jpg" alt="" />
                         <span className="postUsername">shubham kr</span>
                         <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                        </div> 
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! its my first post :)</span>
                    <img className="postImg"src="/assets/nature_.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon"src="/assets/like.png" alt=""/>
                        <img className="likeIcon"src="/assets/heart.png" alt=""/>
                    <span className="postLikeCounter">35 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">3 comments</span>
                    </div>
                </div>
            </div>
           
        </div>
    )
}