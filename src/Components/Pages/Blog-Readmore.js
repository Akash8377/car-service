import React from 'react'
import CustomHeading from './CustomerHeading';
import image27 from '../../image/27.png';
import '../../style/ReadMore.css';
import image7 from '../../image/7.png';
import image8 from '../../image/8.png';
import image9 from '../../image/9.png';
import image10 from '../../image/10.png';
import image11 from '../../image/11.png';
import image12 from '../../image/12.png';
import image13 from '../../image/13.png';
import image28 from '../../image/28.png';
import Footer from '../Footer/Footer';

const BlogReadmore = () => {

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
        }
    ]
    return (
        <div>
            <CustomHeading />
            <img src={image27} alt="" width="100%" height="40%" />
            <div className='blog-readmore-heading'>
            <div className='main-read-more'>
                <h1 className='main-read-more-heqading'>Unleashing Maruti Suzuki Invicto Top-Spec Variant!</h1>
                <h5 className='main-read-more-heqading-1'>INTRODUCTIONS</h5>
                <p>Maruti Suzuki, the renowned automobile manufacturer, is set to make waves in the MPV segment with its latest offering, the Maruti Suzuki Invicto. Anticipation is high as the company announces the availability of a single top-spec variant, the Alpha+. While additional variants are yet to be confirmed, the Invicto aims to capture the hearts of MPV enthusiasts with its impressive features and performance. In this blog, we will delve into the details of this eagerly anticipated vehicle and how it stacks up against its competitors.</p>

                <h5 className='main-read-more-heqading-1'>GLIMPSE OF INVICTO’S FEATURES</h5>
                <p>Although specific details about the Invicto’s features have not been officially released, industry experts predict that it will rival the range-topping Toyota Innova Hycross in terms of bells and whistles. Expectations are high for a comprehensive feature list, including a panoramic sunroof, LED headlamps, powered opening/closing of the boot, ventilated front seats, powered ottoman seats with leg support, a 10.25-inch touchscreen infotainment system, a nine-speaker JBL sound system with a subwoofer, auto-dimming IRVM, digital instrument cluster, eight-way powered driver seat with memory settings, dual-zone climate control (front and rear rows), connected car tech with smartwatch connectivity, six airbags, USB fast charging ports, and Advanced Driver Assistance Systems (ADAS). These advanced features promise a luxurious and technologically advanced driving experience.</p>

                <h5 className='main-read-more-heqading-1'>CONCLUSION</h5>
                <p>The Maruti Suzuki Invicto MPV is poised to make a significant impact in the MPV market with its single top-spec Alpha+ variant. Packed with premium features, impressive performance, and the backing of Maruti Suzuki’s trusted reputation, the Invicto is set to challenge its competitors head-on. As the launch date approaches, the automotive world eagerly awaits the opportunity to experience the Invicto firsthand and witness how it redefines the MPV segment with its unique offerings</p>

                <div className='youtube-read-more-heading'>
                <h5 className='main-read-more-heading-2'>View Launch of New Maruti Suzuki Invicto! HERE!!</h5>
                <a href="https://www.youtube.com/watch?v=e-AIojpk1pA"><img src={image28} alt="" height="307px" width="664px"/></a>
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
            <Footer/>
        </div>
    )
}

export default BlogReadmore