import Icon from './Icon';
import AccountIcon from './AccountIcon';
import AccountFill from './AccountFill';

const defaults = {
  stroke: '#B79347',
  fill: '#E9DFC8',
  text: '#191919',
};

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
      }}
    >
      <AccountFill size={200} fill="blue" />
      <Icon size="200" stroke="#B79347" fill="#E9DFC8" text="#191919" />
      <AccountIcon size="200" stroke="red" />
    </div>
  );
}

export default App;
