```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    const routeChangeComplete = router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.push('/another-page');
  };

  const handleRouteChangeComplete = () => {
    router.events.off('routeChangeComplete', handleRouteChangeComplete);
    doSomething();
  };

  const doSomething = () => {
    console.log('Navigating... (after navigation)');
    // Code that now safely executes after navigation
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```