import Container from "./container";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Event() {

    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();
    
        const items = [
	         <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
	         <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
	         <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
                ];

    return(
        <Container>
            <div className="shadow-2xl mb-20 h-96 ">
                <AliceCarousel mouseTracking items={items} />;

            </div> 
        </Container>
                 
    )
}

export default Event;