import React, { useContext } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Button, Row, TouchableSvg, Typography } from '../..';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from '../../atom/Button/_generateAnimations';
import { MsqThemeContext } from '../../../theme/ThemeContext';

const profileImage = require('../../../assets/images/me_square.png');

const TrackCard = ({ style }: TrackCardProps) => {
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(theme);
  const { WHITE } = theme.color;
  const animation = _generateAnimations();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPressIn={animation.handlePressIn}
      onPressOut={animation.handlePressOut}
      onPress={() => {}}>
      <Row
        animated={true}
        align='center'
        orientation='row'
        style={[
          styles.trackCard,
          { transform: [{ scale: animation.scaleValue }] },
          style,
        ]}
        gutterBottom='sm'>
        <View style={styles.trackContent}>
          <Typography
            variant='body1'
            color='lightGrey'
            style={styles.trackNumber}>
            {'01'}
          </Typography>
          <Image
            resizeMode='contain'
            source={profileImage}
            style={styles.trackImage}
          />
          <View>
            <Typography variant='body1' color='white' gutterBottom='xxs'>
              {'Be Honest'}
            </Typography>
            <Typography variant='body2' color='lightGrey'>
              {'Swimming Against Waves'}
            </Typography>
          </View>
        </View>
        <TouchableSvg
          onPress={() => {}}
          fill={WHITE}
          interactionFill={WHITE}
          icon='more'
        />
      </Row>
    </TouchableOpacity>
  );
};

export default TrackCard;

interface TrackCardProps {
  style?: any;
}
