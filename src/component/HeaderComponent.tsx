import React from 'react';
import {navigate} from "../common/functions";


export interface IHeaderComponentProps {

}

export interface IHeaderComponentState {

}

class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState>{
    constructor(props: IHeaderComponentState) {
        super(props);

        this.state = {

        }
    }

    clickHandler(path: string): void {
        navigate(`/${path}`);
    }

    render() {

        return (
            <div>
                <nav>


                            <span onClick={() => this.clickHandler('home')}>Home</span>


                            <span onClick={() => this.clickHandler('about')}>About</span>


                            <span onClick={() => this.clickHandler('gallery')}>Gallery</span>


                </nav>
            </div>
        );
    }
}

export default HeaderComponent;
