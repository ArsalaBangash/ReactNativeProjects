import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import Row from './app/list/Row';
import MyList from './app/list/MyList';
import Rx from 'rxjs/Rx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })};
  }

  componentDidMount() {
    this.getUsers()
    .map(response => response.results)
    .subscribe((results) => {
      this.setState({
        users: this.state.users.cloneWithRows(results)
      });
    });
  }

  render() {
      return (
        <View style={styles.container}>
          <MyList users={this.state.users} />
        </View>
      )
  }

  getUsers = () => {
    return Rx.Observable.fromPromise(
      fetch('https://randomuser.me/api/?results=5').then(response => response.json())
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
