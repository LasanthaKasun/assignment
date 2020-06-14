import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Right,
  Container,
  Header,
  Title,
  Spinner,
} from 'native-base';
import styles from './style';
import {Image, Modal, Alert} from 'react-native';
import Cards from '../../components/Cards';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import TextField from '../../components/TextFields';
import Buttons from '../../components/Buttons';
import {getNewsAction, clearNews} from '../../actions/newsAction';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      filterKey: '',
      pageNumber: 1,
    };
  }

  componentDidMount() {
    const {getNews} = this.props;
    getNews({
      pageNumber: 1,
      filter: '',
    });
  }

  filterNews = () => {
    const {filterKey} = this.state;
    const {getNews, clear} = this.props;
    clear();
    this.setState({
      modalVisible: false,
    });
    getNews({
      pageNumber: 1,
      filter: filterKey,
    });
  };

  getMoreNews = () => {
    const {getNews} = this.props;
    const {filterKey, pageNumber} = this.state;
    getNews({
      pageNumber: pageNumber + 1,
      filter: filterKey,
    });
    this.setState({
      pageNumber: pageNumber + 1,
    });
  };

  setFllterKey = (event) => {
    this.setState({
      filterKey: event.nativeEvent.text,
    });
  };

  render() {
    const {auth, news} = this.props;
    const {modalVisible, filterKey, pageNumber} = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome" name="home" />
            </Button>
          </Left>
          <Body>
            <Title>News</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Button
                transparent
                onPress={() => this.setState({modalVisible: true})}>
                <Icon name="search" />
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
        {news.loading && (
          <View style={styles.spinerWrapper}>
            <Spinner color="red" style={styles.spinner} />
          </View>
        )}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View style={styles.modelWrapper}>
            <View style={styles.modelWrapperInner}>
              <Text style={styles.modelWrapperText}>
                {`News Filter (${news.newsData.totalResults} news available)`}
              </Text>
              <View style={styles.searchField}>
                <TextField
                  onChange={(event) => this.setFllterKey(event)}
                  title="Enter Your Item Name"
                  value={filterKey}
                  isWhite={true}
                />
              </View>
              <View style={styles.searchField}>
                <Buttons onClick={() => this.filterNews()} title="Filter" />
              </View>
              <View style={styles.closeField}>
                <Buttons
                  onClick={() => this.setState({modalVisible: false})}
                  title="Close"
                />
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <ScrollView>
            {news.newsData.articles &&
              news.newsData.articles.map((data, key) => {
                return (
                  <Cards
                    key={key}
                    data={data}
                    profile={auth.userName.picture.data.url}
                  />
                );
              })}
            <View style={styles.footerWrapper}>
              <TouchableOpacity onPress={() => this.getMoreNews()}>
                <View style={styles.loadMore}>
                  <Text style={styles.loadMoreText}>
                    Press and get more news
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.footerHeight} />
          </ScrollView>
        </View>
      </Container>
    );
  }
}
ItemList.PropTypes = {
  fbAuth: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    news: state.news,
  };
}

export default connect(mapStateToProps, {
  getNews: getNewsAction,
  clear: clearNews,
})(ItemList);
