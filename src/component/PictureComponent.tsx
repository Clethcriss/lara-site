import React from 'react';

export interface IPictureComponentProps {
    id: string;
    source: string;
    description: string;
    onClick?: (e: any, id: string) => void;
    expanded?: boolean;
    clicked: boolean;
}

export interface IPictureComponentState {

}

class PictureComponent extends React.Component<IPictureComponentProps, IPictureComponentState> {
    constructor(props: IPictureComponentProps) {
        super(props);
    }

    handleClick = (e: any, id: string): void => {
        if (this.props.onClick) {
            this.props.onClick(e, id);
        }

        /*e.target.classList.toggle('image-clicked');
        const detailsElement = document.getElementById(`image-details-${id}`);
        if (detailsElement) {
            detailsElement.style.visibility = detailsElement.style.visibility === 'visible' ? 'hidden' : 'visible';
        }*/
    }

    render() {
        const {source, description, id} = this.props;
        return (
            <div className="image-entity">
                <img className={`image-container-image ${this.props.clicked ? 'image-clicked' : ''} ${this.props.expanded ? 'expanded' : ''}`} src={source} alt={`kepcske-${id}`} onClick={(e) => {
                    this.handleClick(e, id);
                }}/>
                <div className='image-details' id={`image-details-${id}`}>
                    {description}
                </div>
            </div>
        )
    }
}

export default PictureComponent;
