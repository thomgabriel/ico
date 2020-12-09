import React, { Component } from 'react'
import BuyForm from './BuyForm'
import gaugeFieldLogo from '../img/logos_gaugefield_vertical.png'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    {
      content = <BuyForm
      LinkBalance={this.props.LinkBalance}
      GAUfBalance={this.props.GAUfBalance}
      buyGaufWithEther={this.props.buyGaufWithEther}
      buyGaufWithLink={this.props.buyGaufWithLink}
      ethBalance={this.props.ethBalance}
      />
    }
    return (
      <div id="content " className="mt-3">
        <div className="card mb-4 margin-topper buy-background" >
        <div className="container-div ">
        <img src={gaugeFieldLogo} width="35%" alt="" className="center"/>
        </div>
          <div className="card-body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
