import React from 'react';

import bannerImage from '../../../assets/img/banner-4.jpg';
import AppPageTitle from '../../app-page-title';


const ProfileComp = () => {
  return (
    <>
        <AppPageTitle pageTitle='Profile Settings' bannerUrl={bannerImage} />
    </>
  )
}

export default ProfileComp;