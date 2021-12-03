import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            websites: [
                {
                    id: 0,
                    name: 'React-NuCampsite',
                    image: '/assets/images/nucamp-pic.jpeg',
                    elevation: 1233,
                    description: "A Fictitious Mock-E-Commerce site based on selling and reserving campsites."
                },
                {
                    id: 1,
                    name: 'Shamrock-Music',
                    image: '/assets/images/shamrock.jpeg',
                    elevation: 877,
                    description: "A Mock E-Commerce site based on music lessons, classes, and music education in general."
                },
                {
                    id: 2,
                    name: 'KPA-Alterations',
                    image: '/assets/images/kpa-alteration.jpeg',
                    elevation: 2901,
                    description: "A basic contact/display site for a local business in Downtown Athens."
                },
                {
                    id: 3,
                    name: 'Shop-It',
                    image: '/assets/images/e-commerce-pic.jpeg',
                    elevation: 42,
                    description: "A Mock E-commerce site based on arbitrary products."
                }
            ],
        };
    }

    render() {
        const directory = this.state.websites.map(website => {
            return(
                <div className="col">
                    <img src={website.image} alt={website.name} />
                    <h2>{website.name}</h2>
                    <p>{website.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;