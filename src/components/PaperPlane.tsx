import React, { useRef } from 'react';
import ContactForm from '../components/ContactForm';
// import "../css/PaperPlaneStyling.css";
import "../css/planeStyling2.css"

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

    const handleBuildPlane = () => {
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
                                    }, 600);
                                }, 1600);
                            }, 2000);
                        }, 500); // Adjust timing to stagger bottom right corner
                    }, 500); // Adjust timing to stagger bottom left corner
                }, 150); // Adjust timing to stagger top right corner
            }, 150); // Adjust timing to start with top left corner
        }, 200); // Initial delay
    };

    return (
        <div className="plane-parent">
            <div id="plate" className="front" ref={plateRef}>  
                <ContactForm onFormSubmit={onFormSubmit} handleBuildPlane={handleBuildPlane} isFormSubmitted={isFormSubmitted}/>
                {/* <button className="send" onClick={handleClick}>Send it</button> <br/> */}
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
