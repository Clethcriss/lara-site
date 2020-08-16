import React from 'react';

export interface IHomeComponentProps {

}

export interface IHomeComponentState {

}

class HomeComponent extends React.Component<IHomeComponentProps, IHomeComponentState> {
    constructor(props: IHomeComponentProps) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    }
}

export default HomeComponent;
