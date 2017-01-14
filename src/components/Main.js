import React from 'react';
import Navigation from './Nav';

const Main = (props) => {
    return(
        <div>
            <Navigation />
            {props.children}
        </div>
    )
};
export default Main;

// export default class Main extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Navigation />
//                 {this.props.children}
//
//             </div>
//         );
//     }
// }