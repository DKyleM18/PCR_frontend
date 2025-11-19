import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App min-h-screen">
      <div className="App__content container mx-auto p-4 text-center">
        <Header isLoggedIn={isLoggedIn} />
        <Main isLoggedIn={isLoggedIn} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
