import React, {Component} from "react";

function HOCHeader(Children) {
     return class extends Component {
        render() {
            return <Children {...this.props} />
        }
     }
}

export default HOCHeader;