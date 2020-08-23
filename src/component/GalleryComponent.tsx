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

    handleClick = (e: any): void => {
        e.target.classList.toggle('image-clicked');
    }

    render() {
        const {images} = this.state;
        return (
            <div className="gallery" style={{backgroundImage: `url(${Background})`}}>
                    <div className="image-container">
                        {images.map((img, index) => {
                            return <img className='image-container-image' src={img} alt={`kepcske-${index}`} onClick={this.handleClick}/>
                        })}
                    </div>
                </div>
        );
    }
}

export default GalleryComponent;
