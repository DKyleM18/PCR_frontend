export default function Main({ isLoggedIn }) {
  return isLoggedIn ? (
    <div></div>
  ) : (
    <div className="App__content container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Purrgatory Cat Rescue Inventory Management Page
      </h1>
      <p className="text-lg text-gray-700">
        Please Sign In or Sign Up to access the inventory management features.
      </p>
    </div>
  );
}
