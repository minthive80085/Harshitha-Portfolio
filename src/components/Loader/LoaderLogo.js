import React from "react";
import "./LoaderLogo.css";
import hrLogo from "../../assets/images/hr_logo.jpg"; // Import the image

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="logo-container">
        <svg
          className="raw_logo"
          width="120%"
          height="100%"
          viewBox="0 0 730 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="scale(1.66)">
            <path
              class="myHexagon"
              d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
              stroke={theme.body}
              strokeWidth="10"
            />
            <path
              class="myHexagon"
              d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
              stroke={theme.body}
              strokeWidth="10"
            />
            <image
              href={hrLogo}
              x="145"
              y="45"
              height="150"
              width="150"
            />
          </g>
        </svg>
        <div className="name-container">
          <h1 className="name-text" style={{ color: theme.body }}>
            Harshitha Reddy
          </h1>
        </div>
      </div>
    );
  }
}

export default LogoLoader;
