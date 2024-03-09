import React from 'react';
import { Helmet } from 'react-helmet';
import './ResponsiveGoogleForm.css'; // Import CSS file for styling

const ResponsiveGoogleForm = () => {
  return (
    <>
      <div className="googleFormContainer">
        {/* Provided Google Form iframe */}
        <iframe
          title="Google Form 3"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfzAIBnHYBjjAWteUxKE3w8mImaRZdgcKc0TSbQfDnAFRsKQw/viewform?embedded=true"
          width="640"
          height="100%" // Adjust as needed or remove the height attribute
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="yes" // Enable scrolling
        >
          Loading…
        </iframe>
      </div>
      <Helmet>
        {/* Stylesheet link */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        {/* Script */}
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
    </>
  );
};

export default ResponsiveGoogleForm;
