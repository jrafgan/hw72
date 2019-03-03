import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';

class Main extends React.Component {

    render() {

        return (
            <View style={styles.container}>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        padding: 20,
    },

});

const mapStateToProps = state => {
    console.log('Main state !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', state.orderList);

    return {
        menu: state.menu,
        showModal: state.modalVisible,
        orderList: state.orderList,
        total: state.total,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);