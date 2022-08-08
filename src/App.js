import {MainPage} from "./pages/main_page/MainPage";
import {Header} from "./pages/common/header/Header";
import {Footer} from "./pages/common/footer/Footer";
import {BrowserRouter, HashRouter, Route, Routes,} from "react-router-dom";
import {NotFoundPage} from "./pages/not_found_page/NotFoundPage";
import {AboutPage} from "./pages/about_page/AboutPage";
import {FaqPage} from "./pages/faq_page/FaqPage";
import {useEffect} from "react";
import {FixedLeftBlock} from "./pages/common/fixed_block/FixedLeftBlock";
import data from "./dataAboutUsPage.json";

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
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/faq" element={<FaqPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
        ;
}
