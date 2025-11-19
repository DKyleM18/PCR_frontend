import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { signup, signin, checkToken } from "../utils/auth";
import { getItems, addItem, deleteItem, editUser } from "../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleSignInClick = () => {
    setActiveModal("signin");
  };

  const handleSignUpClick = () => {
    setActiveModal("signup");
  };

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleModalClose)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const handleSignUp = ({ name, email, password }) => {
    const makeRequest = () => {
      return signup({ name, email, password }).then(() =>
        handleSignIn({ email, password })
      );
    };
    handleSubmit(makeRequest);
  };

  const handleSignIn = ({ email, password }) => {
    const makeRequest = () => {
      return signin({ email, password })
        .then((res) => {
          setToken(res);
          setUserToken(res.token);
          return res.token;
        })
        .then((token) => {
          return checkToken(token);
        })
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        });
    };
    handleSubmit(makeRequest);
  };

  useEffect(() => {
    function handleCloseMethods(evt) {
      if (evt.key === "Escape" || evt.key === "esc" || evt.keyCode === 27) {
        handleModalClose();
      }
      if (evt.type === "click" && evt.target.classList.contains("modal")) {
        handleModalClose();
      }
    }

    if (activeModal !== "") {
      document.addEventListener("keydown", handleCloseMethods);
      document.addEventListener("click", handleCloseMethods);
    }

    return () => {
      document.removeEventListener("keydown", handleCloseMethods);
      document.removeEventListener("click", handleCloseMethods);
    };
  }, [activeModal]);

  return (
    <div className="App min-h-screen">
      <div className="App__content container mx-auto p-4 text-center">
        <Header
          isLoggedIn={isLoggedIn}
          handleSignIn={handleSignInClick}
          handleSignUp={handleSignUpClick}
          handleSignOut={handleSignOutClick}
        />
        <Main isLoggedIn={isLoggedIn} />
        <Footer />
      </div>
      <SignInModal
        onClose={handleModalClose}
        handleSignIn={handleSignIn}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        isLoading={isLoading}
      />
      <SignUpModal
        onClose={handleModalClose}
        handleSignUp={handleSignUp}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
