import React from 'react';
import Img from 'gatsby-image';

import SectionTitle from './SectionTitle';
import styles from './Contact.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div id="contact" className={styles.contact}>
        <div className={styles.contactContent}>
            <div className={styles.formContainer}>
              <SectionTitle text="Contact"/>
              <form
                netlify
                netlify-honeypot="bot-field"
                className={styles.form}
                name="contact"
                method="POST"
              >

                <input type="hidden" name="form-name" value="contact" />
                
                <p style={{display: 'none'}}><label>
                  Bot Field: <br/>
                  <input name="bot-field"/>
                </label></p>

                <p><label>
                  Name: <br/>
                  <input type="text" name="name" placeholder="Enter your name here"/>
                </label></p>

                <p><label>
                  Email: <br/>
                  <input type="text" name="email" placeholder="Enter your email here"/>
                </label></p>

                <p><label>
                  Message: <br/>
                  <textarea rows="6" placeholder="Leave your message here"></textarea>
                </label></p>

                <button type="submit">Send Form</button>
              </form>
            </div>
        </div>
        
        <Img
          outerWrapperClassName={styles.contactImage}
          style={{height: '100%'}}
          sizes={data.contact.childImageSharp.sizes}
        />
      </div>
    );
  } 
}

export default Contact;