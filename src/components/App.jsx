import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="App min-h-screen">
      <div className="App__content container mx-auto p-4 text-center">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
