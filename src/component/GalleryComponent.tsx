import React from 'react';
import '../style/gallery.css';
import Background from '../images/brickwall2.jpg';

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

    handleClick = (e: any, detailsIndex: number): void => {
        e.target.classList.toggle('image-clicked');
        const detailsElement = document.getElementById(`image-details-${detailsIndex}`);
        if (detailsElement) {
            detailsElement.style.visibility = detailsElement.style.visibility === 'visible' ? 'hidden' : 'visible';
        }
    }

    render() {
        const {images} = this.state;
        return (
            <div className="gallery" style={{backgroundImage: `url(${Background})`}}>
                    <div className="image-container">
                        {images.map((img, index) => {
                            return (
                                <div>
                                    <img className='image-container-image' src={img} alt={`kepcske-${index}`} onClick={(e) => {
                                        this.handleClick(e, index);
                                    }}/>
                                    <div className='image-details' id={`image-details-${index}`}>
                                        <span>Hablaty hablaty</span>
                                        <span>Valami tok erdes dolog</span>
                                        <span>500x400</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
        );
    }
}

export default GalleryComponent;
