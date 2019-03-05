import React from 'react';
import {Image, Text, View, Modal, StyleSheet, Button} from "react-native";
import {connect} from "react-redux";
import {showModal} from "../store/actions";

const ModalW = (props) => {
    return (
        <View>
            <Modal animationType={"slide"} transparent={false}
                    visible={props.showModal}
                    onRequestClose={() => {
                       console.log('modal is working');
                   }}>

                <View style = {styles.modal}>
                    <Text style = {styles.text}>Loading...</Text>
                </View>

            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#878685',
        padding: 100,
    },
    text: {
        color: '#000',
        marginTop: 10,
        fontSize: 35,
    },
});

const mapStateToProps = state => {

    return {
        showModal: state.modalVisible,
    }
};


export default connect(mapStateToProps)(ModalW);

