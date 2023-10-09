import ContentLoader from 'react-content-loader';

export function CLoader() {
  return (
    <ContentLoader
      speed={2}
      width={180}
      height={250}
      viewBox="0 0 180 250"
      backgroundColor="#f0f0f0"
      foregroundColor="#c4c4c4">
      <rect x="-2" y="-29" rx="0" ry="0" width="337" height="325" />
      <rect x="86" y="112" rx="0" ry="0" width="43" height="33" />
    </ContentLoader>
  );
}
