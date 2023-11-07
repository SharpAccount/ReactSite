import  React from "react";

function HOCHeader(Children) {
     return function() {
        return (
            <>
                <Children/>
            </>
        );
    };
}

export default HOCHeader;