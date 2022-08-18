import React from "react";
import avatar from '../images/avatar.png';

const Advantages = ({ styles }) => {

    return (<section className={`wrapper ${styles.wrapper}`}>
        <div className={`title-and-description ${styles.titleAndDescription}`}>
            <h1>
                Enable rock-solid uploads at lightspeed
            </h1>
            <p>
                Our uploading API rests on a geographically distributed network of servers. Like a CDN in reverse, the API
                makes sure uploads always go the fastest route possible. The service won’t skip a beat with huge files,
                multiple uploads, or spotty connections.
            </p>
        </div>

        <div className={`features ${styles.features}`}>
            <ul>
                <li> Accelerated uploading </li>
                <li> Uploads from URL </li>
                <li> Malware protection </li>
                <li> Signed uploads </li>
                <li> Platform-side MIME-type filtering </li>
                <li> Up to 5 TB file size </li>
                <li> Accelerated uploading </li>
                <li> Uploads from URL </li>
                <li> Malware protection </li>
                <li> Signed uploads </li>
                <li> Platform-side MIME-type filtering </li>
                <li> Up to 5 TB file size </li>
            </ul>
        </div>

        <div className={`media ${styles.media ?? ''}`}>
            <figure className="avatar">
                <img src={avatar} alt="User avatar" />
            </figure>

            <div className={`media-content ${styles.mediaContent}`}>
                In-house file infrastructure? No thank you.
            </div>
        </div>
    </section>)
}

export default Advantages