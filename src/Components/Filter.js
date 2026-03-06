import React from 'react';

function Filter({ filterData, catagory, setCatagory }) {

    function filterHandler(title) {
        setCatagory(title);
    }

    return (
        <div className="filter w-11/12 mx-auto flex flex-wrap justify-center items-center max-w-max space-x-4 gap-y-4 py-4">
            {
                filterData.map((data) => (
                    <button
                        className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-70 border-2 transition-all duration-300
                        ${catagory === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
                        key={data.id}
                        onClick={() => filterHandler(data.title)}
                    >
                        {data.title}
                    </button>
                ))
            }
        </div>
    );
}

export default Filter;