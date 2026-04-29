import { Routes, Route } from 'react-router-dom';
import './style.css';

function News() {
    return (
        <p><h1>News</h1></p>
    )
}

function About() {
    return (
        <p><h1>"Южный федеральный университет"</h1></p>
    )
}

function Contacts() {
    return (
        <p><h1>8 (500) 783- 55 - 153</h1></p>
    )
}

export function Main(){
    return (
    <div class="main">
       <div class="main_container">
<section class="flex-center"><img src="https://img.freepik.com/premium-photo/wooden-cottage-winter-fairytale-snow-forest_272999-1305.jpg" width={200} alt="zaimka"/></section>
<article class="flex-center">
    <Routes>
    <Route path='/news' element={<News />} />
    <Route path='/about' element={<About />} />
    <Route path='/contacts' element={<Contacts />} />
    <Route path='*' element={<h3>Некорректная ссылка</h3>} />
    </Routes>
</article>
<aside class="flex-center">Nadja Guzenko Alekseevna</aside>
       </div>
       </div>
    )
}

export default Main;