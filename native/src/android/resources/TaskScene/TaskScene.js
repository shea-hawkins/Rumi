import React from 'react';
import { DrawerLayoutAndroid, Text } from 'react-native';
import TappableRow from '../stateless/TappableRow';
import MenuBar from '../stateless/MenuBar';
import TaskList from '../TaskList/TaskListView';

export default class TaskScene extends React.Component {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={() => <MenuBar />}>
        <Text>
          Route: {this.props.route.key}
        </Text>
        <TappableRow text="Task 1" onPress={this.props.onPushRoute}/>
        <TappableRow text="Task 2" onPress={this.props.onPushRoute}/>
        <TaskList />
      </DrawerLayoutAndroid>
    )
  }
}