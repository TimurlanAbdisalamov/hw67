import React, { useState, useEffect } from 'react';
import './App.css'; // Подключаем стили

const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchByBody, setSearchByBody] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    // Получаем данные с API
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setIsLoading(false); // Прелоадер отключается
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = () => {
    if (searchByBody) {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Posts Search</h1>
        <div className="cart">
          <span>🛒</span>
          <span className="cart-count">{cartItems}</span>
        </div>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Введите текст для поиска..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Найти</button>
        <label>
          <input
            type="checkbox"
            checked={searchByBody}
            onChange={(e) => setSearchByBody(e.target.checked)}
          />
          Искать также в body
        </label>
      </div>
      {isLoading ? (
        <div className="loader">Загрузка...</div>
      ) : (
        <ul className="post-list">
          {filteredPosts.map((post) => (
            <li key={post.id} className="post-item">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={addToCart}>Добавить в корзину</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsApp;
