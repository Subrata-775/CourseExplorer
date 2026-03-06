

import React from 'react'

function Filter({ filterData }) {
    return (

        <div className='filter'>
            {
                filterData.map((data) => {
                    return <button>
                        {data.title}
                    </button>
                })
            }

        </div>
    )
}

export default Filter