export default function Button({ children, textOnly, className, ...props }) {
    let cssClasses = textOnly ? 'button-text' : 'button';
    cssClasses += className ? ` ${className}` : '';
    return (
        <button {...props} className={cssClasses} >
            {children}
        </button>
    );
}