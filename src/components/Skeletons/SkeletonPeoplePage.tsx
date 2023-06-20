import React from "react"
import ContentLoader from "react-content-loader"

export const SkeletonPeoplePage: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={1140}
        height={519}
        viewBox="0 0 1140 519"
        backgroundColor="#e0e0e0"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="132" y="454" rx="0" ry="0" width="0" height="9"/>
        <rect x="0" y="0" rx="10" ry="10" width="342" height="519"/>
        <rect x="362" y="4" rx="10" ry="10" width="100" height="18"/>
        <rect x="362" y="43" rx="10" ry="10" width="513" height="16"/>
        <rect x="362" y="66" rx="10" ry="10" width="513" height="16"/>
        <rect x="362" y="89" rx="10" ry="10" width="513" height="16"/>
        <rect x="362" y="112" rx="10" ry="10" width="513" height="16"/>
        <rect x="362" y="201" rx="10" ry="10" width="513" height="16"/>
        <rect x="362" y="290" rx="10" ry="10" width="513" height="16"/>
        <rect x="362" y="379" rx="10" ry="10" width="513" height="16"/>
        <circle cx="917" cy="68" r="22"/>
        <circle cx="971" cy="68" r="22"/>
        <circle cx="1025" cy="68" r="22"/>
        <rect x="895" y="114" rx="10" ry="10" width="228" height="18"/>
        <rect x="895" y="137" rx="10" ry="10" width="228" height="16"/>
        <rect x="895" y="186" rx="10" ry="10" width="228" height="18"/>
        <rect x="895" y="209" rx="10" ry="10" width="228" height="16"/>
        <rect x="895" y="258" rx="10" ry="10" width="228" height="18"/>
        <rect x="895" y="281" rx="10" ry="10" width="228" height="16"/>
        <rect x="895" y="330" rx="10" ry="10" width="228" height="18"/>
        <rect x="895" y="353" rx="10" ry="10" width="228" height="16"/>
    </ContentLoader>
);