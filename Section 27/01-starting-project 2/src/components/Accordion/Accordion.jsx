import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);
    if (!ctx) {
        throw new Error('AccordionItem must be used within an Accordion');
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null);

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    
    const contextValue = { 
        toggleItem,
        openItemId
    };

    return <AccordionContext.Provider value={contextValue}>
        <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
}