import { Provider } from "react-redux";
import "./App.css";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage.js";
import { SearchList } from "./components/SearchList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchList />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
