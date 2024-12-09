The solution is to either move the code that depends on the parameters into a component within the route's scope or to pass the parameters explicitly using the route's location prop to the component that needs the parameter.

Here's how you can solve the issue by passing the parameter using location prop:
```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const myParam = params.get('myParam');

  return (
    <div>
      <p>My Param: {myParam}</p>
    </div>
  );
}

function App() {
    return (
      <div>
        <Routes>
          <Route path="/myroute/:myParam" element={<MyComponent/>}/>
        </Routes>
      </div>
    );
}
```