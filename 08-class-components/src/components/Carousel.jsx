import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
              data-index={index}
              key={photo}
              onClick={(e) =>
                this.setState({ active: +e.target.dataset.index })
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
