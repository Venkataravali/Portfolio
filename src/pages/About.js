import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            Junior Web Developer with 6 months of experience as a intern in the search for a position where I can
             enhance my skillset in web technologies to develop and implement solutions to meet business needs. Meets job demands and deadlines through diligent work ethic and dedication to quality

            </p>
            <p>
            Certiﬁed in Full-Stack Technology
            </p>
            <h2>Project</h2>
            <p>
            Created the Front end (UI Components) using ReactJS. Used styled components and material UI to import icons. Filter ,Sort,Add to cart functionality added able to view the products in the cart because we used Redux We could checkout using stripe payment method after verifying
            client and credit card information we would get payment and order got placed
            We would have admin dashboard there we could check latest orders and users and analytics
            Implemented the authentication feature using JWT tokens. REST API's were successfully built to handle http requests. Fetching Data with queries and used MongoDB methods. Used google storage,stripe library ,React virtual DOM,Redux,hook
           and more.


            </p>
          
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;
