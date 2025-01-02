```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some other code that depends on the navigation
    doSomething(); 
  };

  const doSomething = () => {
    console.log('Navigating...');
    // Some code that should be executed after navigation
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```