import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.request = fetch('http://api.metro.net/agencies/lametro/routes/')
                      .then(response => this.setState({ data: response }), this);
  }

  render() {
    return <div>test</div>
  }
}

FormContainer.propTypes = {

};

FormContainer.defaultProps = {

};

export default FormContainer;
