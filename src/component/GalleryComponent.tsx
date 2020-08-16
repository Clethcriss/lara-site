import React from 'react';
import '../style/gallery.css';

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
            <div className="gallery">
                <h1>Here will be the Gallery!</h1>
                {images.map((img, index) => {
                    return <img height='240px' width='180px' src={img} alt={`kepcske-${index}`}/>
                })}
            </div>
        );
    }
}

export default GalleryComponent;
