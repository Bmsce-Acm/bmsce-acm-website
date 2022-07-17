import React from 'react'
import IMG1 from '../../Images/img1.jpg';
import IMG2 from '../../Images/img2.png';

const Events = () => {

    const allEvents = [
        {
            ename: "gfhdjskla",
            edate: "16/07/2022",
            image: IMG2,
            status: "Completed",
            description: "kharabhat"
        },
        {
            ename: "Aiml for sci",
            edate: "16/07/2022",
            image: IMG1,
            status: "Completed",
            description: "fhdjskaltyrueiwoqvbcmx,z"
        },
        {
            ename: "Aiml for cog",
            edate: "16/07/2022",
            image: IMG1,
            status: "Completed",
            description: "fhdjskaltyrueiwoqvbcmx,z"
        },
        {
            ename: "Aiml for sci",
            edate: "16/07/2022",
            image: IMG1,
            status: "Completed",
            description: "fhdjskaltyrueiwoqvbcmx,z"
        },
        {
            ename: "Aiml for sci",
            edate: "16/07/2022",
            image: IMG1,
            status: "Completed",
            description: "fhdjskaltyrueiwoqvbcmx,z"
        },
    ];
    return (
        <div className="events_main">
            <h1>EVENTS</h1>
            <div className="events_container">
                    {
                        allEvents.map((eve) => (
                            <div className="card">
                                <div className="imgBox">
                                    <img src={eve.image} />
                                    <img src={eve.image} />
                                </div>
                                <div className="details">
                                    <div className="content">
                                        <h2>{eve.ename}
                                            <br/>
                                            <span>{eve.description}</span>
                                        </h2>
                                        <div className="social-icons">
                                            <a href="/">
                                                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Events