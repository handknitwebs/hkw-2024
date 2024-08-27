import React, { useRef } from 'react';
import ContactForm from '../components/ContactForm';
import "../css/PaperPlaneStyling.css";

interface ContactFormProps {
    onFormSubmit: () => void;
    isFormSubmitted: boolean;
  }

const PaperPlane: React.FC<ContactFormProps> = ({ onFormSubmit, isFormSubmitted }) => {
    const plateRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const topLeftRef = useRef<HTMLDivElement>(null);
    const topRightRef = useRef<HTMLDivElement>(null);
    const bottomLeftRef = useRef<HTMLDivElement>(null);
    const bottomRightRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setTimeout(() => {
            // Flip the div 180 degrees
            plateRef.current?.classList.remove('front');
            containerRef.current?.classList.remove('beginning');

            // Fold the top left corner
            setTimeout(() => {
                topLeftRef.current?.classList.add('curved');

                // Fold the top right corner
                setTimeout(() => {
                    topRightRef.current?.classList.add('curved');

                    // Fold the bottom left corner
                    setTimeout(() => {
                        bottomLeftRef.current?.classList.add('curved');

                        // Fold the bottom right corner
                        setTimeout(() => {
                            bottomRightRef.current?.classList.add('curved');

                            // Continue with the rest of the animation
                            setTimeout(() => {
                                containerRef.current?.classList.add('hover');
                                setTimeout(() => {
                                    containerRef.current?.classList.add('fly_away_first');
                                    setTimeout(() => {
                                        containerRef.current?.classList.add('fly_away');
                                        setTimeout(() => {
                                            // Reset to the initial state
                                            plateRef.current?.classList.add('front');
                                            containerRef.current?.classList.remove('fly_away', 'fly_away_first', 'hover');
                                            containerRef.current?.classList.add('beginning');
                                            [topLeftRef, topRightRef, bottomLeftRef, bottomRightRef].forEach(ref => {
                                                ref.current?.classList.remove('curved');
                                            });
                                        }, 3000);
                                    }, 600);
                                }, 2000);
                            }, 2800);
                        }, 650); // Adjust timing to stagger bottom right corner
                    }, 650); // Adjust timing to stagger bottom left corner
                }, 350); // Adjust timing to stagger top right corner
            }, 350); // Adjust timing to start with top left corner
        }, 200); // Initial delay
    };

    return (
        <div className="plane-parent">
            <div id="plate" className="front" ref={plateRef}>  
                <ContactForm onFormSubmit={onFormSubmit} isFormSubmitted={isFormSubmitted}/>
                <button className="send" onClick={handleClick}>Send it</button> <br/>
            </div>
            <div id="container" className="beginning" ref={containerRef}>
                <div id="left-wing">
                    <div className="top_left curvable" ref={topLeftRef}></div>
                    <div className="bottom_left curvable" ref={bottomLeftRef}></div>
                    <div className="wing wing1"></div>
                    <div className="wing wing2"></div>
                </div>
                <div id="right-wing">
                    <div className="top_right curvable" ref={topRightRef}></div>
                    <div className="bottom_right curvable" ref={bottomRightRef}></div>
                    <div className="wing wing3"></div>
                    <div className="wing wing4"></div>
                </div>
            </div>
        </div>
    );
};

export default PaperPlane;
