import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

class Dashboard extends Component {
  makeBackground(btn) {
    var style = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      style.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      style.backgroundColor = '#E77AAE';
    } else {
      style.backgroundColor = '#758BF4';
    }

    return style;
  }

  goToProfile(event) {
  }

  goToRepos() {
  }

  goToNotes() {
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{uri: this.props.userInfo.avatar_url}}
          style={styles.image}
        />

        <TouchableHighlight
          onPress={this.goToProfile.bind(this)}
          style={this.makeBackground(0)}>

          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.goToRepos.bind(this)}
          style={this.makeBackground(1)}>

          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.goToNotes.bind(this)}
          style={this.makeBackground(2)}>

          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});


export default Dashboard;
