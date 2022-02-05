/*
 * Never-Get-Rickrolled <https://github.com/Micorksen/Never-Get-Rickrolled>
 * Copyright 2022 Matteo C. <https://micorksen.eu.org>
 * Available under MIT license <https://mths.be/mit>
*/

"use strict";
/* Elements part. */
const detailsButton = $("#details-button"),
    details = $("#details");
/* End elements part. */

/* Details button part. */
const detailsButton = $("#details-button");
detailsButton.on("click", () =>{
    const expanded = JSON.parse(detailsButton.attr("aria-expanded"));

    detailsButton.attr("aria-expanded", !expanded);
    details.toggleClass("hidden");

    if(expanded) details.html(window.translations["open-details"]);
    if(!expanded) details.html(window.translations["close-details"]);
});
/* End details button part. */
