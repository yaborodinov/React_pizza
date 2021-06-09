import React from 'react'
import ContentLoader from "react-content-loader";


function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="131" cy="123" r="125" />
      <rect x="6" y="267" rx="6" ry="6" width="266" height="35" />
      <rect x="8" y="314" rx="6" ry="6" width="264" height="77" />
      <rect x="14" y="413" rx="6" ry="6" width="106" height="37" />
      <rect x="150" y="407" rx="20" ry="20" width="124" height="47" />
    </ContentLoader>
  );
}

export default LoadingBlock
