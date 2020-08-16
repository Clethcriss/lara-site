import React from 'react';

export interface IAboutComponentProps {

}

export interface IAboutComponentState {

}

class AboutComponent extends React.Component<IAboutComponentProps, IAboutComponentState> {
    constructor(props: IAboutComponentProps) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Something about Lara!</h1>
            </div>
        );
    }
}

export default AboutComponent;