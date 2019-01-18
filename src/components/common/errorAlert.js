import React from "react";


const ErrorAlert = ({value}) => (
    <div>
        { value && 
        <div className="alert alert-danger" role="alert">
            {value}
            {/* <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
                <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
            </button> */}
        </div>
        }
    </div> 
);

export default ErrorAlert;