import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMoviePage:React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={1140}
        height={519}
        viewBox="0 0 1140 519"
        backgroundColor="#e0e0e0"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="132" y="454" rx="0" ry="0" width="0" height="9" />
        <rect x="0" y="0" rx="10" ry="10" width="342" height="519" />
        <rect x="362" y="4" rx="10" ry="10" width="100" height="18" />
        <rect x="362" y="43" rx="10" ry="10" width="513" height="16" />
        <rect x="362" y="346" rx="10" ry="10" width="153" height="18" />
        <rect x="362" y="66" rx="10" ry="10" width="513" height="16" />
        <rect x="362" y="89" rx="10" ry="10" width="513" height="16" />
        <rect x="362" y="404" rx="10" ry="10" width="153" height="18" />
        <rect x="362" y="462" rx="10" ry="10" width="153" height="18" />
        <rect x="362" y="369" rx="10" ry="10" width="153" height="16" />
        <rect x="362" y="427" rx="10" ry="10" width="153" height="16" />
        <rect x="362" y="485" rx="10" ry="10" width="153" height="16" />
        <rect x="525" y="346" rx="10" ry="10" width="153" height="18" />
        <rect x="525" y="369" rx="10" ry="10" width="153" height="16" />
        <rect x="525" y="404" rx="10" ry="10" width="153" height="18" />
        <rect x="525" y="427" rx="10" ry="10" width="153" height="16" />
        <rect x="525" y="462" rx="10" ry="10" width="153" height="18" />
        <rect x="525" y="485" rx="10" ry="10" width="153" height="16" />
        <rect x="688" y="346" rx="10" ry="10" width="153" height="18" />
        <rect x="688" y="404" rx="10" ry="10" width="153" height="18" />
        <rect x="688" y="462" rx="10" ry="10" width="153" height="18" />
        <rect x="688" y="369" rx="10" ry="10" width="153" height="16" />
        <rect x="688" y="427" rx="10" ry="10" width="153" height="16" />
        <rect x="688" y="485" rx="10" ry="10" width="153" height="16" />
        <circle cx="917" cy="22" r="22" />
        <circle cx="971" cy="22" r="22" />
        <circle cx="1025" cy="22" r="22" />
        <rect x="895" y="68" rx="10" ry="10" width="228" height="18" />
        <rect x="895" y="91" rx="10" ry="10" width="228" height="16" />
        <rect x="895" y="140" rx="10" ry="10" width="228" height="18" />
        <rect x="895" y="163" rx="10" ry="10" width="228" height="16" />
        <rect x="895" y="212" rx="10" ry="10" width="228" height="18" />
        <rect x="895" y="235" rx="10" ry="10" width="228" height="16" />
        <rect x="895" y="284" rx="10" ry="10" width="228" height="18" />
        <rect x="895" y="307" rx="10" ry="10" width="228" height="16" />
    </ContentLoader>
)

export default SkeletonMoviePage;