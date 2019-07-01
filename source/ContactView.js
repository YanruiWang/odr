import React from "react";
import {Button, View, SectionList, Text} from "react-native";
import {fake} from './RandomContact';


const acc = (previous, current) => {
    const initial = current.name[0]
    if (previous[initial]) {
        previous[initial].push(current)
    } else {
        previous[initial] = [current]
    }
    return previous
};

class ContactHeader extends React.Component {
    render() {
        return(<Text>{this.props.name}</Text>)
    }
}

class SingleContact extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.phone}</Text>
            </View>
        )
    }
}

class ContactView extends React.Component {

    _generateData = () => {
        const fakeContacts = this._sortContact(this.state.originalContacts)
        const fakeKeys = Object.keys(fakeContacts)
        const realData = fakeKeys.map((singleKey) => ({data: fakeContacts[singleKey], title: singleKey}))
        this.setState({realData: realData})
    }

    _sortContact = (previousContact) => {
        return previousContact.reduce(acc, {})
    }

    componentDidMount(): void {
        this._generateData()
    }

    constructor() {
        super()
        this.state = {
            contacts: {},
            originalContacts: fake,
            realData: [],
        }
    }

    _renderItem = ({item}) => <SingleContact name={item.name} phone={item.phone}/>

    _renderSection = ({section}) => <ContactHeader name={section.title}/>

    _sort = () => {
        this._generateData()
    }

    render() {
        return (
            <View>
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