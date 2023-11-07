import React, {Component} from "react";

function HOCHeader(Children) {
     return class extends Component {
        render() {
            return <Children />
        }
     }
}

export default HOCHeader;