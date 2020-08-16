import React from 'react';

export interface IGalleryComponentProps {

}

export interface IGalleryComponentState {

}

class GalleryComponent extends React.Component<IGalleryComponentProps, IGalleryComponentState> {
    constructor(props: IGalleryComponentProps) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Here will be the Gallery!</h1>
            </div>
        );
    }
}

export default GalleryComponent;
