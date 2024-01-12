// export default function TabButton({ children }) {
//     return <li><button>{children}</button></li>
// };

export default function TabButton({ label, onSelect, isSelected }) {
    // document.querySelector('button').addEventListener('click', () => {
    // });

    console.log("TabButton Component executing");

    return (
        <li>
            <button className={isSelected && 'active'} onClick={onSelect}>{label}</button>
        </li>
    )
};