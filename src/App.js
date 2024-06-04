
const App = () => {
  const name ="Ak";
  const isNameShowing = true;
  return (
    <div className="App">
        <h1>Hello {isNameShowing ? name : 'Null'}</h1>

    </div>
  );
}

export default App;
