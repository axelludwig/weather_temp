import React from 'react';

class Chiasse extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { clicked: false };
        // this.handleClick = this.handleClick.bind(this);


        this.state = {
            value: false,
            test: 'salut'
        }

    }

    handleClick = () => {



        this.setState({
            value: true
        }, () => {
            console.log('ok dfdf! !!!!')
        })

        console.log(this.props.test)

        var t;
        // console.log('ok')
        fetch('http://localhost:3000/chiasse')
            .then((caca) => {
                console.log(caca);
                console.log(this.props.test)
                t = 'sjhdf !!!!'
                // console.log('la merde est :' + caca.)
            })

        console.log(t)
    }



    render() {


        var res;

        if (this.state.value) res = (<p style={{ color: 'green' }}> OK !!! </p>)
        else res = <p style={{ color: 'red' }}> pas ok ... </p>



        return (
            <div style={{
                marginBottom: 50,
                color: 'red'
            }}>
                <p> chiasse </p>
                <button onClick={this.handleClick}> button </button>
                {res}
            </div>
        )
    }
}

export default Chiasse;