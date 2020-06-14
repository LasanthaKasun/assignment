import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Item,
  Input,
  Icon,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Button,
  Right,
  View,
  List,
  ListItem,
} from 'native-base';
import styles from './style';
import {Image} from 'react-native';
import NavigationService from '../../config/NavigationService';
import moment from 'moment';

const Cards = ({profile, data, isDetail}) => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail
          source={{
            uri: profile,
          }}
        />
        <Body>
          <Text style={styles.title}>{data.title}</Text>
          <Text note style={styles.author}>
            {data.source.name}
          </Text>
          <Text style={styles.textWrapper}>
            {moment(data.publishedAt).format('LLLL')}
          </Text>
        </Body>
      </Left>
    </CardItem>
    {!isDetail ? (
      <TouchableOpacity
        onPress={() => NavigationService.navigate('ItemDetails', {data: data})}>
        <CardItem cardBody>
          <Image
            source={{
              uri: data.urlToImage,
            }}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
      </TouchableOpacity>
    ) : (
      <View>
        <CardItem cardBody>
          <Image
            source={{
              uri: data.urlToImage,
            }}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View>
          <Text style={styles.paragraph}>{data.content}</Text>
        </View>
      </View>
    )}

    <CardItem style={styles.cardFtWidth}>
      <Left>
        <Button transparent>
          <Icon active name="thumbs-up" style={styles.textWrapper} />
          <Text style={styles.textWrapper}>12 Likes</Text>
        </Button>
      </Left>
      <Body style={styles.bodyFtWidth}>
        <Button transparent>
          <Icon active name="chatbubbles" style={styles.textWrapper} />
          <Text style={styles.textWrapper}>4 Comments</Text>
        </Button>
      </Body>
      <Right>
        <Text style={styles.textWrapper}>NEWS</Text>
      </Right>
    </CardItem>
  </Card>
);

Cards.PropTypes = {
  profile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  isDetail: PropTypes.bool,
  data: PropTypes.shape({}).isRequired,
};

Cards.defaultProps = {
  isDetail: false,
};

export default Cards;
