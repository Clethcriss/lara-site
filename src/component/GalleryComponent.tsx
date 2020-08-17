import React from 'react';
import '../style/gallery.css';
import Background from '../images/brickwall.jpg';

export interface IGalleryComponentProps {

}

export interface IGalleryComponentState {
    images: string[];
}

class GalleryComponent extends React.Component<IGalleryComponentProps, IGalleryComponentState> {
    constructor(props: IGalleryComponentProps) {
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.setState({
            images: ['images/chihiro.jpg', 'images/kovacs.jpg', 'images/kutyi.jpg']
        });

    }

    render() {
        const {images} = this.state;
        return (
            <div className="gallery" style={{backgroundImage: `url(${Background})`}}>
                <h1>Here will be the Gallery!</h1>
                <div className="dumb">
                    <div className="image-container">
                        {images.map((img, index) => {
                            return <img src={img} alt={`kepcske-${index}`}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryComponent;
