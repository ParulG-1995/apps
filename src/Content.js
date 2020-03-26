import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
    render() {
        const {payload } = this.props;
        return (
            <div className="table-responsive height">
                <tbody className="width">
                    <tr className="width">
                        <th scope="row" className="width"></th>
                        <td className="width text-capitalize">{email}</td>
                    </tr>
                </tbody>
            </div>

        );
    }
}

export default Content;