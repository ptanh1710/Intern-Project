import React from 'react';
import PropTypes from 'prop-types';

function Category({ data, onClick }) {
    return (
        <div>
            {data.map((category) => (
                <p key={category}>{category}</p>
            ))}
        </div>
    );
}

Category.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func,
};

export default Category;
