import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomaPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import SportsPage from "./pages/SportsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path="/skills" element={SkillsPage}></Route>
      <Route path="/sports" element={SportsPage}></Route>
      <Route path="/educations" element={EducationPage}></Route>
    </Route>
  )
)


function App() {
  return <RouterProvider router={router}/>
}

export default App;
