import React from 'react';
import {StyleSheet, Text, View, FlatList, Button, Image} from 'react-native';
import {connect} from 'react-redux';
import ModalW from "./ModalW";
import {fetchList, pagination} from "../store/actions";
import Item from "./Item";

class Main extends React.PureComponent {

    componentDidMount() {
        this.props.fetchList();
    }

    render() {

        return (

            <View style={styles.container}>

                {this.props.list.length !== 0 ? <FlatList

                    data={this.props.list}
                    renderItem={({item}) => {
                        return <Item item={item} />
                    }}

                    keyExtractor={item => item.data.id}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        this.props.fetchList();
                    }}
                   /> : null}
                <ModalW/>
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

    return {
        list: state.list,
        show: state.modalVisible,
        after: state.after,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => dispatch(fetchList()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);