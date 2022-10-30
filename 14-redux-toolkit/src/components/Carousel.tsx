import { Component } from 'react';

type Props = {
  images: string[];
};

type State = {
  active: number;
};

class Carousel extends Component<Props, State> {
  // Why annotate State Twice? -> https://github.com/typescript-cheatsheets/react/issues/57
  state: State = {
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
              onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                // If event target not an HTMLImageElement, exit
                if (!(e.target instanceof HTMLImageElement)) {
                  return;
                }
                if (e.target.dataset.index) {
                  this.setState({ active: +e.target.dataset.index });
                }
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
