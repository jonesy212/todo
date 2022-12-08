import React from 'react';

class UsersList extends React.Component {

    render() {
        const { users } = this.props;
        return (
            <ul>
                {users.map((user) => {
                    <li key={user.id}> {user.name}</li>
            })}
            </ul>
        )
    }
}

export default UsersList