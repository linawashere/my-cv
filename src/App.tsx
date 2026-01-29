import './App.css'
import casesData from './assets/data/cases';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';
import HomePage from './pages/HomePage';
import CasesPage from './pages/CasesPage';
import NotFoundPage from './pages/NotFoundPage';
import CaseDetailPage from './pages/CaseDetailPage';

function App() {
  const featuredCases = casesData.slice(0, 4);
  return (
    // <>
    //   <Header></Header>
    //   <div className="container">
    //     {/* <Routes>
    //       <Route path="/cases" element={<CasesPage />} />
    //       <Route path="/cases/:id" element={<CaseStudyPage />} />
    //     </Routes> */}
    //     <main>
    //       <div className="profile">
    //         <div className="main-photo">
    //           <img src="./images/photo.jpg" alt="my photo" />
    //         </div>
    //         <div className="intro">
    //           <h1>Grigorovich Polina</h1>
    //           <h2>Frontend Developer</h2>
    //           <ul className="contacts">
    //             <li>
    //               <a href="https://github.com/linawashere">
    //                 github.com/linawashere
    //               </a>
    //             </li>
    //             <li>
    //               <a href="alllrrw@gmail.com">
    //                 alllrrw@gmail.com
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://t.me/linnawashere">
    //                 tg: linnawashere
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://www.linkedin.com/in/%D0%BF%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B3%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87-b8a8873a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
    //                 LinkedIn
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <section className="story">
    //         <h3>My Story</h3>
    //         <p>
    //           Hi! My name is Polina Grigorovich. My story as a frontend developer begins in 2016 during computer
    //           science classes, when I created my first project and fell in love with this activity. I always
    //           enjoyed feeling like an "expert" in this field, I always loved
    //           studying this field. Nothing compares to "wow, your project is so cool", with high scores on
    //           courses, with requests for advice from friends. I want to become a real professional in my field!
    //         </p>
    //       </section>
    //       <CaseStudiesCarousel cases={featuredCases}></CaseStudiesCarousel>
    //       <div className="about">
    //         <Experience />
    //         <Skills />
    //       </div>
    //     </main>
    //   </div>
    //   <Footer></Footer>
    // </>
     <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="cases/:id" element={<CaseDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
