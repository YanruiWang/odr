import React from "react";
import {View, SectionList, StyleSheet} from "react-native";
import SingleContact from "./SingleContact"
import ContactHeader from "./ContactHeader"
import {fetchUser, getRandomUser} from "./ContactRequest"
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from "../actions/ContactActions"


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
        // this.props.getRandomUser()
    }

    constructor() {
        super();
        this.state = {
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

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);

// export default ContactView