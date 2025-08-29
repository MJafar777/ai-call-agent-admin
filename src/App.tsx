import AppRoutes from "./routes";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
