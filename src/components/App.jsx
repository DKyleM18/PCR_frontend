import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleSignInClick = () => {
    setActiveModal("signin");
  };

  return (
    <div className="App min-h-screen">
      <div className="App__content container mx-auto p-4 text-center">
        <Header isLoggedIn={isLoggedIn} handleSignIn={handleSignInClick} />
        <Main isLoggedIn={isLoggedIn} />
        <Footer />
      </div>
      <SignInModal
        onClose={() => setActiveModal("")}
        handleSignIn={() => setIsLoggedIn(true)}
        activeModal={activeModal}
        isLoading={isLoading}
      />
      <SignUpModal
        onClose={() => setActiveModal("")}
        handleSignUp={() => setIsLoggedIn(true)}
        activeModal={activeModal}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
