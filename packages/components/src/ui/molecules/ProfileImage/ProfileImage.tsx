import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import { _generateStyles } from './_generateStyles';
import { useResponsive } from '../../../theme/hooks';

const ProfileImage = ({ source }: ProfileImageProps) => {
  const breakpoint = useResponsive();
  const styles = _generateStyles(breakpoint);

  return (
    <View style={styles.profileImageContainer}>
      <Image source={source} resizeMode='cover' style={styles.image} />
    </View>
  );
};

export default ProfileImage;

interface ProfileImageProps {
  source: ImageSourcePropType;
}
