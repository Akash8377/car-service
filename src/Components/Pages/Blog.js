import React from 'react';
import '../../style/BlogComponent.css';
import Footer from '../Footer/Footer'
import CustomHeading from './CustomerHeading';
import image1 from '../../image/1.png';
import image2 from '../../image/2.png';
import image3 from '../../image/3.png';
import image4 from '../../image/4.png';
import image6 from '../../image/6.png';
import image7 from '../../image/7.png';
import image8 from '../../image/8.png';
import image9 from '../../image/9.png';
import image10 from '../../image/10.png';
import image11 from '../../image/11.png';
import image12 from '../../image/12.png';
import image13 from '../../image/13.png';
import image14 from '../../image/14.png';
import image15 from '../../image/15.png';
import image16 from '../../image/16.png';
import image17 from '../../image/17.png';
import image18 from '../../image/18.png';
import image19 from '../../image/19.png';
import image20 from '../../image/20.png';
import image21 from '../../image/21.png';
import image22 from '../../image/22.png';
import image23 from '../../image/23.png';
import image24 from '../../image/24.png';
import image25 from '../../image/25.png';
import image26 from '../../image/26.png';
import { Link } from 'react-router-dom';


// Sample data for today's articles
const articles = [
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image1,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image2,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image2,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image3,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image4,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image6,
  },


  // Add more articles as needed
];
const articlesList = [
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image21,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image22,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image23,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image24,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image25,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: image26,
  },
]

const articleData = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    imageUrl: image7,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    imageUrl: image8,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    imageUrl: image9,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 4,
    title: 'Lorem Ipsum',
    imageUrl: image10,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 5,
    title: 'Lorem Ipsum',
    imageUrl: image11,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 6,
    title: 'Lorem Ipsum',
    imageUrl: image12,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 7,
    title: 'Lorem Ipsum',
    imageUrl: image13,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 8,
    title: 'Lorem Ipsum',
    imageUrl: image14,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 9,
    title: 'Lorem Ipsum',
    imageUrl: image15,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 10,
    title: 'Lorem Ipsum',
    imageUrl: image16,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 11,
    title: 'Lorem Ipsum',
    imageUrl: image17,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 12,
    title: 'Lorem Ipsum',
    imageUrl: image18,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 13,
    title: 'Lorem Ipsum',
    imageUrl: image19,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  {
    id: 14,
    title: 'Lorem Ipsum',
    imageUrl: image20,
    content: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate',
  },
  // Add more articles as needed
];

const BlogComponent = () => {
  return (
    <div>
      <CustomHeading />
      <div className='main-blog-container'>
        <div className="blog-container">
          <h2>Today's Articles</h2>
          <div className="article-list">
            {articles.map((article, index) => (
              <div key={index} className="article-box">
                <img src={article.image} alt={`Article ${index + 1}`} />
                <h3>{article.title}</h3>
                <p>{article.subtitle}</p>
                <Link to='/blog-article' className="read-more">Read more</Link>
              </div>
            ))}
          </div>

          <div className="blog-container-2">
            <h2>Recommended</h2>
            <div className="article-list">
              {articlesList.map((article, index) => (
                <div key={index} className="article-box">
                  <img src={article.image} alt={`Article ${index + 1}`} />
                  <h3>{article.title}</h3>
                  <p>{article.subtitle}</p>
                  <Link to={`/article/${index}`} className="read-more">Read more</Link>
                </div>
              ))}
            </div>
          </div>

        </div>


        <div className="blog-container-1">
          <h2>Today's Articles</h2>
          <div className="article-list-1">
            {articleData.map(article => (
              <div className="article-1" key={article.id}>
                <img src={article.imageUrl} alt={`Article ${article.id}`} />
                <div className="article-content-1">
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default BlogComponent;





