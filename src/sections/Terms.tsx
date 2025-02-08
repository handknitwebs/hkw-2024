import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

const ListItem = styled.li`
  list-style: disc;
`

const ContentWrapper = styled.div`
  line-height: 2rem;
  grid-column: 4 / 10;
  margin-bottom: 5rem;
`;

const Link = styled.a`
  color: #fff;
  -moz-transition:color 0.2s ease-in;
  -o-transition:color 0.2s ease-in;
  -webkit-transition:color 0.2s ease-in;
  &:hover {
    color: rgba(255, 26, 53, 1);
  }
`;

const Services: React.FC = () => {

  return (
    <ContentWrapper className="slide-in">
      <h2 id="fulfillmentPolicy">Fulfillment Policy</h2>
      <p>At <span className="bold">HKW.io</span>, we specialize in delivering high-quality website solutions tailored to your needs. To ensure a seamless experience, our fulfillment process is outlined below:</p>
      <ol>
        <li><span className="bold">Project Confirmation:</span>
          <ul>
            <ListItem>Once you confirm your Scope of Work and 50% deposit payment is processed, you will receive a project confirmation email. This email will include:
              <ul>
                <ListItem>Your order details.</ListItem>
                <ListItem>Estimated timelines for project commencement.</ListItem>
                <ListItem>Contact information for your assigned project manager.</ListItem>
              </ul>
            </ListItem>
          </ul>
        </li>
        <li>Project Fulfillment:
          <ul>
            <ListItem>Our team will begin work on your website project within <span className="bold">2 business days</span> of order confirmation.</ListItem>
            <ListItem>Timelines for project delivery vary depending on the scope of work. Your assigned project manager will provide:
              <ul>
                <ListItem>A detailed project timeline.</ListItem>
                <ListItem>Regular updates on progress.</ListItem>
              </ul>
            </ListItem>
          </ul>
        </li>
        <li>Completion and Delivery:
          <ul>
            <ListItem>Upon completing your website project, we will:
              <ul>
                <ListItem>Provide a final review link for your approval.</ListItem>
                <ListItem>Make any necessary adjustments based on agreed-upon revisions.</ListItem>
                <ListItem>Deliver the final website files or launch your website, depending on the service package.</ListItem>
                <ListItem>Bill for the final 50% of project fees.</ListItem>
              </ul>
            </ListItem>
          </ul>
        </li>
        <li>Post-Delivery Support:
          <ul>
            <ListItem>After the project is delivered, our team will provide <span className="bold">7 days of technical support</span> to ensure everything functions smoothly.</ListItem>
            <ListItem>If you require additional support, maintenance packages are available for purchase.</ListItem>
          </ul>
        </li>
      </ol>
      <h2 id="paymentPolicy">Payment Policy</h2>
      <ul>
        <ListItem>50% Payment Upfront:
          <ul>
            <ListItem>All services provided by <span className="bold">HKW.io</span> require a 50% deposit at the time of purchase.</ListItem>
            <ListItem>We accept payments securely via Stripe, ACH, or by Mail.</ListItem>
          </ul>
        </ListItem>
        <ListItem>No Refund Policy:
          <ul>
            <ListItem>Due to the nature of our services, all payments are <span className="bold">non-refundable</span> once the order is confirmed and work has commenced.</ListItem>
            <ListItem>If you have any concerns regarding the service provided, please contact us at <Link href="linkto:support@hkw.io">support@hkw.io</Link>, and we will work to address your concerns.</ListItem>
          </ul>
        </ListItem>
      </ul>
      <h2 id="deliveryTimelines">Delivery Timelines</h2>
      <p>We are committed to delivering high-quality work on time. While specific delivery timelines depend on the scope of your project, general timelines are as follows:</p>
      <ul>
        <ListItem><span className="bold">Website Projects:</span> Delivery within <span className="bold">4-16 weeks</span> from the start date, depending on complexity.</ListItem>
        <ListItem><span className="bold">Custom Features or Add-ons:</span> Timelines for custom work will be provided during the planning phase.</ListItem>
      </ul>
      <p>If there are any delays due to unforeseen circumstances, we will notify you immediately and provide an updated delivery schedule.</p>
      <h2 id="contactInformation">Contact Information</h2>
      <p>If you have questions regarding our fulfillment policy, please contact us:</p>
      <ul>
        <ListItem><span className="bold">Email:</span> support@hkw.io</ListItem>
        <ListItem><span className="bold">Business Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM PT</ListItem>
      </ul>
      <p>Thank you for choosing <span className="bold">HKW.io</span>. We look forward to building something exceptional with you!</p>
  </ContentWrapper>
  );
};

export default Services;
