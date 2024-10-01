import { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
    const [searchTerm, setSearchTerm] = useState('');

    // console.log(items);
    
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    const searchResults = items.filter((item) => 
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleSearch} />
            <ul>
                {searchResults.map((item, index) => (
                    <li key={itemKeyFn(item)}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}