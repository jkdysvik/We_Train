import { RouteProp } from '@react-navigation/native';
import { Icon, Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { RootStackParamList } from '../../../types';
import {StyleSheet,} from 'react-native';
import { Avatar } from '@rneui/themed';
import { LocalData } from '../../../LocalData/LocalData';

type FriendProfileScreenRouteProp = RouteProp<RootStackParamList, 'FriendProfileScreen'>;

export default function FriendProfileScreen({ route, navigation }: { route: FriendProfileScreenRouteProp, navigation: any }) {
    const { user } = route.params;
    const [follows, setFollows] = React.useState<boolean>(LocalData.currentUser.friends.includes(user.id));

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{width: "100%", alignContent:"flex-start", flexDirection:'row', paddingLeft: 22, paddingBottom:30}}
            onPress={navigation.goBack}>
            <Icon type='font-awesome' name="chevron-left" size={20} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: "100%", alignContent:"flex-start", paddingLeft: 315, paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 20}}>
                    Follow
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignContent:"center",
            paddingVertical: 2, paddingLeft: 22, width:"100%", alignItems:"center"}}>
            <Avatar
            rounded
            icon={{
            name: 'person-outline',
            type: 'material',
            size: 40,
            }}
            containerStyle={{ backgroundColor: '#c2c2c2', width: 100, height: 100, borderRadius: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 16, width:"100%" }}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{user.name}</Text>
                <Text style={{ color: 'white' }}>{user.username}</Text>
            </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#121212',
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 60,
    },
    headerContainer: {
        alignItems: 'center',
        paddingTop: 150,
        justifyContent: 'center',
        width: '100%'
    }
  });