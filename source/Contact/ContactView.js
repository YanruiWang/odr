import React from "react";
import {SectionList, StyleSheet, View} from "react-native";
import SingleContact from "./SingleContact"
import ContactHeader from "./ContactHeader"
import {connect} from 'react-redux';
import {getRandomUser} from "../reducers/index";


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

    };



    componentDidMount() {
        // fetchUser()
        // .then(users => this._generateData(users))
        this.props.getRandomUser()
    }

    constructor(props) {
        super(props);
        this.state = {
            realData: [],
        }
    }

    _onSelectContact = (name, phone) => {
        this.props.navigation.push('Detail', {name: name, phone: phone})
    };

    _renderItem = ({item}) => <SingleContact name={item.name} phone={item.phone} onSelectContact={this._onSelectContact}/>

    _renderSection = ({section}) => <ContactHeader name={section.title}/>;

    render() {
        return (

            <View style={{borderWidth:5, borderColor:'purple'}}>

                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSection}
                    sections={this.props.realData}
                    keyExtractor={(item, index) => item + index}
                />
            </View>


        );
    }
}

const _generateData = (users) => {
    const contacts = _sortContact(users);
    const fakeKeys = Object.keys(contacts);
    return fakeKeys.map((singleKey) => ({data: contacts[singleKey], title: singleKey}))
};

const _sortContact = (previousContact) => {
    return previousContact.reduce(acc, {})
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    // const data = _generateData(state.dataReducer.realData);
    // props.realData = data;
    return {
        realData: _generateData(state.dataReducer.realData),
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = {
    getRandomUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);

// export default ContactView