/*
 * Never-Get-Rickrolled <https://github.com/Micorksen/Never-Get-Rickrolled>
 * Copyright 2022 Matteo C. <https://micorksen.eu.org>
 * Available under MIT license <https://mths.be/mit>
*/

"use strict";
/* Initialize elements part. */
const detailsButton = $("#details-button"),
    details = $("#details"),
    errorCode = $("#error-code"),
    errorDebuggingInfo = $("#error-debugging-info"),
    proceedLink = $("#proceed-link");

detailsButton.html(window.translations["open-details"]);
/* End initialize elements part. */

/* Details button part. */
detailsButton.on("click", () =>{
    const expanded = JSON.parse(detailsButton.attr("aria-expanded"));

    details.toggleClass("hidden");
    detailsButton.attr("aria-expanded", !expanded);

    if(expanded) detailsButton.html(window.translations["open-details"]);
    if(!expanded) detailsButton.html(window.translations["close-details"]);
});
/* End details button part. */

/* Error code part. */
errorCode.on("click", () =>{
     const expanded = JSON.parse(errorCode.attr("aria-expanded"));

     errorDebuggingInfo.toggleClass("hidden");
     errorCode.attr("aria-expanded", !expanded);
});
/* End error code part. */

/* Proceed link code part. */
proceedLink.attr("href", `${window.location.search.replace("?fullURL=", "")}#rickroll-allowed`);
/* End proceed link code part. */
