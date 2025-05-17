import { Fragment } from "react"

function Greetings(props) {
    return (
    <Fragment>
      <h1>
        Hello, {props.name} {props.surname}!
      </h1>
      <h2>This text was not there originaly</h2>
      </Fragment>
    )
}

export default Greetings