// export default function TabButton({ children }) {
//     return <li><button>{children}</button></li>
// };

export default function TabButton({ label, onSelect }) {
    // document.querySelector('button').addEventListener('click', () => {
    // });
    return (
        <li>
            <button onClick={onSelect}>{label}</button>
        </li>
    )
};