import React from "react";

const List =({item,include}) =>{
    return(
        <li>{item}
        {! include && "{incorrect}"}
        </li>
    )
}

const Package = () =>{
    return(
        <section>
            <h1>Trip package</h1>
            <ul>
                <List item="Break" include={true}/>
                <List item="Accomadation" include={true}/>
                <List item="Flight " include={false}/>
            </ul>
        </section>
    );
};

export default Package;
