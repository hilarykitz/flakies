import React, { useState } from 'react';

export const UserForm = () => {
    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});

    const saveDetails = (e) => console.log(e, "Aoisdhasodih") && e.preventDefault();
    return (
        <form className="form" onSubmit={(e) => saveDetails(e)}>
            <div>
                <label>You:</label><br/>
                <input autoComplete="off" name="user1-name" placeholder="Name" onChange={(e) => setUser1({ ...user1, name: e.target.value })} />
                &nbsp; 
                <input autoComplete="off" name="user1-phone" placeholder="Phone number" onChange={(e) => setUser1({ ...user1, phoneNumber: e.target.value })} />
            </div>
            <div>
                <label>Them:</label><br/>
                <input
                    autoComplete="off"
                    name="user2-name" 
                    placeholder="Name"
                    onChange={(e) => setUser2({ ...user2, name: e.target.value })} /> &nbsp; 
                
                <input
                    autoComplete="off"
                    name="user2-phone" 
                    placeholder="Phone number"
                    onChange={(e) => setUser2({ ...user2, phoneNumber: e.target.value })} />
            </div>

            
            {user1.name && user1.phoneNumber && user2.name && user2.phoneNumber && (
                <button type="submit">Pencil it in!</button>
            )}
        </form>
    );
}