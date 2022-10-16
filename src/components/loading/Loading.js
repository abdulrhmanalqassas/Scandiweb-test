import { PureComponent } from "react";

class Loading extends PureComponent {
  render() {
    return (
      <>
        <div className="loader"></div>
        <h1>Loading...</h1>
      </>
    );
  }
}

export default Loading;
