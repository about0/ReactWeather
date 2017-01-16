import React from 'react';
import NavigationComponent from './Nav';

const Main = (props) => {
    return(
        <div>
            <NavigationComponent />
            <div className="row">
                <div className="column medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    )
};
export default Main;
