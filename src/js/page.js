/*
 * Never-Get-Rickrolled <https://github.com/Micorksen/Never-Get-Rickrolled>
 * Copyright 2022 Matteo C. <https://micorksen.eu.org>
 * Available under MIT license <https://mths.be/mit>
*/

"use strict";
/* Initialize elements part. */
const detailsButton = $("#details-button"),
    details = $("#details");

detailsButton.html(window.translations["open-details"]);
/* End initialize elements part. */

/* Details button part. */
detailsButton.on("click", () =>{
    const expanded = JSON.parse(detailsButton.attr("aria-expanded"));

    detailsButton.attr("aria-expanded", !expanded);
    details.toggleClass("hidden");

    if(expanded) detailsButton.html(window.translations["open-details"]);
    if(!expanded) detailsButton.html(window.translations["close-details"]);
});
/* End details button part. */
