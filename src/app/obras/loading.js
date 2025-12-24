import React from 'react'
import books from '../obras/data/books.js'

const loading = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-10">
                {books.map((_, i) => (
                    <div key={i} className="w-[1000px] bg-white p-4 mb-10 animate-pulse">
                        <div className="h-8 bg-neutral-200 rounded mb-6 w-2/3 mx-auto"></div>
                        <div className="flex justify-center items-center gap-6">
                            <div className="w-[200px] h-[300px] bg-neutral-200 rounded shadow"></div>
                            <div className="flex-1 space-y-4">
                                <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                                <div className="h-4 bg-neutral-200 rounded w-full"></div>
                                <div className="h-4 bg-neutral-200 rounded w-4/6"></div>
                                <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <div className="h-10 w-32 bg-neutral-200 rounded"></div>
                        </div>
                        <div className="w-full h-[1px] bg-neutral-200 mt-6"></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default loading