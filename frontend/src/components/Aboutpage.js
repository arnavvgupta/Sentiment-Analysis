import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import styles from "./Aboutpage.module.css";
import Navbar from "./Navbar";

const Aboutpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className={styles.mainAbout}>
        <div className={styles.floating}>
          <Carousel img1="https://nationaltoday.com/wp-content/uploads/2022/04/37-MrBeast.jpg" img2="https://yt3.googleusercontent.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s900-c-k-c0x00ffffff-no-rj" img3="https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s900-c-k-c0x00ffffff-no-rj" id="carousel1" />
          <h3 className={styles.sidetexts}>
          YouTubers benefit from viewer feedback by improving content, fostering a community, generating fresh ideas, building trust, and enhancing their connection with the audience. This interaction drives engagement, growth, and helps shape their channel to align with viewer preferences and needs.
          </h3>
        </div>

        <div className={styles.floating}>
          <h3 className={styles.sidetexts}>
          Instagram creators benefit from viewer feedback by refining content, deepening audience engagement, gaining insights for new posts, building authenticity, and nurturing a loyal community. This loop of interaction drives growth, improves content relevance, and enhances their overall Instagram presence.
          </h3>
          <Carousel img1="https://assets.vogue.in/photos/6285546f59172d938d5c0539/master/w_1600%2Cc_limit/235102446_944739809421401_350281382770719041_n.jpg" img2="https://akns-images.eonline.com/eol_images/Entire_Site/2022524/rs_700x1024-220624121604-634-Khaby-Lame-tiktok.jpg?fit=around%7C700:1024&output-quality=90&crop=700:1024;center,top" img3="https://resize.indiatvnews.com/en/resize/newbucket/1280_-/2022/08/2tqeed-8-1659361219.jpg" id="carousel2" />
        </div>

        <div className={styles.floating}>
          <Carousel img1="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Elon_Musk_Royal_Society_%28cropped_2%29.jpg/1200px-Elon_Musk_Royal_Society_%28cropped_2%29.jpg" img2="https://newsonair.gov.in/writereaddata/News_Pictures/NAT/2022/Jul/NPIC-20227917417.jpg" img3="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" id="carousel3" />
          <h3 className={styles.sidetexts}>
            
Twitter creators benefit from viewer feedback by refining their tweets, sparking conversations, gaining fresh perspectives, building a loyal following, and enhancing their online presence. This interaction amplifies engagement, shapes their content, and fosters a strong connection with their audience.
          </h3>
        </div>

        <div className={styles.floating}>
          <h3 className={styles.sidetexts}>
          Facebook creators benefit from viewer feedback by improving their posts, increasing engagement, gaining insights for content, fostering community, and building authentic relationships. This interaction drives growth, enhances content quality, and strengthens their impact on the platform.
          </h3>
          <Carousel img1="https://media.licdn.com/dms/image/D5603AQEDenJnx3775w/profile-displayphoto-shrink_800_800/0/1684770266748?e=2147483647&v=beta&t=loPveFU2FBVVXuRn92PUf5XtdRe8tTfTsMgXM0yrToo" img2="https://aflence.com/wp-content/uploads/2022/12/Ahsaas-Channa-5-jpg.webp" img3="https://cdn.geekwire.com/wp-content/uploads/2020/02/Naveen-Singh-Center-CEO.jpg" id="carousel4" />
        </div>

        <div className={styles.contentdivv}>
            
        Sentiment Analysis offers several benefits to content creators:
<br/>
<br/>
1. Content Improvement: User feedback helps creators refine their content, making it more relevant, engaging, and valuable to their audience.
<br/>
<br/>
2. Audience Engagement: Engaging with user feedback fosters a sense of community, encouraging followers to interact more and become dedicated fans.
<br/>
<br/>
3. Idea Generation: Feedback provides new ideas and perspectives, inspiring creators to explore diverse topics and directions for their content.
<br/>
<br/>
4. Authenticity: Responding to feedback builds authenticity and trust, as creators show they value and listen to their audience's opinions.
<br/>
<br/>
5. Audience Understanding: Feedback offers insights into the audience's preferences, allowing creators to tailor content to meet their expectations.
<br/>
<br/>
6. Collaborative Opportunities: Positive interactions with users might lead to collaboration requests or partnerships with other creators.
<br/>
<br/>
7. Adaptation to Trends: User feedback helps creators stay current by incorporating emerging trends and addressing audience interests.
<br/>
<br/>
8. Algorithm Favorability: Positive engagement from user feedback can improve content visibility on platforms' algorithms, potentially increasing reach.
<br/>
<br/>
9. Constructive Learning: Constructive criticism informs creators of areas to improve, enhancing their skills and content quality.
<br/>
<br/>
10. Long-term Loyalty: A strong feedback loop can lead to a loyal community that continually supports and shares the creator's content.
<br/>
<br/>
In essence, user feedback empowers creators to enhance their content, engagement, and relationship with their audience, contributing to long-term success.
   </div>
      </div>

      <button className="button2" onClick={() => navigate("/urlAnalyser")}>Try Product</button>
    </div>
  );
};

export default Aboutpage;
