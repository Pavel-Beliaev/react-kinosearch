import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMovieCard:React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={741}
        height={531}
        viewBox="0 0 741 531"
        backgroundColor="#e0e0e0"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="300" height="450" />
        <rect x="330" y="26" rx="10" ry="10" width="410" height="30" />
        <rect x="330" y="99" rx="10" ry="10" width="410" height="16" />
        <rect x="330" y="219" rx="10" ry="10" width="100" height="12" />
        <rect x="330" y="119" rx="10" ry="10" width="410" height="16" />
        <rect x="330" y="139" rx="10" ry="10" width="410" height="16" />
        <rect x="330" y="159" rx="10" ry="10" width="410" height="16" />
        <rect x="330" y="3" rx="10" ry="10" width="410" height="14" />
    </ContentLoader>
)

export default SkeletonMovieCard;