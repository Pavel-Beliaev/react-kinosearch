import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMovieCard:React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={741}
        height={277}
        viewBox="0 0 741 277"
        backgroundColor="#e0e0e0"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="132" y="454" rx="0" ry="0" width="0" height="9" />
        <rect x="0" y="0" rx="10" ry="10" width="185" height="277" />
        <rect x="215" y="26" rx="10" ry="10" width="525" height="30" />
        <rect x="215" y="99" rx="10" ry="10" width="525" height="16" />
        <rect x="215" y="219" rx="10" ry="10" width="100" height="12" />
        <rect x="215" y="119" rx="10" ry="10" width="525" height="16" />
        <rect x="215" y="139" rx="10" ry="10" width="525" height="16" />
        <rect x="215" y="159" rx="10" ry="10" width="525" height="16" />
        <rect x="215" y="3" rx="10" ry="10" width="525" height="14" />
    </ContentLoader>
)

export default SkeletonMovieCard;