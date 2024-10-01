*511:*

**Compound Elements** 
Compound Elements are elements that are made up of other elements. They are used to group elements together and apply the same style to them. For example, a div element is a compound element that can contain other elements.

for example with `<select>` and `<option>`:
        
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

**Render Props**
Render props is a technique for sharing code between React components using a prop whose value is a function. This allows you to pass a function as a prop to a component and have that component render the result of calling that function.

for example:
  
  ```jsx
  function App() {
    return (
      <div>
        <Greeting render={(name) => <h1>Hello {name}</h1>} />
      </div>
    );
  }


