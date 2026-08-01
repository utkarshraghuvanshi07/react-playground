let About = (props) => {
    
    console.log(props);
    

    return <nav>
        <h1>Hey i am bout</h1>
        {props.children}
    </nav>;
}

export default About;