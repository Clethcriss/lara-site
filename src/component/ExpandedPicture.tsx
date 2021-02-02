import React from 'react';
import PictureComponent from "./PictureComponent";

export interface IExpandedPictureComponentProps {
    onClick: () => void;
    picture: {
        id: string | null;
        url: string | null;
        top: string | null;
        left: string | null;
        description: string | null;
        show: boolean;
    }
}

class ExpandedPictureComponent extends React.Component<IExpandedPictureComponentProps, any> {

    constructor(props: IExpandedPictureComponentProps) {
        super(props);
    }

    render() {
        const {id, url, top, left, description, show} = this.props.picture;
        return (
            <div style={{top: `${top}px`, left: `${left}px`, position: "absolute", zIndex: 1}} className={`expanded-image-${show ? 'show' : 'hidden'}`}>
                {(show) && (
                    <PictureComponent
                        clicked={true}
                        onClick={this.props.onClick}
                        id={id ? id : ''}
                        source={url ? url : ''}
                        expanded={true}
                        description={description ? description : ''}/>)}
            </div>);

    }
}

export default ExpandedPictureComponent;
