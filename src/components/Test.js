import { useState } from "react";
const Test = () => {
    const [show, toggleShow] = useState(true)
    return(
        <div>
            <button onClick={() => toggleShow(!show)}>toggle: {show ? 'show' : 'hide'} </button>
            {show && <div>Hi there</div>}
        </div>
    )
}

export default Test;

// const [editShow, setEditShow] = React.useState(false);
// <Button onClick={() => setEditShow(!editShow)}>Edit</Button>
// {editShow && <AddEvent />}