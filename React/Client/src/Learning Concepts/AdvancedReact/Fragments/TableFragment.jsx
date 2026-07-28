import React from 'react'

function TableFragment() {
  return (
    <table border="1">
        <tbody>
            <tr>
                <React.Fragment>
                    <td>1</td>
                    <td>Teja</td>
                    <td>React Developer</td>
                </React.Fragment>
            </tr>
        </tbody>
    </table>
  )
}

export default TableFragment