import ReactDOM from 'react-dom/client';

function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function handleMouseOver() {
    console.log("I was hovered!")
  }

  return (
    <main className="container">
      <img
        onMouseOver={handleMouseOver}
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
