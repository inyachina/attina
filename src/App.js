import {MainPage} from "./pages/main_page/MainPage";
import {Header} from "./pages/common/header/Header";
import {Footer} from "./pages/common/footer/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {NotFoundPage} from "./pages/not_found_page/NotFoundPage";
import {FaqPage} from "./pages/faq_page/FaqPage";
import {AboutPage} from "./pages/about_page/AboutPage";
import {PolicyPage} from "./pages/policy_page/PolicyPage";
import {TermsPage} from "./pages/terms_page/TermsPage";
import React from "react";

export const App = () => {

    // useEffect(()=>{
    //     let prevScrollpos = window.pageYOffset;
    //     window.onscroll = function() {
    //         const currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             document.getElementById("header").style.top = "0";
    //         } else {
    //             document.getElementById("header").style.top = "-100px";
    //         }
    //         prevScrollpos = currentScrollPos;
    //     }
    // })
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/faq" element={<FaqPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/privacy" element={<PolicyPage/>}/>
                    <Route path="/terms" element={<TermsPage/>}/>
                </Routes>
            <Footer/>
        </Router>
    );
}
