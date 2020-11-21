

const Section = ({ children, title, addedClasses, otherProps }) => {
    return (
        <section className={'section ' + addedClasses} {...otherProps}>
            <div className="container is-max-widescreen has-text-centered">
                <h6 className="title is-size-5">
                    <b>{title}</b>
                    <hr className="title-underline mlr-auto" />
                </h6>
                {children}
            </div>
        </section>
    )
}


export default Section