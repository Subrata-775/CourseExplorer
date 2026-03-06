

import React from 'react'

function Filter({ filterData }) {
    return (

        <div className='filter'>
            {
                filterData.map((data) => {
                    return <button key={data.id}>
                        {data.title}
                    </button>
                })
            }

        </div>
    )
}

export default Filter