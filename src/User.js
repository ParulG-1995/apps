import React from 'react'
import Content from './Content'

class User extends React.Component {
    render() {
        const { payload } = this.props
        return (
            <div>
                <table className="table table-striped table-bordered table-hover">
                    {
                        payload.items.map(item => {
                            return (
                                <Content key={item.id}
                                    title={item.title}
                                    payload={this.props.payload}
                                />
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default User