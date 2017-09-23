import Row from './Row';
import React from 'react';
import { ListView } from 'react-native';

class MyList extends React.Component {

  render() {
    return (
      <ListView
        dataSource={this.props.users}
        renderRow={this.renderUser}
      />
    );
  }

  renderUser = (userData) => {
    return <Row first={userData.name.first} last={userData.name.last} picture={userData.picture.large}/>
  }
}

export default MyList;
