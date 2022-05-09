import React, {useState} from 'react'
import AddEvent from '../components/AddEvent'
import AddItem from './AddItem';


const Form = () => {
    const [currentPage, setPage] = useState(1);
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);



    return(
        <div>
        
            {currentPage === 1 && (
                <AddEvent/>
            )}
            {currentPage === 2 && (
                <AddItem  />
            )}

            <div>
                <button onClick={prevPage}>back</button>
                <button onClick={nextPage}>Next</button>
            </div>

        </div>
    )
}

export default Form;