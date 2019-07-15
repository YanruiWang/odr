import React from "react";
import {Button, View, SectionList, Text, StyleSheet} from "react-native";
import {fake} from '../RandomContact';
import SingleContact from "./SingleContact"
import ContactHeader from "./ContactHeader"
import ContactDetail from "./ContactDetail"
import fetchUser from "./ContactRequest"

const styles = StyleSheet.create({
    header: {
        marginTop: 15,
        marginBottom: 20,
    },
    contacts: {
        padding: 15,
    },
});

const acc = (previous, current) => {
    const initial = current.name[0];
    if (previous[initial]) {
        previous[initial].push(current)
    } else {
        previous[initial] = [current]
    }
    return previous
};


class ContactView extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '联系人',
            headerTintColor: "teal",
            headerStyle: {
                backgroundColor: '#ddd'
            }
        }

    }

    _generateData = (users) => {
        const contacts = this._sortContact(users)
        const fakeKeys = Object.keys(contacts)
        const realData = fakeKeys.map((singleKey) => ({data: contacts[singleKey], title: singleKey}))
        this.setState({realData: realData})
    }

    _sortContact = (previousContact) => {
        return previousContact.reduce(acc, {})
    }

    componentDidMount() {
        fetchUser()
        .then(users => this._generateData(users))
    }

    constructor() {
        super();
        this.state = {
            contacts: {},
            originalContacts: [],
            realData: [],
        }
    }

    _onSelectContact = (name, phone) => {
        this.props.navigation.push('Detail', {name: name, phone: phone})
    };

    _renderItem = ({item}) => <SingleContact name={item.name} phone={item.phone} onSelectContact={this._onSelectContact}/>

    _renderSection = ({section}) => <ContactHeader name={section.title}/>;

    _sort = () => {
        this._generateData()
    };

    render() {
        return (
            <View style={{borderWidth:5, borderColor:'purple'}}>

                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSection}
                    sections={this.state.realData}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
            
        );
    }
}

export default ContactView