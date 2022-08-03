import {MainPage} from "./pages/main_page/MainPage";
import {Header} from "./pages/common/header/Header";
import {Footer} from "./pages/common/footer/Footer";
import {HashRouter, Route, Routes,} from "react-router-dom";
import {NotFoundPage} from "./pages/not_found_page/NotFoundPage";
import {AboutPage} from "./pages/about_page/AboutPage";
import {FaqPage} from "./pages/faq_page/FaqPage";

export const App = () => {
    return (
        <>
            <Header/>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="../about" element={<AboutPage/>}/>
                    <Route path="../faq" element={<FaqPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </HashRouter>
            <Footer/>
        </>
    )
        ;
}
