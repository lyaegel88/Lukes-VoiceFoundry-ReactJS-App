import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {
    state = {
        phoneNumber1: {},
        phoneNumber2: {},
        phoneNumber3: {},
        phoneNumber4: {},
        phoneNumber5: {}
    }

    componentDidMount() {
        axios.get('https://0ga8uliqsa.execute-api.us-east-1.amazonaws.com/dev').then(result => {
            this.setState({Items: result.data.Items});
            this.setState({phoneNumber1: result.data.Items[0] !== undefined ? result.data.Items[0] : {}});
            this.setState({phoneNumber2: result.data.Items[1] !== undefined ? result.data.Items[1] : {}});
            this.setState({phoneNumber3: result.data.Items[2] !== undefined ? result.data.Items[2] : {}});
            this.setState({phoneNumber4: result.data.Items[3] !== undefined ? result.data.Items[3] : {}});
            this.setState({phoneNumber5: result.data.Items[4] !== undefined ? result.data.Items[4] : {}});

            console.log(result.data.Items);
        })
    }

    render() {
        return <div>
            <section>
                <h4>Most Recent Caller: {this.state.phoneNumber1.PHONE_NUMBER}</h4>
                <p>{this.state.phoneNumber1.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber1.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber1.VANITY_NUM_2}</p>
                <p>{this.state.phoneNumber1.VANITY_NUM_3}</p>
                <p>{this.state.phoneNumber1.VANITY_NUM_4}</p>
            </section>
            <section>
                <h4>Recent Caller: {this.state.phoneNumber2.PHONE_NUMBER}</h4>
                <p>{this.state.phoneNumber2.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber2.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber2.VANITY_NUM_2}</p>
                <p>{this.state.phoneNumber2.VANITY_NUM_3}</p>
                <p>{this.state.phoneNumber2.VANITY_NUM_4}</p>
            </section>
            <section>
                <h4>Recent Caller: {this.state.phoneNumber3.PHONE_NUMBER}</h4>
                <p>{this.state.phoneNumber3.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber3.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber3.VANITY_NUM_2}</p>
                <p>{this.state.phoneNumber3.VANITY_NUM_3}</p>
                <p>{this.state.phoneNumber3.VANITY_NUM_4}</p>
            </section>
            <section>
                <h4>Recent Caller: {this.state.phoneNumber4.PHONE_NUMBER}</h4>
                <p>{this.state.phoneNumber4.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber4.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber4.VANITY_NUM_2}</p>
                <p>{this.state.phoneNumber4.VANITY_NUM_3}</p>
                <p>{this.state.phoneNumber4.VANITY_NUM_4}</p>
            </section>
            <section>
                <h4>Recent Caller: {this.state.phoneNumber5.PHONE_NUMBER}</h4>
                <p>{this.state.phoneNumber5.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber5.VANITY_NUM_1}</p>
                <p>{this.state.phoneNumber5.VANITY_NUM_2}</p>
                <p>{this.state.phoneNumber5.VANITY_NUM_3}</p>
                <p>{this.state.phoneNumber5.VANITY_NUM_4}</p>
            </section>
        </div>
    }

}

export default Home;
