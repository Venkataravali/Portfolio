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
            Technical Analyst with 1 year 8 months of experience.
            Worked as intern in Infocampus Software Training Institute for 6 months as UI-Developer
             Proficient in REACTJS,NODEJS,EXPRESSJS and MONGODB. 
            Passionate about implementing and creating new projects with new technologies.
            </p>
            <p>
            Certiﬁed in Full-Stack Technology
            </p>
            <h2>Project</h2>
            <p>
             Created E-Commerce Application using React(UI components).
             Used Styled components and material UI.
             Built a server in ExpressJs and used CORS to implement the cross origin policy between client and server.
             Implemented the authentication feature using JWT tokens.
             REST API's were successfully built to handle http requests.
             Fetching Data with queries and used MongoDB methods.
             Implemented payment method to see how easy to receive payment from client side.

            </p>
          
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;
