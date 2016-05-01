import React, {
  Component,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  StyleSheet
} from 'react-native';

import Api from '../util/api';
import Dashboard from './Dashboard';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit(event) {
    this.setState({
      isLoading: true
    });

    Api.getBio(this.state.username).then((userInfo) => {
      this.props.navigator.push({
        title: userInfo.name || 'Select an Option',
        component: Dashboard,
        passProps: { userInfo }
      });

      this.setState({
        error: false,
        isLoading: false,
        username: ''
      });
    })
    .catch((err) => {
      this.setState({
        error: err.message,
        isLoading: false
      });
    });
  }

  render() {
    const showErr = () => {
      if (this.state.error) {
        return (
          <View>
            <Text>{this.state.error}</Text>
          </View>
        );
      } else {
        return (
          <View/>
        );
      }
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github user</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"/>
        {showErr()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48BBEC',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Main;
