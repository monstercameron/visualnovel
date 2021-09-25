import { injectContext } from '../src/store/store';
import Start from '../src/scene/start';
import './main.css'
import './animations.css'

function App() {
  return (
    <div className="app">
      <Start/>
    </div>
  );
}

export default injectContext(App);
