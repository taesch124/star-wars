import React, {Component} from 'react';
import axios from 'axios';

//Models
import InfiniteList from './../Lists/InfiniteList';
import Message from './../Message/Message';

//CSS
import './MasterDetailContainer.scss';
//temp

class MasterDetailContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItemUrl: '',
            selectedItem: null,
            lastScrollPosition: -1
        }
    }

    render() {
        const PanelComponent = this.props.panelComponent;
        return (
            <div className="master-detail-container">
                <div id="master-container">
                <InfiniteList
                    startingUrl={this.props.startingUrl}
                    selectedItem={this.state.selectedItem}
                    listItemComponent={this.props.listItemComponent}
                    selectItem={this.selectItem}
                    listLoaded={this.setScrollPosition}
                />
                </div>
                <div id="detail-container">
                    {this.state.selectedItem ?
                    <PanelComponent 
                        item={this.state.selectedItem}
                        toggleDetails={this.toggleDetails}
                        deselectItem={this.deselectItem}
                    />
                    :
                    <Message
                        message="This isn't the droid you're looking for."
                    />
                    }
                </div>
                
            </div>
        )
    }

    selectItem = async (e, itemUrl) => {
        let currentPanel = document.getElementById('selected-item');
        if(currentPanel && currentPanel.classList.contains('flip')) this.toggleDetails();
        this.clearSelected();
        e.currentTarget.classList.add('selected');
        axios.get(itemUrl)
        .then(async response => {
            let person = response.data;
            console.log(person);
            if(this.props.customPostLoad) {
                const species = await this.props.customPostLoad(person);
                console.log(species);
            }
            this.setState({
                selectedItem: person,
                lastScrollPosition: window.scrollY
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    setScrollPosition = () => {
        if(this.state.lastScrollPosition >= 0) {
            window.scrollTo(0, this.state.lastScrollPosition);
        }
    }

    deselectItem = () => {
        console.log(this.state.lastScrollPosition)
        this.setState({
            selectedItem: null,
        });
    }

    toggleDetails = (e) => {
        let panel = document.getElementById('selected-item');

        if(panel.classList.contains('flip')) {
            panel.classList.remove('flip');
        } else {
            panel.classList.add('flip');
        }
        
    }

    clearSelected = () => {
        let listItems = document.getElementsByClassName('list-item');

        for(let i = 0; i < listItems.length; i++) {
            let item = listItems[i];
            if(item.classList.contains('selected')) item.classList.remove('selected');
        }

    }
}

export default MasterDetailContainer;