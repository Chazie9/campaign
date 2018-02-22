import React from 'react';
import '../css/campaign_header.css';
import userImg from '../assets/userImg.jpg';

const CampaignHeader = (props) => (
    <div className="user-and-title-info">
        <div className="creatorInfo">
            <div className="creator"><img src={userImg} alt={"user image"} /></div>
            <div className="creator">by: Chas Harring</div>
            <div className="creator">3 projects</div>
            <div><button>Follow</button></div>
        </div>
        <div className="title-and-tagline-container">
            <div className="title-and-tagline">
                <h1>the title has been changed</h1>
                <h4>someother stuff like a tag line can go here</h4>
            </div>
        </div>
    </div>
)

export default CampaignHeader;