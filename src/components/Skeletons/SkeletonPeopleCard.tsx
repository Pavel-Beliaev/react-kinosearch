import React from "react"
import ContentLoader from "react-content-loader"

export const SkeletonPeopleCard: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={200}
        height={363}
        viewBox="0 0 200 363"
        backgroundColor="#e0e0e0"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <rect x="132" y="454" rx="0" ry="0" width="0" height="9"/>
        <rect x="0" y="0" rx="10" ry="10" width="200" height="303"/>
        <rect x="10" y="314" rx="10" ry="10" width="180" height="17"/>
        <rect x="10" y="340" rx="10" ry="10" width="180" height="14"/>
    </ContentLoader>
);