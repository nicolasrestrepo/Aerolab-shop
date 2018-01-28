import React from 'react';
import PropTypes from 'prop-types';


function Content(props){
    return(
        <div>
            {props.body}
        </div>
    )
}


Content.propTypes = {
    body: PropTypes.object.isRequired,
}

export default Content;
