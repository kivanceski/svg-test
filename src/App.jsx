import Icon from './Icon';

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
        justifyContent: 'center',
        fontSize: 30,
        height: '100vh',
      }}
    >
      <Icon size="400" stroke="#B79347" fill="#E9DFC8" text="#191919" />
    </div>
  );
}

export default App;
