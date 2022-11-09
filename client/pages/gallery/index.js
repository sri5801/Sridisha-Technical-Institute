import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const galleryData = [
  {
    id: 1,
    src: "/images/gallery/1.jpeg",
  },
  {
    id: 2,
    src: "/images/gallery/2.jpeg",
  },
  {
    id: 3,
    src: "/images/gallery/3.jpeg",
  },
  {
    id: 4,
    src: "/images/gallery/4.jpeg",
  },
  {
    id: 5,
    src: "/images/gallery/5.jpeg",
  },
];

const Gallery = () => {
    return (
      <Container className="d-flex flex-column mt-3 p-4 h-50 w-100 bg-gradient bg-warning">
        <h3 className="text-align-center">Gallery</h3>
        <Carousel className="d-block h-50 w-100">
          {galleryData.map((x) => {
            return (
              <Carousel.Item key={x.id} className="h-50">
                <img style={{ width: "100%" }} src={x.src} alt="" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    );
}
 
export default Gallery;