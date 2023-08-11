import React from "react";
import { ReactDOM } from "react";

export const SearchField = ({HandleState}) => (
    <div className="flex justify-center items-center mb-[20px]">
        <input
            className="border border-black p-[7px] outline-none rounded"
            type="search"
            placeholder="Search Monster"
            onChange={ (e) => {
              HandleState(e)
            }}
        />
    </div>
)