import React from 'react';
import './Article.css';

function Article() {
  const article = {
    id: 1,
    title: 'Article 1',
    category: 'News',
    published: false,
    content: 'Lorem Ipsum',
  };

  return (
    <div className='Article'>
      <div>{article.title}</div>
      <div>{article.category}</div>
      <div>{article.published ? 'Published' : 'Draft'}</div>
    </div>
  );
}

export default Article;
