import React from 'react'
import './style.css'

class Decimal extends React.Component {
  constructor() {
    super();
    this.state = {
      choose: '',
      convert: '',
      begin: 0,
      result: ''
    }
  }

  choose = (event) => {
    this.setState({choose: event.target.value});
  }

  convert = (event) => {
    this.setState({convert: event.target.value});
  }

  begin = (event) => {
    this.setState({begin: event.target.value});
  }

  hitung = () => {
    let choose = this.state.choose
    let convert = this.state.convert
    let begin = this.state.begin

    if (convert == 10) {
      this.setState({result: begin})
    } else if (convert == 2) {
      let dec = begin * 1
      let bin = dec.toString(2)
      this.setState({result: bin})
    } else if (convert == 8) {
      let dec = begin * 1
      let oct = dec.toString(8)
      this.setState({result: oct})
    } else if (convert == 16) {
      let dec = begin * 1
      let hex = dec.toString(16).toUpperCase()
      this.setState({result: hex})
    }
  }
  render() {
    return (<center>
      <div className="rfont l1 bg-dark text-light mb-5">
        <div>
          <h3 className="mt-3 mb-3">Decimal Conversion</h3>
        </div>
        <hr/>
        <table>

          <tr>
            <td>
              <div class="form-group">
                <label name="choose" value="10">Decimal</label>
                <input name="begin" class="form-control" onChange={this.begin} type="number"/>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="form-group">
                <label >Convert To</label>
                <select className="form-control" name="convert" onChange={this.convert}>
                  <option>Select Conversion -</option>
                  <option name="convert" value="10">Decimal</option>
                  <option name="convert" value="2">Binary</option>
                  <option name="convert" value="8">Octal</option>
                  <option name="convert" value="16">Hexadecimal</option>
                </select>
              </div>
            </td>
          </tr>

        </table>
        <button className="btn btn-primary" onClick={this.hitung}>Convert</button>
        <hr/>
        <h4>Result</h4>
        <input className="form form-control mb-3" name="result" value={this.state.result} disabled="disabled"/>
      </div>
    </center>);
  }
}
export default Decimal;
