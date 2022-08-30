import React from "react";

const Header = () => {
    return(
        <>
            {/* Header */}
            <header className="w3-container w3-center w3-padding-32 menu" >
                <nav>
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="/about">О нас</a>
                        </li>
                        <li>
                            <a href="/form">Обратная связь</a>
                        </li>
                        <li>
                            <a href="/AllPosts">Все посты</a>
                        </li>
                        <li>
                            <a href="/AllTags">Все теги</a>
                        </li>
                        <li>
                            <a href="/PopularPost">Все популярные посты</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;