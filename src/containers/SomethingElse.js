import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  FlatList
} from 'react-native';
import { connect } from 'react-redux'

class SomethingElse extends Component {
	render(){
		var taskArray = this.props.NewTask.map((task)=>{
			return(
				<FlatList
		          data={[
		            {key: task},		         
		          ]}
		          renderItem={({item}) => <Text style={styles.list}>{item.key}</Text>}
		        />
			)
		})
		return(
	      <View>
	      	{taskArray}
	      </View>
		)
	}
}

function mapStateToProps(state){
	return{
		NewTask: state.task
	}
}


export default connect (mapStateToProps)(SomethingElse)

const styles = StyleSheet.create({
  list: {
    fontSize:20,
    marginLeft:5
  },
})