import React from "react";
import { View, Text, Button, SectionList } from "react-native";
import {fake} from './RandomContact';


const acc = (previous, current) => {
    const inintial = current.name[0]
    if (previous[inintial]) {
        previous[inintial].push(current)
    } else {
        previous[inintial] = [current]
    }
    return previous
}

class ContactView extends React.Component {

    _sortContact = (previousContact) => {
        const sorted = previousContact.reduce(acc, {})
        return sorted
    }

    constructor() {
        super()
        this.state = {
            contacts: {},
            originalContacts: fake,
        }
    }

    _sort = () => {
        const fakeContacts = this._sortContact(this.state.originalContacts)
        this.setState({contacts: fakeContacts})
    }

    render() {
        return (
            <View>
                <Button onPress={this._sort} title="sort"></Button>
            </View>
            
        );
    }
}

export default ContactView