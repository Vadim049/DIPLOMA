import React from 'react';
import './History.css';


export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.historyList = React.createRef();
    }



    render() {
        const historyClassName = this.props.isShowHistory ? "history" : "history hidden";

        return (
            <div className={historyClassName}>
                <div className="history-list" ref={this.historyList}>
                    {
                        this.props.history.map((item, index) => {
                            return (
                                <div key={index} className="history-item">
                                    <div className="history-item-formula">{item.formula.join("")}</div>
                                    <div className="history-item-result" value={item.result} onClick={this.props.onHistoryItemClicked}>={item.result}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bottom-btns">
                    <button id="clear-history" onClick={this.props.onClearHistory}>Clear</button>
                    <button id="calculate" onClick={this.props.onEqual}>Equal</button>
                </div>
            </div>
        )
    }
}