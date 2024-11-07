import React from 'react';
import { StyleSheet, View, Image, Modal, ActivityIndicator } from 'react-native';

const Loader = (props) => {
    const { loading, ...attributes } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
                console.log('close modal');
            }}>
            <View style={styles.modalBackground}>
                {/* ....loading */}

                <View style={styles.loaderContainer}>
                    <Image
                        source={{ uri: 'https://media.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif' }} // Use external URL for the GIF
                        style={styles.loaderImage}
                    />
                </View>
                {/* 
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={true}
                        color="#000000"
                        size="large"
                        style={styles.activityIndicator}
                    />
                </View> */}
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
    // gif
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background overlay
    },
    loaderImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});