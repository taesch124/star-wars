import React, { Component } from 'react';
import axios from 'axios';

import './InfiniteList.scss';

class InfiniteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemList: [],
            nextItemsUrl: '',
            endOfList: false
        }
    }

    componentDidMount() {
        this.getNextItems(this.props.startingUrl);
        let wrapper = document.getElementById('master-container');
        wrapper.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        let wrapper = document.getElementById('master-container');
        wrapper.removeEventListener('scroll', this.trackScrolling)
    }
    
    render() {
        const ListItemComponent = this.props.listItemComponent;
        return (
            <div id="master-list" className="list infinite-list">
                <ul className="infinite-list-group">
                    {this.state.itemList.length > 0 ?
                    this.state.itemList.map(item => {
                        return (
                            <ListItemComponent
                                key={item.url}
                                item={item}
                                selectItem={this.props.selectItem}
                            />
                        )
                    }) :
                    <div className="list-loading">
                        <img className="loading-icon" src={process.env.PUBLIC_URL + '/assets/images/loaders/circle-loader.gif'} alt="Loading icon" />
                    </div>}
                </ul>
            </div>
        )
    }

    getNextItems = (url) => {
        axios.get(url)
        .then(response => {
            let newList = [...this.state.itemList, ...response.data.results];
            console.log(newList);
            this.setState({
                itemList: newList,
                nextItemsUrl: response.data.next,
                endOfList: false,
            }, () => {
                this.props.listLoaded();
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    trackScrolling = (e) => {
        let wrappedElement = document.getElementById('master-list');
        if(this.isBottom(wrappedElement) && !this.state.endOfList) {
            this.setState({
                endOfList: true
            }, () => {
                if(this.state.nextItemsUrl) this.getNextItems(this.state.nextItemsUrl);
            });
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
}

export default InfiniteList;