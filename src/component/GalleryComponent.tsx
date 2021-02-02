import React from 'react';
import '../style/gallery.css';
import Background from '../images/brickwall2.jpg';
import PictureComponent from "./PictureComponent";
import {IPicture} from "../common/interfaces";
import {examplePictures} from "../common/exampleData";
import ExpandedPictureComponent from "./ExpandedPicture";

export interface IGalleryComponentProps {

}

export interface IGalleryComponentState {
    images: IPicture[];
    selectedImage: {
        id: string | null;
        top: string | null;
        left: string | null;
        description: string | null;
        url: string | null;
        show: boolean;
    }
}

class GalleryComponent extends React.Component<IGalleryComponentProps, IGalleryComponentState> {
    constructor(props: IGalleryComponentProps) {
        super(props);

        this.state = {
            images: [],
            selectedImage: {
                id: null,
                top: null,
                left: null,
                url: null,
                description: null,
                show: false
            }
        }
        this.generateRows = this.generateRows.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resetExpanded = this.resetExpanded.bind(this);
    }

    componentDidMount() {
        this.setState({
            images: examplePictures,
        });
    }

    generateRow(elements: IPicture[]): JSX.Element {
        return (
            <div className="row">
                {elements.map((element) => {
                    return (<PictureComponent
                            clicked={false}
                            id={element.id}
                            source={element.source}
                            onClick={this.handleClick}
                            description={
                                element.description
                            }/>)
                })}
            </div>
        )
    }

    offset(el: any) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft - 30}
    }

    handleClick(e: any, id: string): void {
        const elem = e.target;
        const selectedImage = this.state.images.find(image => image.id === id);
        const imageOffset = this.offset(elem)
        if (selectedImage) {
            this.setState({
                selectedImage: {
                    id: selectedImage.id,
                    top: imageOffset.top,
                    left: `${imageOffset.left}`,
                    url: selectedImage.source,
                    description: selectedImage.description,
                    show: true,
                }
            }, () => {
                console.log('this.state.selectedImage: ', this.state.selectedImage);
            });
        }
    }

    // TODO: Dynamic row generation
    generateRows() {
        const {images} = this.state;
        const rows: JSX.Element[] = [];
        let iterator = 0;
        while (iterator < images.length) {
            if (iterator + 3 >= images.length) {
                rows.push(this.generateRow(images.slice(iterator, images.length + 1)));
                iterator += 4;
            } else {
                rows.push(this.generateRow(images.slice(iterator, iterator + 4)));
                iterator += 4;
            }
        }
        return rows;
    }

    resetExpanded() {
        this.setState({
            selectedImage: {
                id: null,
                top: null,
                left: null,
                url: null,
                description: null,
                show: false
            }
        })
    }

    render(): JSX.Element {
        const {selectedImage} = this.state;
        return (
            <div className="gallery" style={{backgroundImage: `url(${Background})`}}>
                    <div className="image-container">
                        {this.generateRows().map(image => image)}
                    </div>
                    <ExpandedPictureComponent picture={selectedImage} onClick={this.resetExpanded}/>
            </div>
        );
    }
}

export default GalleryComponent;
