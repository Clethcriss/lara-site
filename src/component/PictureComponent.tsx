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
    classNames: string[];
}

class PictureComponent extends React.Component<IPictureComponentProps, IPictureComponentState> {
    constructor(props: IPictureComponentProps) {
        super(props);
        this.state = {
            classNames: []
        }

        this.getClassNames = this.getClassNames.bind(this);
    }

    componentDidMount() {
        this.setState({
            classNames: [
                'image-container-image'
            ]
        }, () => {
            if (this.props.expanded) {
                setTimeout(() => {
                    this.setState({
                        classNames: [...this.state.classNames, 'image-clicked']
                    });
                });
            }
        })
    }

    handleClick = (e: any, id: string): void => {
        if (this.props.onClick) {
            this.props.onClick(e, id);
        }
    }

    getClassNames() {
        const {classNames} = this.state;
        let stringClassNames = '';
        classNames.forEach(className => stringClassNames += ` ${className}`);
        return stringClassNames;
    }

    render() {
        const {source, description, id} = this.props;
        const classNames = this.getClassNames();
        return (
            <div className="image-entity">
                <img className={`${classNames}`} src={source} alt={`kepcske-${id}`} onClick={(e) => {
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
