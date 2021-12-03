import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedWebsite: null
        };
    }

    onWebsiteSelect(website) {
        this.setState({selectedWebsite: website});
    }

    renderSelectedWebsite(website) {
        if(website) {
            return(
                <Card className="text-center">
                    <CardImg top src={website.image} alt={website.name} />
                    <CardBody>
                        <CardTitle>{website.name}</CardTitle>
                        <CardText>{website.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />
    }

    render() {
        const directory = this.props.websites.map(website => {
            return(
                <div key={website.id} className="col-md-5 m-1 mt-5 text-align-center">
                    <Card onClick={() => this.onWebsiteSelect(website)}>
                        <CardImg width="100%" src={website.image} alt={website.name} />
                        <CardImgOverlay>
                            <CardTitle className="text-center">{website.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="col-md-5 m-1">
                    {this.renderSelectedWebsite(this.state.selectedWebsite)}
                </div>
            </div>
        );
    }
}

export default Directory;