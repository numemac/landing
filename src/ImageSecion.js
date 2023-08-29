import { Component } from "react";
import Banner from "./banner-wide.png";

export default class ImageSection extends Component {

  constructor (props) {
    super(props);
    this.state = {
      instance: null,
    };
  }

  render() {
    const { instance } = this.props;

    return (
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src={Banner}
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
    )
  }
}
