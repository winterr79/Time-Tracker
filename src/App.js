import Header from "./components/Header.js";
// import ErrorBoundary from "./components/ErrorBoundary.js";

function App() {
  // const name = "Harish";
  // const x = 0;
  return (
    <div className="container">
      {/* <Header title = "Hello" /> */}
      <Header title = {1} />
      {/* <ErrorBoundary fallback={<h2>Header failed to load</h2>}>
        <Header />
      </ErrorBoundary> */}
      {/* <h1>Hello From React</h1> */}
      {/* <h2>Hello {name} {x ? "How are you!" : "Go to hell"}</h2> */}
    </div>
    // <>
    //   <h1>Hello From React</h1>
    //   <h2>Hello</h2>
    // </>
  );
}

export default App;
