import PropTypes from 'prop-types';

export default function Page({ children }) {
    return (
        <div className="container px-5">
            {children}
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.element.isRequired
}

