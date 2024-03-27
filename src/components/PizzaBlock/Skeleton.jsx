import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className='pizza-block-wraper'>
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={465}
      viewBox='0 0 280 465'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='140' cy='135' r='120' />
      <rect x='0' y='272' rx='10' ry='10' width='280' height='27' />
      <rect x='0' y='318' rx='10' ry='10' width='280' height='86' />
      <rect x='0' y='430' rx='10' ry='10' width='95' height='27' />
      <rect x='127' y='420' rx='25' ry='25' width='153' height='47' />
    </ContentLoader>
  </div>
);

export default Skeleton;
