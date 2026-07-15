// import { useState } from "react";
// import StudentCard from "./StudentCard";

// function App() {
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       name: "Abhay",
//       age:20,
//     },
//     {
//       id: 2,
//       name: "Mohit",
//       age:21,
//     },
//     {
//       id: 3,
//       name: "Raaj",
//       age:20,
//     },
//     {
//       id: 4,
//       name: "Priti",
//       age:21,
//     },
//     {
//       id: 5,
//       name: "Janvi",
//       age:21,
//     },
//   ]);

//   return <div className="card-cont">
//   {
//     students.map((student)=>{
//       return <StudentCard student={student} />
//     })
//   }
//   </div>;
// }

// export default App;


// import { useState } from "react";
// import MainPage from "./MainPage";

// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className={`app ${theme}`}>
//       <button className="toggle-btn" onClick={toggleTheme}>
//         {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//       </button>

//       <MainPage theme={theme} />
//     </div>
//   );
// }

// export default App;



import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
   
    
    <Routes>
      <Route path="/" Component={MainLayout}>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/product/:productId" Component={SingleProduct} />
        <Route path="/product/:productId/:reviewId" Component={SingleProduct} />
        <Route path="*" Component={PageNotFound} />   
      </Route>
    </Routes>
  );
}

export default App; 