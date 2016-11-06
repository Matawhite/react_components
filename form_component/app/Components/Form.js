var React = require('react');

var Form = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Form Capture</h2>
            <p><em>Type Numbers and text in the appropriate boxes.</em></p>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Form</h3>
                <div className="panel-body text-center">
                  <form>
                    <div className="form-group">

                      <h4><strong>Number 1</strong></h4>
                      <input type="number" value="" className="form-control" id="num1" required/>

                      <h4><strong>Number 2</strong></h4>
                      <input type="number" value="" className="form-control" id="num2" required/>

                      <h4><strong>Random Text</strong></h4>
                      <input type="text" value="" className="form-control" id="text" required/>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h2>Some Numbers Here</h2>
                    <h2>Some Numbers Here</h2>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
})

module.exports = Form
