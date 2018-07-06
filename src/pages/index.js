import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Footer from '../components/Footer';

import './index.css';

const Index = ({ data }) => {
  
  return (
    <div>
      <Helmet>
        <title>Gatsby Business Site</title>
        <meta name="description" content="GatsbyJS One Page Site"/>
      </Helmet>
      <Header />
      <Landing data={data}/>
      <Services />
      <Divider />
      <About />
      <Divider />
      <Contact data={data}/>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    landing: file(relativePath: { eq: "images/city-sunset.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    contact: file(relativePath: { eq: "images/handshake.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }

  }
`;

export default Index;
