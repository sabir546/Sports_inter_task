
import { ThemeProvider } from "./components/ContextNav/ThemeContext";

import CollectionsCard from "./components/CardContent/CollectionsCard";
import Footer from "./components/Footer/Footer";
import Nav from "./components/ContextNav/Nav";
import MainCard from "./components/CardContent/MainCard";

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="App">
        <Nav />
        <MainCard />
        <CollectionsCard/>
        <Footer />
       
      </div>
    </ThemeProvider>
  );
}

export default App;
