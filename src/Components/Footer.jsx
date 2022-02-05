import React from 'react';
import '../Index.css';

const Footer = () => {
    return (
        <footer>
            <p className="text-center flex-end"
                style={{ position: 'fixed', top:'450px', width: '100%', backgroundColor: 'darkgray', height: '30px'}}>
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

export default Footer