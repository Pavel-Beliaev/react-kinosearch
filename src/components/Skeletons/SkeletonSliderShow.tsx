import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonSliderShow:React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={262}
        height={530}
        viewBox="0 0 262 530"
        backgroundColor="#e0e0e0"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="262" height="405" />
        <rect x="132" y="454" rx="0" ry=



            "0" width="0" height="9" />
        <rect x="0" y="425" rx="10" ry="10" width="262" height="25" />
        <circle cx="123" cy="503" r="27" />
    </ContentLoader>
)

export default SkeletonSliderShow;