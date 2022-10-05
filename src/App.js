import NavBar from "./components/NavBar";
import UserData from "./components/UserData";
function App() {
  return (
    <>
      <div className="w-100 flex justify-center mx-auto px-4">
        <div className="container">
          <NavBar />
          <UserData />
        </div>
      </div>
    </>
  );
}

export default App;