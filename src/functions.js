/*
 * Never-Get-Rickrolled functions <https://github.com/Micorksen/Never-Get-Rickrolled>
 * Copyright 2022 Matteo C. <https://micorksen.eu.org>
 * Available under MIT license <https://mths.be/mit>
 * Some functions come from other libraries.
*/

"use strict";
console.image = async(url, scale = 1, position = "center") =>{
    return new Promise((resolve) =>{
        const image = new Image();
        image.onload = () =>{
            const width = image.width * scale,
                height = image.height * scale;

            console.log(`%c.`, `
                display: block !important;
                margin: 10px 0px;
                font-size: 0px;
                padding: ${Math.floor(height / 2)}px ${Math.floor(width / 2)}px;
                background: url(${url}) no-repeat center;
                background-size: ${width}px ${height}px;
                color: transparent;
            `);
            
            resolve();
        };

        image.src = url;
    });
};

console.list = (groupName, ...elements) =>{
    console.group(groupName);
    elements.forEach((element) => console.log(element));
    console.groupEnd();
};
